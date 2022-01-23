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
									Q1 2022
								</h1>
								<p className={styles.RoadTextLeft}>
									Begin metaverse planning and gameplay We will begin the
									ideation, structuring, planning and execution of our first
									game in the metaverse which we will reveal visually and
									completely in the Tribe v2.
								</p>
								<p className={styles.RoadTextLeft}>
									Listing in a CEX of the Top 10 of CMC To open the 2022 labor
									calendar, one of our first objectives will be to be listed in
									one of the top 10 exchanges of CoinMarketCap.
								</p>
								<p className={styles.RoadTextLeft}>
									Start parallel tests for our own NFT marketplace As a goal
									within the creation of the game in the metaverse, we will need
									to have our own NFT trading platform.
								</p>
								<p className={styles.RoadTextLeft}>
									Update to Tribe v1.3 This update will mainly be related to
									business model and image where we will include respective
									concepts to the metaverse and gamification as well as our new
									3D image
								</p>
							</div>
							<div className={styles.DashLeft}></div>
							<div className={styles.PercentTop}>
								<img className={styles.Img} src={TribeLogo} />
							</div>
							<div className={styles.TitleLineTop}></div>
							<div className={styles.PCTitleLineTop}></div>
						</div>

						<div className={styles.RoadRightContainer}>
							<div className={styles.DashLeft}></div>
							<div className={styles.ContentRight}>
								<h1 className={`${styles.RoadTitle} ${styles.Left}`}>
									Q2 2022
								</h1>
								<p className={styles.RoadTextRight}>
									Tribe v2 Release (Landing Page + Pitch Deck) Update of brand
									image and business model in an integrated way inspired by the
									game within the metaverse.
								</p>
								<p className={styles.RoadTextRight}>
									Metaverse development and game (First tests) For Q2 we
									anticipate that we will already have some first internal tests
									of the metaverse which we will be able to make public with the
									community.
								</p>
								<p className={styles.RoadTextRight}>
									VR TribePop NFT Beta Testing By this time we expect all
									TribePops to be ready to use in the metaverse which will have
									rigging, animations, basic movements and, of course, motion
									control.
								</p>
							</div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
							<div className={styles.PCTitleLineRight}></div>
						</div>

						<div className={styles.RoadLeftContainer}>
							<div className={styles.ContentLeft}>
								<h1 className={`${styles.RoadTitle} ${styles.Right}`}>
									Q3 2022
								</h1>
								<p className={styles.RoadTextLeft}>
									First public tests of the game For Q3 2022, we expect that the
									game will be able to be used by at least beta testers and with
									the aim of getting feedback from the community.
								</p>
								<p className={styles.RoadTextLeft}>
									Integration of Metaverse and VR to the game If the previous
									tests were satisfactory, we would already be in a position to
									integrate web3 into the gaming platform with VR included.
								</p>
							</div>
							<div className={styles.DashLeft}></div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
							<div className={styles.PCTitleLineLeft}></div>
						</div>

						<div className={styles.RoadRightContainer}>
							<div className={styles.DashLeft}></div>
							<div className={styles.ContentRight}>
								<h1 className={`${styles.RoadTitle} ${styles.Left}`}>
									Q4 2022
								</h1>
								<p className={styles.RoadTextRight}>
									Minimum viable product (MVP) By the end of 2022, we will have
									an initial stable version (MVP) that can be used by users with
									all its functions.
								</p>
							</div>
							<div className={styles.Percent}></div>
							<div className={styles.TitleLine}></div>
							<div className={styles.PCTitleLineRight}></div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default RoadmapSection;
