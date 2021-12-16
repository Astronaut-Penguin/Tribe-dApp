//- React Imports
import React from 'react';

//- Style Imports
import styles from './CardNFT.module.css';

//- Button Imports
import BuyButton from '../../BuyButton/BuyButton';

// CARD COMPONENT
// onClick: La funcion que activa el boton BUY
// name: STRING - Nombre del NFT
// colection: STRING - Nombre de la coleccion
// price: STRING NUMBER - El Precio del NFT
// image: STRING - Url de la imagen
// video: STRING - Url del video

const CardNFT = ({ onClick, name, colection, price, image, video }) => {
	return (
		<div className={styles.CelebrityNftCard}>
			{video && (
				<div className={styles.VideoContainer}>
					<video className={styles.BackgroundVideo} muted>
						<source src={video} type="video/mp4" />
					</video>
					<button className={styles.CelebrityNftBuy} onClick={onClick}>
						<p>Buy</p>
					</button>
				</div>
			)}

			{image && (
				<div
					className={styles.CelebrityNftImage}
					style={{ backgroundImage: 'url(' + image + ')' }}
				>
					<BuyButton text="Buy" onClick={onClick} />
					{/*<button className={styles.CelebrityNftBuy} onClick={onClick}>
						<p>Buy</p>
					</button>*/}
				</div>
			)}
			<div className={styles.CelebrityNftDataContainer}>
				<div className={styles.CelebrityNftData}>
					<h3>{colection}</h3>
					<h2>{name}</h2>
				</div>
				<div className={styles.CelebrityNftPrice}>
					<h4>Price</h4>
					<h5>{price} BNB</h5>
				</div>
			</div>
		</div>
	);
};

export default CardNFT;
