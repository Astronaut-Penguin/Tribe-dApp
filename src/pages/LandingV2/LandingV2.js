//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Header Imports
import { Header } from '../../components';
//- Sections Imports
import {
	MainSection,
	FeatureSection,
	TribepopSection,
	ApplySection,
} from '../../components';
import TiersSection from '../../components/LandingV2-Components/Sections/Tiers/Tiers';

const LandingV2 = () => {
	return (
		<>
			<Header selected={0} />
			<div className={styles.Container}>
				<MainSection />
				<FeatureSection />
				<TribepopSection />
				<ApplySection />
				<TiersSection />
			</div>
		</>
	);
};

export default LandingV2;
