///////////////////////
// - VISTA GENERAL - //
///////////////////////

//- React
import React, { useState } from 'react';

//- Style
import styles from './Celebrity.module.css';

//- Views
import CelebrityMenu from '../CelebrityMenu/CelebrityMenu';
import CelebrityView from '../CelebrityView/CelebrityView';
//- Components
import CelebrityCard from '../Cards/CelebrityCard/CelebrityCard';

//-DATA
import Artists from '../../data/artist.json';

const Celebrity = () => {
	//- View Rendered
	const [view, setView] = useState(0);

	//8888888888888888888888888888888888888888888888888888888//

	const cards = Artists.data.map(function (value, i, a) {
		return <CelebrityCard />;
	});

	//8888888888888888888888888888888888888888888888888888888//

	//////////////
	//  RENDER  //
	//////////////
	return (
		<>
			{view == 0 && <CelebrityMenu cards={cards} />}
			{view == 1 && <CelebrityView />}
		</>
	);
};

export default Celebrity;
