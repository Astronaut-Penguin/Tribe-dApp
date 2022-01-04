//- Import React
import React from 'react';

//- Import Styles
import styles from './Main.module.css';

//- Import Images
import PlebCharacter3 from './assets/PlebCharacter3.png';
import LargePlebCharacter3 from './assets/LargePlebCharacter3.png';
import Binance from './assets/Binance.png';
import Telegram from './assets/Telegram.png';
import Twitter from './assets/Twitter.png';
import Pancake from './assets/Pankake.png';
import Bsc from './assets/bsc-8 2.png';
import PanButton from './assets/PanButton.png';

const MainSection = () => {
	return (
		<section className={styles.Container}>
			<div className={styles.Subcontainer}>
				<img className={styles.CharactersLarge} src={LargePlebCharacter3} />
				<div className={styles.Content}>
					<div className={styles.Celebrities}>
						Celebrities  
							<span className={styles.GradientText}> TribePop </span> 
						 on the Metaverse
					</div>
					<p className={styles.Text} style={{marginTop: '15px'}}>
						We launch NFTs. <br />
						We build the future.
					</p>
					<img className={styles.Characters} src={PlebCharacter3} />
					<p className={styles.TribeText}>
						Buy <b>TRIBE Tokens</b> on
					</p>
					<button className={styles.PancakeButton}>
						<img src={PanButton} /> <b>PancakeSwap</b>
					</button>{' '}
					<p className={styles.Text} style={{marginTop: '8px'}}>
						Exclusively on <img src={Binance} /> <b>Binance Smart Chain</b>
					</p>
				</div>
				<div className={styles.Images}>
					<a title="Telegram" href="/" className={styles.Social}>
						<img src={Telegram} alt="Telegram" />
					</a>
					<a title="Twitter" href="/" className={styles.Social}>
						<img src={Twitter} alt="Twitter" />
					</a>
					<a title="Pancake" href="/" className={styles.Social}>
						<img src={Pancake} alt="Pancake" />
					</a>
					<a title="BSCScan" href="/" className={styles.Social}>
						<img src={Bsc} alt="BSCScan" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
