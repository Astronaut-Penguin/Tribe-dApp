//- Import React
import React, { useEffect, useState, createRef } from 'react';

//- Import Styles
import styles from './Collections.module.css';
import './FlickingStyles.module.css';

//- Import Data
import MemepadLogo from './assets/MemepadLogo.png';
import RightArrow from './assets/RightArrow.png';
import LeftArrow from './assets/LeftArrow.png';

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

const CollectionsSection = () => {
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
					defaultIndex={0}
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
							<span className={`flicking-arrow-prev ${styles.ArrowLeft}`}>
								<img src={LeftArrow} />
							</span>
							<span className={`flicking-arrow-next ${styles.ArrowRight}`}>
								<img src={RightArrow} />
							</span>
						</div>
					</ViewportSlot>
				</Flicking>
				<div className={`${styles.TextContainer} ${
					s == 0 ? styles.TextSelected : styles.TextNotSelected
				}`}>
					<h3>Memepad0</h3>
					<h4>
						Every brand, athlete, singer, model, actor, among <br />
						others, that works with TRIBE, has their own <br />
						TribePop adapted to different situations in their <br />
						career to create their NFTs.
					</h4>
				</div>
				<div className={`${styles.TextContainer} ${
					s == 1 ? styles.TextSelected : styles.TextNotSelected
				}`}>
					<h3>Memepad1</h3>
					<h4>
						Every brand, athlete, singer, model, actor, among <br />
						others, that works with TRIBE, has their own <br />
						TribePop adapted to different situations in their <br />
						career to create their NFTs.
					</h4>
				</div>
				<div className={`${styles.TextContainer} ${
					s == 2 ? styles.TextSelected : styles.TextNotSelected
				}`}>
					<h3>Memepad2</h3>
					<h4>
						Every brand, athlete, singer, model, actor, among <br />
						others, that works with TRIBE, has their own <br />
						TribePop adapted to different situations in their <br />
						career to create their NFTs.
					</h4>
				</div>
				<div className={`${styles.TextContainer} ${
					s == 3 ? styles.TextSelected : styles.TextNotSelected
				}`}>
					<h3>Memepad3</h3>
					<h4>
						Every brand, athlete, singer, model, actor, among <br />
						others, that works with TRIBE, has their own <br />
						TribePop adapted to different situations in their <br />
						career to create their NFTs.
					</h4>
				</div>
				<br />
				<div className={styles.ButtonContainer}>
					<ApplyButton text={'View All Collections'} onClick={'/'}/>
				</div>
			</div>
		</>
	);
};

export default CollectionsSection;
