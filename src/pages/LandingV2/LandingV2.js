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
//- Footer Imports
import { Footer } from '../../components';

import CollectionsSection from '../../components/LandingV2-Components/Sections/Collections/Collections';

//  'Home',
// 	'Features',
// 	'TribePop',
// 	'Collections',
// 	'Tiers',
// 	'Team',
// 	'Apply',

const sections = ['Home', 'Features', 'TribePop', 'Apply'];

const LandingV2 = () => {
	return (
		<>
			<Header sections={sections} />
			<div className={styles.Container}>
				<MainSection id={'Home'} />
				<FeatureSection id={'Features'} />
				<TribepopSection id={'TribePop'} />
				<ApplySection id={'Apply'} />
				<CollectionsSection />
				<Footer />
			</div>
		</>
	);
};

export default LandingV2;
