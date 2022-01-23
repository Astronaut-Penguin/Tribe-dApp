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
	RoadmapSection,
	OurTeamSection,
	ApplySection,
	FaqSection,
} from '../../components';

//- Footer Imports
import { Footer } from '../../components';


//  'Home',
// 	'Features',
// 	'TribePop',
// 	'Collections',
// 	'Tiers',
// 	'RoadMap',
// 	'Team',
// 	'Apply',

const sections = [
	'Home',
	'Features',
	'TribePop',
	'Tiers',
	'RoadMap',
	'Team',
	'Apply',
];

const LandingV2 = () => {
	return (
		<>
			<Header sections={sections} />
			<div className={styles.Container}>
				<MainSection id={'Home'} />
				<FeatureSection id={'Features'} />
				<TribepopSection id={'TribePop'} />
				<TiersSection id={'Tiers'} />
				<RoadmapSection id={'RoadMap'} />
				<OurTeamSection id={'Team'} />
				<ApplySection id={'Apply'} />

				<FaqSection />
				<Footer />
			</div>
		</>
	);
};

export default LandingV2;
