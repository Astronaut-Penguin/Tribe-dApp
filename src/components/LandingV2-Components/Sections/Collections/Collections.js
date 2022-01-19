//- Import React
import React from 'react';

//- Import Styles
import styles from './Collections.module.css';

//- Import Images
import MemepadLogo from './assets/MemepadLogo.png';

//- Import Button
import ApplyButton from '../../Buttons/ApplyButton/ApplyButton';

//- Flicking Imports
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import Dots from 'react-carousel-dots';

const CollectionsSection = () => {
	return (
		<div className={styles.BigContainer}>
			<div className={styles.TitleContainer}>
				<h2 className={styles.Title}>Latest NFT Collections</h2>
			</div>
			<Flicking
				circular={true}
				defaultIndex={1}
				className={styles.Carousel}
			>
				<div className={styles.Card}>
                    <img src={MemepadLogo} className={styles.Img} />
                    <h3>Memepad</h3>
					<h4>
						Every brand, athlete, singer, model, actor, among <br />
                        others, that works with TRIBE, has their own <br/>
                        TribePop adapted to different situations in their <br/>
                        career to create their NFTs.
					</h4>
				</div>
				<div className={styles.Card}>
                    <img src={MemepadLogo} className={styles.Img} />
                    <h3>Memepad</h3>
					<h4>
                        Every brand, athlete, singer, model, actor, among <br />
                        others, that works with TRIBE, has their own <br/>
                        TribePop adapted to different situations in their <br/>
                        career to create their NFTs.
					</h4>
				</div>
				<div className={styles.Card}>
					<img src={MemepadLogo} className={styles.Img} />
                    <h3>Memepad</h3>
					<h4>
                        Every brand, athlete, singer, model, actor, among <br />
                        others, that works with TRIBE, has their own <br/>
                        TribePop adapted to different situations in their <br/>
                        career to create their NFTs.
					</h4>
				</div>
			</Flicking>
			{/* <div className={styles.DotsContainer}> */}
				<Dots length={3} active={1} size={12} className={styles.DotsContainer}/>
			{/* </div> */}
            <br/><div className={styles.ButtonContainer}>
                <ApplyButton text={'View All Collections'} />
            </div>
		</div>
	);
};

export default CollectionsSection;