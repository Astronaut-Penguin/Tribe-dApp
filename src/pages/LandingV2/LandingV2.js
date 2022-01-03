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
			<br /><FlatButton onClick={'/'} text={'PancakeSwap'}/>
			<br /><FlatButton onClick={'/'} text={'Enter Application'} mid/>
			<br /><FlatButton onClick={'/'} text={'PancakeSwap'} small/>
		</>
	);
};

export default LandingV2;
