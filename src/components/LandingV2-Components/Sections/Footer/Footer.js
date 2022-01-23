// - Import React
import React from 'react';

//- Import Styles
import styles from './Footer.module.css';

//- Components Imports
import ApplyButton from '../../Buttons/ApplyButton/ApplyButton';

// - Import Images
import TribeLogo from './assets/logotribe 2.png';
import TribeLogoPc from './assets/logo-tribe-pc.png';
import Telegram from './assets/Telegram.png';
import Twitter from './assets/Twitter.png';
import Pankake from './assets/Pankake.png';
import BSC from './assets/bsc-8 2.png';
import Instagram from './assets/Instagram.png';
import Github from './assets/Github.png';
import Finance from './assets/finance 1.png';
import Solidproof from './assets/SolidProof 2.png';
import LogoM from './assets/logo 1.png';
import Asset30 from './assets/Asset 30 1.png';
import Asset32 from './assets/Asset 32 1.png';
import Reddit from './assets/red 1.png';

const Footer = () => {
	return (
		<section className={styles.Container}>
			<div>
				<img className={styles.logotribe} src={TribeLogo} />
				<img className={styles.LogoTribePc} src={TribeLogoPc} />
			</div>

			<div className={styles.Content}>
				<div className={styles.Buttons}>
					<ApplyButton
						text={'WhitePaper v3.1'}
						paper
						style={{ margin: '4px' }}
					/>
					<div className={styles.Space}></div>
					<ApplyButton
						text={'SolidProof Audit Report'}
						solid
						style={{ margin: '4px' }}
					/>
				</div>

				<div>
					<div className={styles.Images}>
						<a title="Telegram" href="https://t.me/tribebsc" className={styles.Social}>
							<img src={Telegram} alt="Telegram" />
						</a>
						<a title="Twitter" href="https://twitter.com/tribebsc" className={styles.Social}>
							<img src={Twitter} alt="Twitter" />
						</a>
						<a title="Pancake" href="https://pancakeswap.finance/swap?outputCurrency=0xc34c85a3d7a84212b6234146773f7939a931a8af" className={styles.Social}>
							<img src={Pankake} alt="Pancake" />
						</a>
						<a title="BSCScan" href="https://bscscan.com/token/0xc34c85a3d7a84212b6234146773f7939a931a8af" className={styles.Social}>
							<img src={BSC} alt="BSCScan" />
						</a>
						<a title="Intagram" href="https://instagram.com/tribebsc" className={styles.Social}>
							<img src={Instagram} alt="Instagram" />
						</a>
						<a title="Github" href="https://github.com/TribeBSC" className={styles.Social}>
							<img src={Github} alt="Github" />
						</a>
						<a title="Team FInance" href="/" className={styles.Social}>
							<img src={Finance} alt="Team FInance" />
						</a>
						<a title="SolidProof" href="https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_Tribe.pdf" className={styles.Social}>
							<img src={Solidproof} alt="SolidProof" />
						</a>
						<a title="Medium" href="https://medium.com/@TribeBsc" className={styles.Social}>
							<img src={LogoM} alt="Medium" />
						</a>
						<a title="CoinmarketCap" href="https://coinmarketcap.com/es/currencies/tribex/" className={styles.Social}>
							<img src={Asset30} alt="CoinmarketCap" />
						</a>
						<a title="Coingecko" href="https://www.coingecko.com/en/coins/tribe-token" className={styles.Social}>
							<img src={Asset32} alt="Coingecko" />
						</a>
						<a title="Reddit" href="https://reddit.com/r/tribebsc" className={styles.Social}>
							<img src={Reddit} alt="Reddit" />
						</a>
					</div>

					






					<div className={styles.Text}>
						<a title="Tokenomics" href="/">
							Tokenomics
						</a>
						<a title="Audit Report" href="/">
							Audit Report
						</a>
						<a title="Locks & Vestings" href="/">
							Locks & Vestings
						</a>
						<a title="KYC Compliance" href="/">
							KYC Compliance
						</a>
						<a title="Contact us" href="/">
							Contact us
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
