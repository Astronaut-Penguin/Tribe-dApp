//- Import React
import React from 'react';

//- Import Styles
import styles from './Main.module.css';

//- Import Images
import PlebCharacter3 from './assets/PlebCharacter3.png';
import Binance from './assets/Binance.png';
import Telegram from './assets/Telegram.png';
import Twitter from './assets/Twitter.png';
import Pancake from './assets/Pankake.png';
import Bsc from './assets/bsc-8 2.png';

const MainSection = () => {
	return (
		<section className={styles.Container}>
			<div className={styles.Celebrities}>
				Celebrities <span>TribePop</span> on the Metaverse
			</div>

			<p className={styles.Text}>
				We launch NFTs. <br />
				We build the future.
			</p>
			<img src={PlebCharacter3} />

			<p className={styles.Text}>
				Buy <b>TRIBE Tokens</b> on
			</p>
			<button>Pankake SWAP</button>
			<p className={styles.Text}>
				Exclusively on <img src={Binance} /> <b>Binance Smart Chain</b>
			</p>
			<br />

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
		</section>
	);
};

export default MainSection;
