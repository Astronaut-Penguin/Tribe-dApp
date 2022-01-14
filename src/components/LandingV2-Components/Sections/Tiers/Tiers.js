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

//- Owl Carousel Imports
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TiersSection = () => {
	const options = {
		items: 3,
		loop: true,
		center: true,
		pullDrag: false,

		margin: 10,
		startPosition: 1,
		autoWidth: true,
	};

	return (
		<div className={styles.CardContainer}>
			<h2 className={styles.Tiers}>Tiers</h2>
			<OwlCarousel {...options} className={styles.NavContainer}>
			<div className={'item'}>
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
			</div>
			<div className={'item'}>
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
			</div>
			<div className={'item'}>
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
			</OwlCarousel>
		</div>
	);
};

export default TiersSection;
