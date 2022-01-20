//- Import React
import React from 'react';

//- Import Styles
import styles from './Tiers.module.css';

//- Import Card
import CardTier from '../../Cards/CardTier/CardTier';

//- Import Images
import Caveman from './assets/Caveman.png';
import CavemanLogo from './assets/CavemanLogo.png';
import CryptoKing from './assets/CryptoKing.png';
import CryptoKingLogo from './assets/CryptoKingLogo.png';
import Gladiator from './assets/Gladiator.png';
import GladiatorLogo from './assets/GladiatorLogo.png';

//- Flicking Imports
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

const TiersSection = ({ id }) => {
	return (
		<section className={styles.CardContainer} id={id}>
			<div className={styles.TiersContainer}>
				<h2 className={styles.Tiers}>Tiers</h2>
			</div>
			<Flicking circular={false} defaultIndex={1} className={styles.Carousel}>
				<div className={styles.Card}>
					<CardTier
						onClick={'/'}
						price={'2,500'}
						allocation={'5 out of 10'}
						image={Caveman}
						logo={CavemanLogo}
					/>
					<h3>
						Access to Level 1 <br /> NFTs
					</h3>
				</div>
				<div className={styles.Card}>
					<CardTier
						onClick={'/'}
						price={'50,000'}
						allocation={'Guaranteed Allocation'}
						image={CryptoKing}
						logo={CryptoKingLogo}
					/>
					<h3>
						Access to Exclusive <br /> NFTs
					</h3>
				</div>
				<div className={styles.Card}>
					<CardTier
						onClick={'/'}
						price={'17,500'}
						allocation={'7 out of 10'}
						image={Gladiator}
						logo={GladiatorLogo}
					/>
					<h3>
						Access to Level 2 <br /> NFTs
					</h3>
				</div>
			</Flicking>
			<div className={styles.Standing}>
				<div className={styles.Card}>
					<CardTier
						onClick={'/'}
						price={'2,500'}
						allocation={'5 out of 10'}
						image={Caveman}
						logo={CavemanLogo}
					/>
					<h3>
						Access to Level 1 <br /> NFTs
					</h3>
				</div>
				<div className={styles.Card}>
					<CardTier
						onClick={'/'}
						price={'50,000'}
						allocation={'Guaranteed Allocation'}
						image={CryptoKing}
						logo={CryptoKingLogo}
					/>
					<h3>
						Access to Exclusive <br /> NFTs
					</h3>
				</div>
				<div className={styles.Card}>
					<CardTier
						onClick={'/'}
						price={'17,500'}
						allocation={'7 out of 10'}
						image={Gladiator}
						logo={GladiatorLogo}
					/>
					<h3>
						Access to Level 2 <br /> NFTs
					</h3>
				</div>
			</div>
		</section>
	);
};

export default TiersSection;
