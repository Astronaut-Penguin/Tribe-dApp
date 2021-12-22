///////////////////////////////
// VISTA 1 -  CELEBRITY MENU //
///////////////////////////////

//- React
import React from 'react';

//- Style
import styles from './CelebrityMenu.module.css';

//- Components
import ChristmasBanner from '../ChristmasComponents/Banners/ChristmasBanner';

const CelebrityMenu = () => {
	return (
		<>
			<ChristmasBanner
				title={'Celebrity & Brands TRIBEPOP NFTs'}
				text={
					'Each TRIBEPOP is a re-creation of a celebrity or brand and these will be characters ready to use in our next role-playing game in our metaverse!'
				}
				text2={
					'You can only buy them at this value in this unique opportunity, then you can only get one if someone wants to sell'
				}
				characters
			/>

			<section className={styles.Container}>
				<div className={styles.Section}>
					<h2 className={styles.Title}>Live Sales</h2>
				</div>
			</section>
		</>
	);
};

export default CelebrityMenu;
