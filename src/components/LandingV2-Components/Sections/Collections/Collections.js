//- Import React
import React, { useEffect, useState, createRef } from 'react';

//- Import Styles
import styles from './Collections.module.css';
import './FlickingStyles.module.css';

//- Import Data
import MemepadLogo from './assets/MemepadLogo.png';
import RightArrow from './assets/RightArrow.png';
import LeftArrow from './assets/LeftArrow.png';
import CollectionData from './CollectionData';

//- Import Button
import ApplyButton from '../../Buttons/ApplyButton/ApplyButton';

//- Flicking Imports
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/arrow.css';

const CollectionsSection = ({ CollectionData }) => {
	//- SELECTED STATE
	const [s, setS] = useState(0);

	const [plugins, setPlugins] = useState([
		new Pagination({ type: 'bullet' }),
		new Arrow(),
	]);

	////////////
	// RENDER //
	////////////

	return (
		<>
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
					plugins={plugins}
					className={styles.Carousel}
				>
					<div className={styles.Card}>
						<img
							src={MemepadLogo}
							className={`${styles.Img} ${
								s == 0 ? styles.Selected : styles.NotSelected
							}`}
						/>
					</div>
					<div className={styles.Card}>
						<img
							src={MemepadLogo}
							className={`${styles.Img} ${
								s == 1 ? styles.Selected : styles.NotSelected
							}`}
						/>
					</div>
					<div className={styles.Card}>
						<img
							src={MemepadLogo}
							className={`${styles.Img} ${
								s == 2 ? styles.Selected : styles.NotSelected
							}`}
						/>
					</div>
					<div className={styles.Card}>
						<img
							src={MemepadLogo}
							className={`${styles.Img} ${
								s == 3 ? styles.Selected : styles.NotSelected
							}`}
						/>
					</div>
					<ViewportSlot>
						<div className={`flicking-pagination ${styles.Dots}`}></div>
						<div className={styles.ArrowContainer}>
							<span className="flicking-arrow-prev">
								<img className={styles.ArrowLeft} src={LeftArrow} />
							</span>
							<span className="flicking-arrow-next">
								<img className={styles.ArrowRight} src={RightArrow} />
							</span>
						</div>
					</ViewportSlot>
				</Flicking>
				<h3>Memepad2</h3>
				<h4>
					Every brand, athlete, singer, model, actor, among <br />
					others, that works with TRIBE, has their own <br />
					TribePop adapted to different situations in their <br />
					career to create their NFTs.
				</h4>
				<br />
				<div className={styles.ButtonContainer}>
					<ApplyButton text={'View All Collections'} />
				</div>
			</div>
		</>
	);
};

export default CollectionsSection;
