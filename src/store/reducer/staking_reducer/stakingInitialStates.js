import memepad from "./memepad.json";
// import smallElon from "../../../images/smallElon.png";
import smallMepad from "../../../images/tribe_pool.png";
import smallBusd from "../../../images/busd.png";

export const stakeIds = ["mepad2"];

//Initial values of the stake, used when metamask is not connected.
//When metamask is connected, these values will update based on the contract.

const subTitleLP = <span>Stake your TRIBEX BUSD LP, <br /> Lock 30 days & Receive an NFT</span>
const subTitleFixedTerm = <span>Lock your TRIBEX for 90 days <br /> & Earn Reward + Double Allocation.</span>

export const stakingState = {
  mepadTokenContract: null,
  lpTokenContract: null,
  decimals: 18,
  mepadTokens: 0,
  mepad2: {
    stakingContract: null,
    enabled: false,
    pendingReward: 0,
    stakedAmount: 0,
    rewardPerYear: 0,
    totalStakingTokens: 0,
    stakingUrl: memepad.prefix + memepad.mepad2.stakingAddress + "#code", //Constant, not affected by metamask
    image: smallMepad, //Constant, not affected by metamask
    title: "Fixed Term Staking", //Constant, not affected by metamask
    subTitle: subTitleFixedTerm, //Constant, not affected by metamask
    symbol: "TRIBEX", //Constant, not affected by metamask
    isCompleted: false, //This value got fetched from contract and became false eventually
    beforeUnlockBtnText: 'Lock 90 days = Reward + Double Allocation',
  },
};
