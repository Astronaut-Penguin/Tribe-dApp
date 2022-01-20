//- React imports
import React from 'react';

//- Styles Imports
import styles from './Roadmap.module.css';

import TribeLogo from './assets/TribeLogo.png';

const RoadmapSection = ({ id }) => {
	return (
		<section className={styles.Container} id={id}>
			<div className={styles.SubContainer}>
				<div className={styles.Content}>
					<section className={styles.StepContainer}>
						<div className={styles.TitleContainer}>
							<h2 className={styles.Title}>RoadMap</h2>
						</div>

						<div className={styles.Central}></div>

						<div className={styles.RoadLeftContainer}>
							<div className={styles.ContentLeft}>
								<h1 className={`${styles.RoadTitle} ${styles.Right}`}>
									Quarter 1 <br />
									2022!
								</h1>
								<p className={styles.RoadTextLeft}>
									Take a look around, and join your fellow Kingz. <br />
									<br /> We will be giving away 10 Kingz once our discord hits
									15,000 members.
									<br />
									<br />
									This is the beginning of our Kingdom, where community is our
									#1 focus.
								</p>
							</div>
							<div className={styles.DashLeft}></div>
							<div className={styles.PercentTop}>
								<img className={styles.Img} src={TribeLogo} />
							</div>
							<div className={styles.TitleLineTop}></div>
						</div>

						<div className={styles.RoadRightContainer}>
							<div className={styles.DashLeft}></div>
							<div className={styles.ContentRight}>
								<h1 className={`${styles.RoadTitle} ${styles.Left}`}>
									Quarter 2 <br />
									2022!
								</h1>
								<p className={styles.RoadTextRight}>
									When Minting is 50% sold out the creation of our Meta Kingdom
									is started. <br />
									<br />
									This is a place where your Kingz can own land and rule over
									all. Land pays dividends every month forever! <br />
									<br /> The more land you own the more you earn! (in ETH).
								</p>
							</div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
						</div>

						<div className={styles.RoadLeftContainer}>
							<div className={styles.ContentLeft}>
								<h1 className={`${styles.RoadTitle} ${styles.Right}`}>
									Quarter 3 <br />
									2022!
								</h1>
								<p className={styles.RoadTextLeft}>
									During and after mint we will be spending all our time
									purchasing land for you( with no extra expense) and turning
									them into NFTs that will be sent to your wallet that you
									minted with. <br /> <br />
									These Proclamations will be connected with your land in the
									Meta Kingdom and will only work when you hold at least 1 King.
									<br />
									<br />
									OH, they also are very special physical land located in
									Scotland, which means you can legally change your title to
									"Lord" in real life from owning a King!
								</p>
							</div>
							<div className={styles.DashLeft}></div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
						</div>

						<div className={styles.RoadRightContainer}>
							<div className={styles.DashLeft}></div>
							<div className={styles.ContentRight}>
								<h1 className={`${styles.RoadTitle} ${styles.Left}`}>
									Quarter 4 <br />
									2022!
								</h1>
								<p className={styles.RoadTextRight}>
									A total of 8 Kingz will be auctioned off with 100% of the
									proceeds going to the funding of Kingz who own land and the
									future of the project.
									<br />
									<br /> 85% of secondary sales will also be put right back into
									the Meta Kingdom economy and will help fund the future
									additions of the Meta Kingdom.
								</p>
							</div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
						</div>

						<div className={styles.RoadLeftContainer}>
							<div className={styles.ContentLeft}>
								<h1 className={`${styles.RoadTitle} ${styles.Right}`}>
									Coming <br />
									Soon!
								</h1>
								<p className={styles.RoadTextLeft}>
									We have 1 planned airdrop for all Kingz holders right after
									public mint is over.
									<br /> Art will be created and a small collection of 3,000
									NFT's will be made.
									<br />
									<br /> They will be split among all holders of 2 or more
									Kingz. All Airdrop NFTs that can't be evenly split among
									holders will be burned!
								</p>
							</div>
							<div className={styles.DashLeft}></div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default RoadmapSection;
