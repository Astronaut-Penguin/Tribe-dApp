//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Features Section Import
import FeatureSection from '../../components/LandingV2-Components/Sections/Features/Features';
import FlatButton from '../../components/LandingV2-Components/FlatButton/FlatButton';

const LandingV2 = () => {
	return (
		<>
			<FeatureSection />
			<FlatButton onClick={'/'} text={'Este es el Big'}/>
			<FlatButton onClick={'/'} text={'Este es el Mid'} mid/>
			<FlatButton onClick={'/'} text={'Este es el Small'} small/>
		</>
	);
};

export default LandingV2;
