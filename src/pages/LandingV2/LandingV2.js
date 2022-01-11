//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Sections Imports
import { MainSection, FeatureSection, TribepopSection } from '../../components';
import Footer from '../../components/LandingV2-Components/Sections/Footer/Footer';
const LandingV2 = () => {
	return (
		<>
			<div className={styles.Container}>
				<MainSection />
				<FeatureSection />
				<TribepopSection />
				<Footer/>
			</div>
		</>
	);
};

export default LandingV2;
