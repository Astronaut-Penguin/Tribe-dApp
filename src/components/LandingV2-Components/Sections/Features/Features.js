//- Import React
import React from 'react';

//- Import Styles
import styles from './Features.module.css';

//- Import Logos
import CelebrityValidated from '../../../../images/CelebrityValidated.png';
import ScheduledBurns from '../../../../images/ScheduledBurns.png';
import MetaverseSkinReady from '../../../../images/MetaverseSkinReady.png';
import StakingRewards from '../../../../images/StakingRewards.png';
import LaunchpadAllocations from '../../../../images/LaunchpadAllocations.png';
import GamificationRigging from '../../../../images/GamificationRigging.png';

const FeatureSection = () => {
    return (
        <section className={styles.Container}>
            <h2>Features</h2>
            <h3>Our NTFs attributes</h3>
            <div className={styles.Cards}>
                <div className={styles.Card}>
                    <img src={CelebrityValidated}/>
                    <span>Celebrity Validated</span>
                </div>
                <div className={styles.Card}>
                    <img src={ScheduledBurns}/>
                    <span>Scheduled Burns</span>
                </div>
                <div className={styles.Card}>
                    <img src={MetaverseSkinReady}/>
                    <span>Metaverse Skin Ready</span>
                </div>
                <div className={styles.Card}>
                    <img src={StakingRewards}/>    
                    <span>Staking Rewards</span>
                </div>
                <div className={styles.Card}>
                    <img src={LaunchpadAllocations}/>
                    <span>Launchpad Allocations</span>
                </div>
                <div className={styles.Card}>
                    <img src={GamificationRigging}/>
                    <span>Gamification Rigging</span>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;