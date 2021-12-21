//- React Imports
import React from 'react';

//- Style Imports
import styles from './CelebrityCard.module.css';

//- Button Imports
import LiveButton from '../../Button/Button';

const CelebrityCard = ({ completed }) => {
	const image = './assets/nft/soon.png';

	return (
		<div className={styles.CelebrityNftCard}>
			{image && (
				<div
					className={styles.CelebrityNftImage}
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

			<div className={styles.CelebrityNftDataContainer}>
				<div
					className={styles.CelebrityPicture}
					style={{ backgroundImage: 'url(' + image + ')' }}
				></div>
				<div className={styles.CelebrityNftData}>
					<h2>Nombre Apellido</h2>
					<h3>@RedSocial</h3>
				</div>
			</div>
		</div>
	);
};

export default CelebrityCard;
