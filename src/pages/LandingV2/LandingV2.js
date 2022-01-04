//- React Imports
import React from 'react';

//- Style Imports
import styles from './LandingV2.module.css';

//- Sections Imports
import { FeatureSection } from '../../components';

//- Components Imports
import { FlatButton } from '../../components';

const LandingV2 = () => {
	return (
		<>
			<FeatureSection />
			<FlatButton onClick={'/'} text={'PancakeSwap'} />
			<FlatButton onClick={'/'} text={'Enter Application'} mid />
			<FlatButton onClick={'/'} text={'PancakeSwap'} small />
		</>
	);
};

export default LandingV2;
