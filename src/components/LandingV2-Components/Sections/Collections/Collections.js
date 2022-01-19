//- Import React
import React, { useEffect, useState, createRef } from 'react';

//- Import Styles
import styles from './Collections.module.css';

//- Import Data
import MemepadLogo from './assets/MemepadLogo.png';
import CollectionData from './CollectionData';

//- Import Button
import ApplyButton from '../../Buttons/ApplyButton/ApplyButton';

//- Flicking Imports
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import Dots from 'react-carousel-dots';

const CollectionsSection = ({ CollectionData }) => {

	//- SELECTED STATE
	const [s, setS] = useState(0);

	////////////
	// RENDER //
	////////////

	return (
		<div className={styles.BigContainer}>
			<div className={styles.TitleContainer}>
				<h2 className={styles.Title}>Latest NFT Collections</h2>
			</div>
			<Flicking
				circular={true}
				onChanged={(e) => {
					setS(e.index);
					console.log(e.index);
				}}
				defaultIndex={1}
				className={styles.Carousel}
			>
				<div className={styles.Card}>
                    <img src={MemepadLogo} className={styles.Img} />
				</div>
				<div className={styles.Card}>
                    <img src={MemepadLogo} className={styles.Img} />
				</div>
				<div className={styles.Card}>
					<img src={MemepadLogo} className={styles.Img} />
				</div>
			</Flicking>
			<h3>Memepad2</h3>
			<h4>
                Every brand, athlete, singer, model, actor, among <br />
                others, that works with TRIBE, has their own <br/>
                TribePop adapted to different situations in their <br/>
                career to create their NFTs.
			</h4>
			<div className={styles.DotsContainer}>
				<Dots length={3} active={2} size={12} />
			</div>
            <br/><div className={styles.ButtonContainer}>
                <ApplyButton text={'View All Collections'} />
            </div>
		</div>
	);
};

export default CollectionsSection;