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
							<a href="" className="celebrity-social">
								Twitter
							</a>
							<a href="" className="celebrity-social">
								Instagram
							</a>
							<a href="" className="celebrity-social">
								Youtube
							</a>
							<a href="" className="celebrity-social">
								TikTok
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CelebrityView;
