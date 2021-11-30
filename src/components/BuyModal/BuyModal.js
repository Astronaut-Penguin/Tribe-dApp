//- React Imports
import React from 'react';

//- Style Imports
import styles from './BuyModal.module.css';

// CARD COMPONENT
// onClick: La funcion que manda la transaccion
// onClose: La funcion que cierra el modal

// artist: STRING - Nombre del Artista
// user: STRING - Nombre de Usuario

// name: STRING - Nombre del NFT
// colection: STRING - Nombre de la coleccion

// fecha:

// price: STRING - El Precio del NFT
// image: STRING URL - Url de la imagen

const BuyModal = ({ artist, user, name, colection, price, image, onClose }) => {
	return (
		<section className={styles.CelebrityBuyModal}>
			<div className={styles.CelebrityModalContainerBorder}>
				<div className={styles.CelebrityModalContainer}>
					<button className={styles.Cross} onClick={onClose}></button>

					<div
						className={styles.CelebrityModalNftImage}
						style={{ backgroundImage: image }}
					/>

					<div className={styles.CelebrityModalNftContainer}>
						<div className={styles.CelebrityModalNftSubcontainerArtist}>
							<h2>{artist}</h2>
							<h3>{user}</h3>
						</div>
						<div className={styles.CelebrityModalNftSubcontainerName}>
							<h2>{name}</h2>
							<h3>{colection}</h3>
						</div>

						<div className={styles.CelebrityModalNftContainerInfoPc}>
							<p className={styles.CelebrityModalTimerStart}>
								{' '}
								Sale starts 11.20.2021 at 12:00 UTC{' '}
							</p>
							<div className={styles.CelebrityModalTimerContainer}>
								<div className={styles.CelebrityModalTimer}>
									<p className={styles.CelebrityModalNumber}>00</p>
									<p className={styles.CelebrityModalTime}>Days</p>
								</div>
								<div className={styles.CelebrityModalTimer}>
									<p className={styles.CelebrityModalNumber}>00</p>
									<p className={styles.CelebrityModalTime}>Hours</p>
								</div>
								<div className={styles.CelebrityModalTimer}>
									<p className={styles.CelebrityModalNumber}>00</p>
									<p className={styles.CelebrityModalTime}>Minutes</p>
								</div>
							</div>
							<div className={styles.CelebrityModalPriceContainer}>
								<div className={styles.CelebrityModalBnb}></div>
								<p>{price} BNB</p>
								<div className={styles.CelebrityModalBnb}></div>
							</div>
							<button className={styles.CelebrityModalPurchase}>
								<p>Purchase NFT</p>
							</button>
						</div>
					</div>
					<div className={styles.CelebrityModalNftContainerInfo}>
						<p className={styles.CelebrityModalTimerStart}>
							{' '}
							Sale starts 11.20.2021 at 12:00 UTC{' '}
						</p>
						<div className={styles.CelebrityModalTimerContainer}>
							<div className={styles.CelebrityModalTimer}>
								<p className={styles.CelebrityModalNumber}>00</p>
								<p className={styles.CelebrityModalTime}>Days</p>
							</div>
							<div className={styles.CelebrityModalTimer}>
								<p className={styles.CelebrityModalNumber}>00</p>
								<p className={styles.CelebrityModalTime}>Hours</p>
							</div>
							<div className={styles.CelebrityModalTimer}>
								<p className={styles.CelebrityModalNumber}>00</p>
								<p className={styles.CelebrityModalTime}>Minutes</p>
							</div>
						</div>
						<div className={styles.CelebrityModalPriceContainer}>
							<div className={styles.CelebrityModalBnb}></div>
							<p>1.5 BNB</p>
							<div className={styles.CelebrityModalBnb}></div>
						</div>
						<button className={styles.CelebrityModalPurchase}>
							<p>Purchase NFT</p>
						</button>
					</div>
				</div>
			</div>

			<div className={styles.Background}></div>
		</section>
	);
};

export default BuyModal;
