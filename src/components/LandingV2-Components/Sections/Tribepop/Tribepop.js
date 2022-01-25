//- Import React
import React from 'react';

//- Import Styles
import styles from './Tribepop.module.css';

//- Import Images
import PlebCharacter from './assets/PlebCharacter.png';
import LargePlebCharacter from './assets/LargePlebCharacter.png';
import Stroke from './assets/Stroke.png';

//- Page Images Imports
//Mobile
import CoinMobile from './assets/coinmarketMOBILE.png';
import PancakeMobile from './assets/pancakeMOBILE.png';
import MemeMobile from './assets/memepadMOBILE.png';
import GeckoMobile from './assets/CoingekoMOBILE.png';
import BscMobile from './assets/bscMOBILE.png';
//PC
import CoinPC from './assets/coinmarketPC.png';
import PancakePC from './assets/pancakePC.png';
import MemePC from './assets/memepadPC.png';
import GeckoPC from './assets/CoingekoPC.png';
import BscPC from './assets/bscPC.png';

const TribepopSection = ({ id }) => {
	return (
		<section className={styles.Container} id={id}>
			<div className={styles.Subcontainer}>
				<img className={styles.LargeCharacters} src={LargePlebCharacter} />
				<div className={styles.Content}>
					<div className={styles.TribePop}>
						What's a<span className={styles.GradientText}> TribePop </span>?
					</div>
					<img className={styles.Characters} src={PlebCharacter} />
					<p className={styles.Text}>
						All metaverse skin ready characters created <br />
						by <b>TRIBE</b> are <b>TribePops</b>
					</p>
					<p className={styles.Text} style={{ marginTop: '10px' }}>
						Every brand, athlete, singer, model, actor, <br />
						among others, that works with TRIBE, has <br />
						their own TribePop adapted to different <br />
						situations in their career to create their NFTs.
					</p>

					<img className={styles.Stroke} src={Stroke} />
					<p className={styles.Text} style={{ marginTop: '16px' }}>
						All TribePop will be used in our <br />
						<span style={{ color: '#d2219a' }}>
							<b>Metaverse RPG Game</b>
						</span>
					</p>
				</div>
				<div className={styles.Social}>
					{/* Mobile Logos */}
					<img className={styles.Mobile} src={CoinMobile} alt="CoinMarket" />
					<img
						className={styles.Mobile}
						src={PancakeMobile}
						alt="PancakeSwap"
					/>
					<img className={styles.Mobile} src={MemeMobile} alt="Memepad" />
					<img className={styles.Mobile} src={GeckoMobile} alt="CoinGecko" />
					<img className={styles.Mobile} src={BscMobile} alt="BscScan" />

					{/* PC Logos */}
					<img className={styles.Pc} src={CoinPC} alt="CoinMarket" />
					<img className={styles.Pc} src={PancakePC} alt="PancakeSwap" />
					<img className={styles.Pc} src={MemePC} alt="Memepad" />
					<img className={styles.Pc} src={GeckoPC} alt="CoinGecko" />
					<img className={styles.Pc} src={BscPC} alt="BscScan" />
				</div>
			</div>
		</section>
	);
};

export default TribepopSection;
