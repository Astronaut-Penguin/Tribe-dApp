//- React Imports
import React, { useState, useEffect } from 'react';

//- Style Imports
import './CelebrityView.css';

//- Components Imports
import { initializeNFTInfo } from '../../store/reducer/purchaseNFT_reducer/indexNFT';
import CardNFT from '../Cards/CardNFT/CardNFT';
import BuyModal from '../BuyModal/BuyModal';
import { nftIds } from '../../store/reducer/purchaseNFT_reducer/purchaseNFTInitialStates';
import { useDispatch, useSelector } from 'react-redux';

//8888888888888888888888888888888888888888888888888888888//

//- DATOS DEL ARTISTA
const artist = {
	//Imagen del Artista
	image: './assets/artist.jpg',
	//Nombre del Artista
	name: 'Memepad',
	//Usuario del Artista
	user: '@Memepad',
	//URL redes sociales
	twitter: '',
	instagram: '',
	youtube: '',
	tiktok: '',
};

//- DATOS DE NFTS
const nfts = [
	{
		name: 'The Black MEPAD',
		colection: 'MemePad #0001',
		image: './assets/nft/nft1.png',
		price: '0.5',
		address: '0x0',
	},
	{
		name: 'The Pleb',
		colection: 'MemePad #0001',
		image: './assets/nft/CavemanMepad.jpg',
		price: '1',
		address: '0x1',
	},
	{
		name: 'The Chad',
		colection: 'MemePad #0001',
		image: './assets/nft/GladiatorMepad.jpg',
		price: '2',
		address: '0x2',
	},
	{
		name: 'The Elon',
		colection: 'MemePad #0001',
		image: './assets/nft/nft1.png',
		price: '34',
		address: '0x3',
	},
];

//8888888888888888888888888888888888888888888888888888888//

const CelebrityView = () => {
	//- Variable que define si el Modal de Purchase se muestra o no.
	const [modal, showModal] = useState(false);

	//- Variable que define cual NFT se muestra en el modal de Purchase.
	const [selectedArtist, selectArtist] = useState({
		name: 'name',
		colection: 'colection',
		price: 'price',
		image: 'image',
		connected: false,
		address: 'address',
		poolNumber: 0,
	});

	const { connected } = useSelector((state) => state.web3);
	const dispatch = useDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			if (connected) {
				if (nftIds) {
					dispatch(initializeNFTInfo());
				}
			}
		}, 10000);
		return () => {
			clearInterval(interval);
		};
	});

	//8888888888888888888888888888888888888888888888888888888//

	const cards = nfts.map(function (value, i, a) {
		return (
			<CardNFT
				//Nombre del NFT
				name={value.name}
				//Nombre coleccion
				colection={value.colection}
				//URL de la imagen
				image={value.image}
				//Precio
				price={value.price}
				// La funcion que activa el boton BUY
				onClick={() => {
					selectedArtist.name = value.name;
					selectedArtist.colection = value.colection;
					selectedArtist.image = value.image;
					selectedArtist.price = value.price;
					selectedArtist.address = value.address;
					selectedArtist.connected = connected;
					selectedArtist.poolNumber = i;

					showModal(true);
				}}
			/>
		);
	});

	//////////////
	//  RENDER  //
	//////////////

	return (
		<>
			{/* BUY MODAL */}
			{modal && (
				<BuyModal
					artist={artist.name}
					user={artist.user}
					name={selectedArtist.name}
					colection={selectedArtist.colection}
					price={selectedArtist.price}
					image={selectedArtist.image}
					address={selectedArtist.address}
					connected={connected}
					nftId={nftIds[selectedArtist.poolNumber]}
					onClose={() => {
						showModal(false);
					}}
					onClick={() => {}}
				/>
			)}

			{/******************************/}

			<section className="celebrity-container">
				<p style={{ backgroundColor: 'red', color: 'white' }}>
					Work in Progress
				</p>
				<div className="celebrity-story">
					{/*<a href="">Celebrity NFTs</a>*/}
					<p style={{ color: '#868686' }}>Celebrity NFTs</p>
					<p>&gt;</p>
					<p>{artist.name}</p>
				</div>

				<div className="celebrity-artist-data">
					<div className="celebrity-artist-info-container">
						<div
							className="celebrity-image"
							style={{ backgroundImage: 'url(' + artist.image + ')' }}
						></div>
						<div className="celebrity-name">
							<h2>{artist.name}</h2>
							<h3>{artist.user}</h3>

							<div>
								<a
									href={artist.twitter}
									className="celebrity-social social-twitter"
								>
									Twitter
								</a>
								<a
									href={artist.instagram}
									className="celebrity-social social-instagram"
								>
									Instagram
								</a>
								<a
									href={artist.youtube}
									className="celebrity-social social-youtube"
								>
									Youtube
								</a>
								<a
									href={artist.tiktok}
									className="celebrity-social social-tiktok"
								>
									TikTok
								</a>
							</div>
						</div>
					</div>

					<div id="card-container" className="celebrity-nft-container">
						{cards}
					</div>
				</div>
			</section>
		</>
	);
};

export default CelebrityView;
