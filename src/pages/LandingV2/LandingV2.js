//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Sections Imports
import {
	MainSection,
	FeatureSection,
	TribepopSection,
	ApplySection,
} from '../../components';

const LandingV2 = () => {
	return (
		<>
			<Header />
			<div className={styles.Container}>
				<MainSection />
				<FeatureSection />
				<TribepopSection />
				<ApplySection />
			</div>
		</>
	);
};

export default LandingV2;
