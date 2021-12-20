//- React Imports
import React, { useState, useEffect } from 'react';

//- Style Imports
import './CelebrityView.css';

//- Components Imports
import { initializeNFTInfo } from '../../store/reducer/purchaseNFT_reducer/indexNFT';
import CardNFT from '../Cards/CardNFT/CardNFT';
import BuyModal from '../BuyModal/BuyModal';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import { nftIds } from '../../store/reducer/purchaseNFT_reducer/purchaseNFTInitialStates';
import { useDispatch, useSelector } from 'react-redux';

import ChristmasBanner from '../ChristmasComponents/Banners/ChristmasBanner';

//8888888888888888888888888888888888888888888888888888888//

//- DATOS DEL ARTISTA
const artist = {
	//Imagen del Artista
	image: './assets/Memepad.png',
	//Nombre del Artista
	name: 'Memepad',
	//Usuario del Artista
	user: 'Memepad.co',
	//URL redes sociales
	telegram: 'https://t.me/memepadofficial/',
	twitter: 'https://twitter.com/MemePadLaunch',
	instagram: '',
	youtube: '',
	tiktok: '',
};

//- DATOS DE NFTS
//- IMAGE / VIDEO setear como 'UNDEFINED' si no va contenido
const nfts = [
	{
		name: 'The BlackMepad',
		colection: 'Open Edition NFT',
		image: undefined,
		video: './assets/nft/Blackmepad.mp4',
		price: '0.2',
		address: '0x2',
		cutoffDate: 'December 20, 2021 00:00:00 UTC',
		viewcontract:
			'https://bscscan.com/address/0x62B873870C9d40995C57Bb0cF222ED5A901D943A',
	},
	{
		name: 'The Pleb',
		colection: 'Caveman NFT',
		image: './assets/nft/Pleb.png',
		video: undefined,
		price: '0.09',
		address: '0x1',
		cutoffDate: 'December 20, 2021 00:00:00 UTC',
		viewcontract:
			'https://bscscan.com/address/0x2657b54d5782654bd78f0df5e73ac0bbe8dd1c97',
	},
	{
		name: 'The Chad',
		colection: 'Gladiator NFT',
		image: undefined,
		video: './assets/nft/Chad.mp4',
		price: '0.28',
		address: '0x2',
		cutoffDate: 'December 20, 2021 00:00:00 UTC',
		viewcontract:
			'https://bscscan.com/address/0x4eff34d8913c0d92b041652aa983373eba8a0545',
	},
	{
		name: 'The Elon',
		colection: 'CryptoKing NFT',
		image: undefined,
		video: './assets/nft/Elon.mp4',
		price: '0.45',
		address: '0x2',
		cutoffDate: 'December 20, 2021 00:00:00 UTC',
		viewcontract:
			'https://bscscan.com/address/0x7632c127f32678daa599de7cc635ed99a242dbaf',
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
		image: '',
		video: '',
		connected: false,
		address: 'address',
		poolNumber: 0,
		cutoffDate: '1652983200',
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
				//URL del video
				video={value.video}
				//Precio
				price={value.price}
				// La funcion que activa el boton BUY
				onClick={() => {
					selectedArtist.name = value.name;
					selectedArtist.colection = value.colection;
					selectedArtist.image = value.image;
					selectedArtist.video = value.video;
					selectedArtist.price = value.price;
					selectedArtist.address = value.address;
					selectedArtist.connected = connected;
					selectedArtist.poolNumber = i;
					selectedArtist.cutoffDate = value.cutoffDate;

					showModal(true);
				}}
				href={value.viewcontract}
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
					video={selectedArtist.video}
					address={selectedArtist.address}
					connected={connected}
					nftId={nftIds[selectedArtist.poolNumber]}
					onClose={() => {
						showModal(false);
					}}
					onClick={() => {}}
					cutoffDate={selectedArtist.cutoffDate}
				/>
			)}

			{/******************************/}

			<AnimatedBackground />

			{/******************************/}

			{/*<div className="nft-banner-container">
				<div className="banner-container-content">
					<div>
						<h2>Celebrity & Brands TRIBEPOP NFTs</h2>
						<p>
							Each TRIBEPOP is a re-creation of a celebrity or brand and these
							will be characters ready to use in our next role-playing game in
							our metaverse!
						</p>
						<p>
							You can only buy them at this value in this unique opportunity,
							then you can only get one if someone wants to sell
						</p>
					</div>
				</div>
				</div>*/}
			<ChristmasBanner
				title={'Celebrity & Brands TRIBEPOP NFTs'}
				text={
					'Each TRIBEPOP is a re-creation of a celebrity or brand and these will be characters ready to use in our next role-playing game in our metaverse!'
				}
				text2={
					'You can only buy them at this value in this unique opportunity, then you can only get one if someone wants to sell'
				}
			/>

			<section className="celebrity-container">
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
									href={artist.telegram}
									className="celebrity-social social-telegram"
								>
									Telegram
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
