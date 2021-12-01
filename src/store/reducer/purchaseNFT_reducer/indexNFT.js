import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tribeNFT from './tribeNFT.json';

import { nftIds, nftState } from './purchaseNFTInitialStates';

export const initializeNFT = createAsyncThunk(
	'InitializeLaunches',
	async (action, thunkAPI) => {
    thunkAPI.dispatch(
      nftSlice.actions.setMepadToken({})
    );
		for (let i = 0; i < nftIds.length; ++i) {
			thunkAPI.dispatch(initNFT(nftIds[i]));
		}
	},
);

export const initNFT = createAsyncThunk(
	'initNFT',
	async (action, thunkAPI) => {
		await thunkAPI.dispatch(initNFTContract(action));
		await thunkAPI.dispatch(initNFTInfo(action));
		await thunkAPI.dispatch(loadNFTInfo(action));
	},
);

export const initNFTContract = createAsyncThunk(
	'InitContract',
	async (action, thunkAPI) => {
		try {
			const { web3 } = thunkAPI.getState().web3;
			const binanceChainId = tribeNFT.network;
			const chainId = await web3.eth.getChainId();
			if (chainId !== binanceChainId)
				// eslint-disable-next-line
				throw 'Please Connect to Binance Smart Chain';
			const nftContract = new web3.eth.Contract(
				tribeNFT[action].stakingAbi,
				tribeNFT[action].nftAddress,
			);
			return {
				nftContract,
				stakeId: action,
			};
		} catch (error) {
			console.log('Error initializing contract for nft: ', error);
			throw error;
		}
	},
);

export const initNFTInfo = createAsyncThunk(
	'InitInfo',
	async (action, thunkAPI) => {
		try {
			const { nftContract } = thunkAPI.getState().staking[action];

			const totalSupply = await nftContract.methods.totalSupply().call();

			return {
				totalSupply,
				stakeId: action,
			};
		} catch (error) {
			console.log('Error initializing info for nft:', error);
			throw error;
		}
	},
);

export const loadNFTInfo = createAsyncThunk(
	'LoadInfo',
	async (action, thunkAPI) => {
		try {
			const { address } = thunkAPI.getState().web3;

			const { nftContract } = thunkAPI.getState().staking[action];

			const responses = await Promise.all([
				nftContract.methods.whitelisted(address).call(),
				nftContract.methods.whitelistedAmount(address).call(),
			]);
			return {
				enabled: Boolean(
					Number(responses[1] > 0) && Number(responses[0] == true),
				),
			};
		} catch (error) {
			console.log('Error in loading info for nft:', error);
			throw error;
		}
	},
);

export const buyNFT = createAsyncThunk(
	'StakeMEPAD',
	async (action, thunkAPI) => {
		try {
			const { address } = thunkAPI.getState().web3;
			const { nftContract } = thunkAPI.getState().staking[action.id];
			await nftContract.methods.mint().send({ from: address });
			thunkAPI.dispatch(loadNFTInfo(action.id));
		} catch (error) {
			console.log('Cant Buy NFT: ', error);
		}
	},
);

const nftSlice = createSlice({
	name: 'StakingReducer',
	initialState: nftState,
  reducers: {
    setMepadToken: (state, action) => {},
  },
  extraReducers: {
		[initNFTInfo.fulfilled]: (state, action) => {
			console.log('initInfo fulfilled for nft');
			const stakeId = action.payload.stakeId;
      state[stakeId].nftContract = action.payload.nftContract;
			state[stakeId].totalSupply = action.payload.totalSupply;
		},
		[loadNFTInfo.fulfilled]: (state, action) => {
			console.log('loadInfo fulfilled for nft');
			const stakeId = action.payload.stakeId;
			state[stakeId].enabled = action.payload.enable;
		},
  },
});

export const stakingReducer = nftSlice.reducer;
export const { setMepadToken } = nftSlice.actions;
