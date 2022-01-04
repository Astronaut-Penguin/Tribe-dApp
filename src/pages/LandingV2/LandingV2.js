//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Sections Imports
import MainSection from '../../components/LandingV2-Components/Sections/Main/Main';
import { FeatureSection } from '../../components';

//- Components Imports
import { FlatButton } from '../../components';

const LandingV2 = () => {
	return (
		<>
			{/* <div className={styles.Background} /> */}
			<div className={styles.Container}>
				<MainSection />
        <FeatureSection />
			</div>
		</>
	);
};

export default LandingV2;
