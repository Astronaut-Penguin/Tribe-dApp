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
	TiersSection,
	OurTeamSection,
	ApplySection,
	FaqSection,
} from '../../components';

//- Footer Imports
import { Footer } from '../../components';

import RoadmapSection from '../../components/LandingV2-Components/Sections/Roadmap/Roadmap';

//  'Home',
// 	'Features',
// 	'TribePop',
// 	'Collections',
// 	'Tiers',
// 	'Team',
// 	'Apply',

const sections = ['Home', 'Features', 'TribePop', 'Tiers', 'Team', 'Apply'];

const LandingV2 = () => {
	return (
		<>
			<Header sections={sections} />
			<div className={styles.Container}>
				<MainSection id={'Home'} />
				<FeatureSection id={'Features'} />
				<TribepopSection id={'TribePop'} />
				<TiersSection id={'Tiers'} />
				<OurTeamSection id={'Team'} />
				<ApplySection id={'Apply'} />
				<FaqSection />
				<Footer />
			</div>
		</>
	);
};

export default LandingV2;
