//- React Imports
import React from 'react';

//- Style Imports
import styles from './CardNFT.module.css';
import ImageLoader from '../../Loader/Loader';

//- Button Imports
import BuyButton from '../../Button/Button';
import ViewContract from '../../ViewContract/ViewContract';

// CARD COMPONENT
// onClick: La funcion que activa el boton BUY
// name: STRING - Nombre del NFT
// colection: STRING - Nombre de la coleccion
// price: STRING NUMBER - El Precio del NFT
// image: STRING - Url de la imagen
// video: STRING - Url del video

const CardNFT = ({ onClick, name, colection, price, image, video, href }) => {
	return (
		<div className={styles.CelebrityNftCard}>
			{video !== 'undefined' && (
				<div className={styles.VideoContainer}>
					<video className={styles.BackgroundVideo} muted>
						<source src={video} type="video/mp4" />
					</video>
					<BuyButton text="Buy" onClick={onClick} />
				</div>
			)}

			{image !== 'undefined' && (
				<div
					className={styles.CelebrityNftImage}
				>
					<ImageLoader image={image} />
					<BuyButton text="Buy" onClick={onClick} />
				</div>
			)}

			<div className={styles.CelebrityNftDataContainer}>
				<div className={styles.CelebrityNftData}>
					<h3>{colection}</h3>
					<h2>{name}</h2>
				</div>
				<div className={styles.CelebrityNftPrice}>
					<h4>Price</h4>
					<h5>{price} TRIBEX</h5>
				</div>
			</div>
			<ViewContract href={href} />
		</div>
	);
};

export default CardNFT;
