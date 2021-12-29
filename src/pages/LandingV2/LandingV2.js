//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Features Section Import
import FeatureSection from '../../components/LandingV2-Components/Sections/Features/Features';

const LandingV2 = () => {
	return (
		<>
			<div className={styles.Background} />
			<FeatureSection />
		</>
	);
};

export default LandingV2;
