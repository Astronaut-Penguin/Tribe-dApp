//- React Imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//- Style Imports
import styles from './BuyModal.module.css';
import { nftIds } from '../../store/reducer/purchaseNFT_reducer/purchaseNFTInitialStates';
import { buyNFT } from '../../store/reducer/purchaseNFT_reducer/indexNFT';
// CARD COMPONENT
// onClick: La funcion que manda la transaccion
// onClose: La funcion que cierra el modal

// artist: STRING - Nombre del Artista
// user: STRING - Nombre de Usuario

// name: STRING - Nombre del NFT
// colection: STRING - Nombre de la coleccion

// cutoffDate: La fecha deadline en UNIX

// price: STRING - El Precio del NFT
// image: STRING URL - Url de la imagen

const BuyModal = ({
	artist,
	user,
	name,
	colection,
	price,
	image,
	onClose,
	address,
	connected,
	nftId,
	cutoffDate,
}) => {
	//888888888888888888888888888888888888888888888888888888888888888888//

	///////////////////
	//- DATE CUTOFF -//
	///////////////////

	//Logica para el deadline
	const update = true;
	const dateCutOff = new Date(cutoffDate);
	const [dateNow, setDateNow] = useState(Date.now());
	const [dateRemaining, setDateRemaining] = useState(0);

	//- Remaining States
	const [daysRemaining, setDaysRemaining] = useState(0);
	const [hoursRemaining, setHoursRemaining] = useState(0);
	const [minutesRemaining, setMinutesRemaining] = useState(0);
	const [secondsRemaining, setSecondsRemaining] = useState(0);

	//- Done
	const [done, setDone] = useState(false);

	//Get Date Cutoff
	const cutoffTime = dateCutOff.getTime();
	const cutoffYear = dateCutOff.getFullYear();
	const cutoffMonth = dateCutOff.getMonth() + 1;
	const cutoffDay = dateCutOff.getDate();
	const cutoffHour = dateCutOff.getHours();
	const cutoffMinutes = dateCutOff.getMinutes();
	const cutoffSeconds = dateCutOff.getSeconds();

	//- Get Date Now
	useEffect(() => {
		setInterval(() => {
			setDateNow(Date.now());
		}, 1000);
	}, [update]);

	//- Set Time Remaining
	useEffect(() => {
		if (dateNow === cutoffTime || dateNow > cutoffTime) {
			setDone(true);
		}
		if (!done) {
			setDateRemaining(cutoffTime - dateNow);
			setDaysRemaining(Math.floor(dateRemaining / (1000 * 60 * 60 * 24)));
			setHoursRemaining(
				Math.floor((dateRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			);
			setMinutesRemaining(
				Math.floor((dateRemaining % (1000 * 60 * 60)) / (1000 * 60)),
			);
			setSecondsRemaining(Math.floor((dateRemaining % (1000 * 60)) / 1000));
		}
	});

	//8888888888888888888888888888888888888888888888888888888888888888888//

	//aca va a ir la logica que llama al mint function del contrato
	const dispatch = useDispatch();
	const nftDetails = useSelector((state) => state.nft[nftId]);

	const enabled = nftDetails ? nftDetails.enabled : false;
	const balance = nftDetails ? nftDetails.balance : 0;
	//agregar la promesa de onclick a los dos purchase button, uno es el mobile el otro el web
	return (
		<section className={styles.CelebrityBuyModal}>
			<div className={styles.CelebrityModalContainerBorder}>
				<div className={styles.CelebrityModalContainer}>
					<button className={styles.Cross} onClick={onClose}></button>

					<div
						className={styles.CelebrityModalNftImage}
						style={{ backgroundImage: 'url(' + image + ')' }}
					/>

					<div className={styles.CelebrityModalNftContainer}>
						<div className={styles.CelebrityModalNftSubcontainerArtist}>
							<h2>{artist}</h2>
							<h3>{user}</h3>
						</div>
						{connected && (
							<div className={styles.CelebrityModalNftSubcontainerName}>
								<h2>{name}</h2>
								<h3>{colection}</h3>

								<p className={styles.OwnText}> You own: {balance} </p>
							</div>
						)}

						<div className={styles.CelebrityModalNftContainerInfoPc}>
							<p className={styles.CelebrityModalTimerStart}>
								{!done
									? 'Sale starts ' +
									  (cutoffMonth < 10 ? '0' : '') +
									  cutoffMonth +
									  '.' +
									  (cutoffDay < 10 ? '0' : '') +
									  cutoffDay +
									  '.' +
									  cutoffYear +
									  ' at ' +
									  ' ' +
									  (cutoffHour < 10 ? '0' : '') +
									  cutoffHour +
									  ':' +
									  (cutoffMinutes < 10 ? '0' : '') +
									  cutoffMinutes +
									  (cutoffHour < 12 ? ' AM' : ' PM') +
									  ' UTC'
									: 'SALE OPEN!'}
							</p>
							<div className={styles.CelebrityModalTimerContainer}>
								<div className={styles.CelebrityModalTimer}>
									<p className={styles.CelebrityModalNumber}>
										{(daysRemaining < 10 ? '0' : '') + daysRemaining}
									</p>
									<p className={styles.CelebrityModalTime}>Days</p>
								</div>
								<div className={styles.CelebrityModalTimer}>
									<p className={styles.CelebrityModalNumber}>
										{(hoursRemaining < 10 ? '0' : '') + hoursRemaining}
									</p>
									<p className={styles.CelebrityModalTime}>Hours</p>
								</div>
								<div className={styles.CelebrityModalTimer}>
									<p className={styles.CelebrityModalNumber}>
										{(minutesRemaining < 10 ? '0' : '') + minutesRemaining}
									</p>
									<p className={styles.CelebrityModalTime}>Minutes</p>
								</div>
							</div>
							<div className={styles.CelebrityModalPriceContainer}>
								<div className={styles.CelebrityModalBnb}></div>
								<p>{price} BNB</p>
								<div className={styles.CelebrityModalBnb}></div>
							</div>
							{enabled && (
								<button
									onClick={async () => {
										dispatch(buyNFT({ amount: price, id: nftId }));
									}}
									className={styles.CelebrityModalPurchase}
								>
									<p>Purchase NFT</p>
								</button>
							)}
							{!enabled && done === true &&(
								<div className={styles.CelebrityModalDisable}>
									<p>You need more allocation</p>
								</div>
							)}
							{!enabled && done === false &&(
								<div className={styles.CelebrityModalDisable}>
									<p>Wait until sale start</p>
								</div>
							)}
						</div>
					</div>
					<div className={styles.CelebrityModalNftContainerInfo}>
						<p className={styles.CelebrityModalTimerStart}>
							{!done
								? 'Sale starts ' +
								  (cutoffMonth < 10 ? '0' : '') +
								  cutoffMonth +
								  '.' +
								  (cutoffDay < 10 ? '0' : '') +
								  cutoffDay +
								  '.' +
								  cutoffYear +
								  ' at ' +
								  ' ' +
								  (cutoffHour < 10 ? '0' : '') +
								  cutoffHour +
								  ':' +
								  (cutoffMinutes < 10 ? '0' : '') +
								  cutoffMinutes +
								  (cutoffHour < 12 ? ' AM' : ' PM') 
								: 'SALE OPEN!'}
						</p>
						<div className={styles.CelebrityModalTimerContainer}>
							<div className={styles.CelebrityModalTimer}>
								<p className={styles.CelebrityModalNumber}>
									{(daysRemaining < 10 ? '0' : '') + daysRemaining}
								</p>
								<p className={styles.CelebrityModalTime}>Days</p>
							</div>
							<div className={styles.CelebrityModalTimer}>
								<p className={styles.CelebrityModalNumber}>
									{(hoursRemaining < 10 ? '0' : '') + hoursRemaining}
								</p>
								<p className={styles.CelebrityModalTime}>Hours</p>
							</div>
							<div className={styles.CelebrityModalTimer}>
								<p className={styles.CelebrityModalNumber}>
									{(minutesRemaining < 10 ? '0' : '') + minutesRemaining}
								</p>
								<p className={styles.CelebrityModalTime}>Minutes</p>
							</div>
						</div>
						<div className={styles.CelebrityModalPriceContainer}>
							<div className={styles.CelebrityModalBnb}></div>
							<p>{price} BNB</p>
							<div className={styles.CelebrityModalBnb}></div>
						</div>
						{enabled && (
							<button
								onClick={() => {
									dispatch(buyNFT({ amount: price, id: nftId }));
								}}
								className={styles.CelebrityModalPurchase}
							>
								<p>Purchase NFT</p>
							</button>
						)}
						{!enabled && (
							<div className={styles.CelebrityModalDisable}>
								<p>Without Permission</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className={styles.Background}></div>
		</section>
	);
};

export default BuyModal;
