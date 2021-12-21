//- React Imports
import React from 'react';

//- Style Imports
import styles from './CelebrityCard.module.css';

//- Button Imports
import LiveButton from '../../Button/Button';

const CelebrityCard = ({ completed }) => {
	const image = './assets/nft/soon.png';
	const verificated = '../images/VerificatedLogo.png';

	return (
		<div className={styles.CelebrityCard}>
			{image && (
				<div
					className={styles.CelebrityImage}
					style={{ backgroundImage: 'url(' + image + ')' }}
				>
					<LiveButton
						text="Live"
						onClick="/"
						grey={completed ? true : false}
						green={!completed ? true : false}
					/>
				</div>
			)}

			<div className={styles.CelebrityDataContainer}>
				<div className={styles.PictureContainer}>
					<div
						className={styles.CelebrityPicture}
						style={{ backgroundImage: 'url(' + image + ')' }}
					></div>	
					<div className={styles.verify}></div>
				</div>
				<div className={styles.CelebrityData}>
					<h2>Nombre Apellido</h2>
					<h3>@RedSocial</h3>
				</div>
			</div>
		</div>
	);
};

export default CelebrityCard;
