//- React Imports
import React from 'react';

//- Style Imports
import styles from './CelebrityCard.module.css';

//- Button Imports
import LiveButton from '../../Button/Button';

const CelebrityCard = ({
	name,
	user,
	image,
	banner,
	disabled,
	text,
	state,
	onClick,
}) => {
	// const image = './assets/nft/soon.png';
	const verificated = '../images/VerificatedLogo.png';

	return (
		<div className={styles.CelebrityCard}>
			{image && (
				<div
					className={styles.CelebrityImage}
					style={{ backgroundImage: 'url(' + banner + ')' }}
				>
					<LiveButton
						text={
							(state == 'live' ? 'Live' : '') +
							(state == 'upcoming' ? 'Upcoming' : '') +
							(state == 'completed' ? 'Completed' : '')
						}
						onClick="/"
						grey={disabled ? true : false}
						green={!disabled ? true : false}
						onClick={() => {
							onClick();
						}}
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
					<h2>{name}</h2>
					<h3>{user}</h3>
				</div>
			</div>
		</div>
	);
};

export default CelebrityCard;
