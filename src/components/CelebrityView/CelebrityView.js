//- React Imports
import React from 'react';
import threeCharacters from '../../images/three_characters.png';

//- Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

//- Style Imports
import './CelebrityView.css';

const CelebrityView = () => {
	return (
		<section className="celebrity-container">
			<p style={{ backgroundColor: 'red', color: 'white' }}>Work in Progress</p>
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
	);
};

export default CelebrityView;
