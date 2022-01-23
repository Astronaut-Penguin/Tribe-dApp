//- Import React
import React, { useEffect, useState, createRef } from 'react';

//- Import Styles
import styles from './Collections.module.css';

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

import './FlickingStyles.css';

//- Data Imports
import data from '../../../../data/artist.json';

const CollectionsSection = ({ id }) => {
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
			<div className={styles.BigContainer} id={id}>
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
					renderOnlyVisible={true}
				>
					{data.data.map((value, i) => {
						return (
							<div className={styles.Card}>
								<img
									src={value.collections.logo}
									className={`${styles.Img} ${
										s == i ? styles.Selected : styles.NotSelected
									}`}
								/>
							</div>
						);
					})}

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
				{data.data.map((value, i) => {
					return (
						<div
							className={`${styles.TextContainer} ${
								s == i ? styles.TextSelected : styles.TextNotSelected
							}`}
						>
							<h3>{value.name}</h3>
							<p>{value.collections.description}</p>
						</div>
					);
				})}

				<br />
				<div className={styles.ButtonContainer}>
					<ApplyButton text={'View All Collections'} onClick={'/'} />
				</div>
			</div>
		</>
	);
};

export default CollectionsSection;
