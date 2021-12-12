import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tribeNFT from './tribeNFT.json';

import { nftIds, nftState } from './purchaseNFTInitialStates';

export const initializeNFT = createAsyncThunk(
	'Initialize nfts',
	async (action, thunkAPI) => {
		thunkAPI.dispatch(nftSlice.actions.setContract({}));
		for (let i = 0; i < nftIds.length; ++i) {
			thunkAPI.dispatch(initNFT(nftIds[i]));
		}
	},
);

export const initializeNFTInfo = createAsyncThunk(
	'Initialize nfts INFO',
	async (action, thunkAPI) => {
		thunkAPI.dispatch(nftSlice.actions.setContract({}));
		for (let i = 0; i < nftIds.length; ++i) {
			thunkAPI.dispatch(initNFTInfoLoading(nftIds[i]));
		}
	},
);

export const initNFT = createAsyncThunk('initNFT', async (action, thunkAPI) => {
	await thunkAPI.dispatch(initNFTContract(action));
	await thunkAPI.dispatch(initNFTInfo(action));
	await thunkAPI.dispatch(loadNFTInfo(action));
});

export const initNFTInfoLoading = createAsyncThunk(
	'initNFTInfo',
	async (action, thunkAPI) => {
		await thunkAPI.dispatch(initNFTInfo(action));
		await thunkAPI.dispatch(loadNFTInfo(action));
	},
);

export const initNFTContract = createAsyncThunk(
	'InitContract nft',
	async (action, thunkAPI) => {
		try {
			const { web3 } = thunkAPI.getState().web3;
			const binanceChainId = tribeNFT.network;
			const chainId = await web3.eth.getChainId();
			if (chainId !== binanceChainId)
				// eslint-disable-next-line
				throw 'Please Connect to Binance Smart Chain';
			const nftContract = new web3.eth.Contract(
				tribeNFT[action].nftAbi,
				tribeNFT[action].nftAddress,
			);

			return {
				nftContract,
				nftId: action,
			};
		} catch (error) {
			console.log('Error initializing contract for nft: ', error);
			throw error;
		}
	},
);

export const initNFTInfo = createAsyncThunk(
	'InitInfo NFT',
	async (action, thunkAPI) => {
		try {
			const { nftContract } = thunkAPI.getState().nft[action]; //error destructure contract as its undefined

			const totalSupply = await nftContract.methods.totalSupply().call();

			return {
				totalSupply,
				nftId: action,
			};
		} catch (error) {
			console.log('Error initializing info for nft:', error);
			throw error;
		}
	},
);

export const loadNFTInfo = createAsyncThunk(
	'LoadInfo NFT',
	async (action, thunkAPI) => {
		try {
			const { address } = thunkAPI.getState().web3;

			const { nftContract } = thunkAPI.getState().nft[action]; //error destructure contract as its undefined
			const responses = await Promise.all([
				nftContract.methods.whiteListedContract().call(),
				nftContract.methods.whitelistedAmount(address).call(),
				nftContract.methods.balanceOf(address).call(),
			]);
			const enabledBoolean = Boolean(
				Number(responses[0] == false || Number(responses[1]) > 0),
			);
			const balance = Number(responses[2]);
			return {
				balance,
				enabledBoolean,
				nftId: action,
			};
		} catch (error) {
			console.log('Error in loading info for nft:', error);
			throw error;
		}
	},
);

export const buyNFT = createAsyncThunk('Buy NFT', async (action, thunkAPI) => {
	try {
		const { address } = thunkAPI.getState().web3;
		const { nftContract } = thunkAPI.getState().nft[action.id];
		await nftContract.methods
			.mint()
			.send({ value: action.amount * 10 ** 18, from: address });
		thunkAPI.dispatch(loadNFTInfo(action.id));
	} catch (error) {
		console.log('Cant Buy NFT: ', error);
	}
});

const nftSlice = createSlice({
	name: 'NFTReducer',
	initialState: nftState,
	reducers: {
		setContract: (state, action) => {},
	},
	extraReducers: {
		[initNFTContract.fulfilled]: (state, action) => {
			console.log('initInfo fulfilled for nft');
			const nftId = action.payload.nftId;
			state[nftId].nftContract = action.payload.nftContract;
		},
		[initNFTInfo.fulfilled]: (state, action) => {
			console.log('initInfo fulfilled for nft');
			const nftId = action.payload.nftId;
			state[nftId].totalSupply = action.payload.totalSupply;
		},
		[loadNFTInfo.fulfilled]: (state, action) => {
			console.log('loadInfo fulfilled for nft');
			const nftId = action.payload.nftId;
			state[nftId].enabled = action.payload.enabledBoolean;
			state[nftId].balance = action.payload.balance;
		},
	},
});

export const nftReducer = nftSlice.reducer;
export const { setContract } = nftSlice.actions;
