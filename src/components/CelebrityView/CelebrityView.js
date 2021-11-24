//- React Imports
import React from 'react';
import threeCharacters from '../../images/three_characters.png';

//- Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

//- Style Imports
import './CelebrityView.css';

const CelebrityView = () => {
	return (
		<section className='nft-container'>
			<div className='nft-story'>
				{/*<a href="">Celebrity NFTs</a>*/}
				<p style={{color: '#868686'}}>Celebrity NFTs</p>
				<p>&gt;</p>
				<p>El Villano</p>
			</div>

			<div className='nft-'>

			</div>
		</section>
	);
};

export default CelebrityView;
