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

const sections = [
	'Home',
	'Features',
	'TribePop',
	'Collections',
	'Tiers',
	'Team',
	'Apply',
];

const LandingV2 = () => {
	return (
		<>
			<Header sections={sections} />
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
