//- Import React
import React from 'react';

//- Import Styles
import styles from './Tribepop.module.css';

//- Import Images
import PlebCharacter from './assets/PlebCharacter.png';
import LargePlebCharacter from './assets/LargePlebCharacter.png';
import Stroke from './assets/Stroke.png';
import Logos1 from './assets/Logos1.png';
import Logos2 from './assets/Logos2.png';

const TribepopSection = ({ id }) => {
	return (
		<section className={styles.Container} id={id}>
			<div className={styles.Subcontainer}>
				<img className={styles.LargeCharacters} src={LargePlebCharacter} />
				<div className={styles.Content}>
					<div className={styles.TribePop}>
						What's a<span className={styles.GradientText}> TribePop </span>?
					</div>
					<img className={styles.Characters} src={PlebCharacter} />
					<p className={styles.Text}>
						All metaverse skin ready characters created <br />
						by <b>TRIBE</b> are <b>TribePops</b>
					</p>
					<p className={styles.Text} style={{ marginTop: '10px' }}>
						Every brand, athlete, singer, model, actor, <br />
						among others, that works with TRIBE, has <br />
						their own TribePop adapted to different <br />
						situations in their career to create their NFTs.
					</p>

					<img className={styles.Stroke} src={Stroke} />
					<p className={styles.Text} style={{ marginTop: '16px' }}>
						All TribePop will be used in our <br />
						<span style={{ color: '#d2219a' }}>
							<b>Metaverse RPG Game</b>
						</span>
					</p>
				</div>
				<div className={styles.Images}>
					<img className={styles.Logos} src={Logos1} alt="Logos1" />
					<img className={styles.Logos} src={Logos2} alt="Logos2" />
				</div>
			</div>
		</section>
	);
};

export default TribepopSection;
