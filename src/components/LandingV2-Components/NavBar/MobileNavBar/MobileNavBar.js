//- Last Updated by Alejo - 15/01/2022

//- React Imports
import React, { useEffect, useState, createRef } from 'react';

//- Styles Imports
import styles from './MobileNavBar.module.css';

//- Flicking Imports
import Flicking, { FlickingError } from '@egjs/react-flicking';

//- React Router Hash Link Imports
import { HashLink } from 'react-router-hash-link';

const MobileNavBar = ({ sections }) => {
	////////////
	// STATES //
	////////////
	//- SELECTED STATE
	const [s, setS] = useState(0);

	const flicking = createRef();

	///////////////
	// FUNCTIONS //
	///////////////

	const moveToPanel = async () => {
		try {
			await flicking.next();
		} catch (e) {
			console.log(e instanceof FlickingError); // true
			console.log(e.code);
		}
	};

	useEffect(() => {
		sections.map((value, i) => {
			if (s == i) {
				window.location = '#/#' + value;
				document
					.getElementById(value)
					.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
		console.log(flicking);
	}, [s]);

	////////////
	// RENDER //
	////////////

	return (
		<nav className={styles.Container}>
			<Flicking
				ref={flicking}
				className={`${styles.NavContainer}`}
				onChanged={(e) => {
					setS(e.index);
				}}
			>
				{sections.map((value, i) => (
					<button
						className={`${styles.Button} ${
							s == i ? styles.Selected : styles.NotSelected
						}`}
						key={i}
						onClick={() => {
							setS(i);
							moveToPanel();
						}}
					>
						<p className={styles.Link}>{value}</p>
					</button>
				))}
			</Flicking>
		</nav>
	);
};

export default MobileNavBar;
