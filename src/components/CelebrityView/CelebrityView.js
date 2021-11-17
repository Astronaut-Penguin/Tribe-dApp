//- React Imports
import React from 'react';
import threeCharacters from '../../images/three_characters.png';

//- Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

//- Style Imports
import styles from './CelebrityView';

const CelebrityView = (props) => {
	return (
		<div className="staking-wrapper">
			<div className="project-banner-container">
				<div className="banner-container-content">
					<div>
						<h2>TRIBE Staking Pools</h2>
						<p>Get rewarded by staking (or freezing) your $TRIBEX</p>
					</div>
					<div className="banner-img">
						<img src={threeCharacters} alt=" Three Characters" />
					</div>
				</div>
			</div>

			<div className="staking-cards-container"></div>
		</div>
	);
};

export default CelebrityView;
