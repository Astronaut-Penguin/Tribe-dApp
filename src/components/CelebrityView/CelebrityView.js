//- React Imports
import React from 'react';
import threeCharacters from '../../images/three_characters.png';

//- Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

//- Style Imports
import './CelebrityView.css';

const CelebrityView = () => {
	return (
		<>
			{/* BUY MODAL */}
			<section className="celebrity-buy-modal">
				<div className="celebrity-modal-container-border">
					<div className="celebrity-modal-container">
						<div className="celebrity-modal-nft-image" />

						<div className="celebrity-modal-nft-container">
							<div className="celebrity-modal-nft-subcontainer-artist">
								<h2>Alejo Viola</h2>
								<h3>@AlejoViola</h3>
							</div>
							<div className="celebrity-modal-nft-subcontainer-name">
								<h2>Alejo Viola T-1 #0001</h2>
								<h3>(TIER) Allocation</h3>
							</div>
						</div>
						<div className="celebrity-modal-nft-container-info">
							<p>Sale starts 11.20.2021 at 12:00 UTC </p>
							<div className="celebrity-modal-timer-container">
								<div className="celebrity-modal-timer">
									<p className="celebrity-modal-number">00</p>
									<p className="celebrity-modal-time">Days</p>
								</div>
								<div className="celebrity-modal-timer">
									<p className="celebrity-modal-number">00</p>
									<p className="celebrity-modal-time">Hours</p>
								</div>
								<div className="celebrity-modal-timer">
									<p className="celebrity-modal-number">00</p>
									<p className="celebrity-modal-time">Minutes</p>
								</div>
							</div>
							<div className="celebrity-modal-price-container">
								<div className="celebrity-modal-bnb"></div>
								<p>1.5001 BNB</p>
								<div className="celebrity-modal-bnb"></div>
							</div>
							<button className="celebrity-modal-purchase">
								<p>Purchase NFT</p>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/******************************/}

			<section className="celebrity-container">
				<p style={{ backgroundColor: 'red', color: 'white' }}>
					Work in Progress
				</p>
				<div className="celebrity-story">
					{/*<a href="">Celebrity NFTs</a>*/}
					<p style={{ color: '#868686' }}>Celebrity NFTs</p>
					<p>&gt;</p>
					<p>Alejo Viola</p>
				</div>

				<div className="celebrity-artist-data">
					<div className="celebrity-artist-info-container">
						<div className="celebrity-image"></div>
						<div className="celebrity-name">
							<h2>Alejo Viola</h2>
							<h3>@AlejoViola</h3>

							<div>
								<a href="" className="celebrity-social social-twitter">
									Twitter
								</a>
								<a href="" className="celebrity-social social-instagram">
									Instagram
								</a>
								<a href="" className="celebrity-social social-youtube">
									Youtube
								</a>
								<a href="" className="celebrity-social social-tiktok">
									TikTok
								</a>
							</div>
						</div>
					</div>
					<div className="celebrity-nft-container">
						<div className="celebrity-nft-card">
							<div className="celebrity-nft-image">
								<button className="celebrity-nft-buy">
									<p>Buy</p>
								</button>
							</div>
							<div className="celebrity-nft-data-container">
								<div className="celebrity-nft-data">
									<h3>Alejo Viola T-1 #0001</h3>
									<h2>Alejo Aldeano NFT</h2>
								</div>
								<div className="celebrity-nft-price">
									<h4>Price</h4>
									<h5>0,50 BNB</h5>
								</div>
							</div>
						</div>
						<div className="celebrity-nft-card">
							<div className="celebrity-nft-image">
								<img src="./assets/alejo-nft.png" alt="" />
								<button className="celebrity-nft-buy">
									<p>Buy</p>
								</button>
							</div>
							<div className="celebrity-nft-data-container">
								<div className="celebrity-nft-data">
									<h3>Alejo Viola T-1 #0001</h3>
									<h2>Alejo Aldeano NFT</h2>
								</div>
								<div className="celebrity-nft-price">
									<h4>Price</h4>
									<h5>0,50 BNB</h5>
								</div>
							</div>
						</div>
						<div className="celebrity-nft-card">
							<div className="celebrity-nft-image">
								<button className="celebrity-nft-buy">
									<p>Buy</p>
								</button>
							</div>
							<div className="celebrity-nft-data-container">
								<div className="celebrity-nft-data">
									<h3>Alejo Viola T-1 #0001</h3>
									<h2>Alejo Aldeano NFT</h2>
								</div>
								<div className="celebrity-nft-price">
									<h4>Price</h4>
									<h5>0,50 BNB</h5>
								</div>
							</div>
						</div>
						<div className="celebrity-nft-card">
							<div className="celebrity-nft-image">
								<button className="celebrity-nft-buy">
									<p>Buy</p>
								</button>
							</div>
							<div className="celebrity-nft-data-container">
								<div className="celebrity-nft-data">
									<h3>Alejo Viola T-1 #0001</h3>
									<h2>Alejo Aldeano NFT</h2>
								</div>
								<div className="celebrity-nft-price">
									<h4>Price</h4>
									<h5>0,50 BNB</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CelebrityView;
