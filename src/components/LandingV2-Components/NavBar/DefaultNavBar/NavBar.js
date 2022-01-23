//- Last Update by Alejo - 15/01/2022

//- React Imports
import React, { useState, useEffect } from 'react';

//- Styles Imports
import styles from './NavBar.module.css';

//- React Router Hash Link Imports
import { HashLink } from 'react-router-hash-link';

const NavBar = ({ sections }) => {
	////////////
	// STATES //
	////////////
	//- SELECTED STATE
	const [s, setS] = useState();

	///////////////
	// FUNCTIONS //
	///////////////

	useEffect(() => {
		sections.map((value, i) => {
			if (s == i) {
				window.location = '#/#' + value;
				document
					.getElementById(value)
					.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	}, [s]);

	////////////
	// RENDER //
	////////////

	return (
		<>
			<button
				className={styles.Logo}
				onClick={() => {
					setS(0);
					document
						.getElementById('Home')
						.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}}
			>
				Tribe
			</button>
			<nav className={styles.Container}>
				{sections.map((value, i) => {
					if (i != 0) {
						return (
							<button
								className={`${styles.Button} ${
									s == i ? styles.Selected : styles.NotSelected
								}`}
								key={i}
								onClick={() => {
									setS(i);
									document
										.getElementById(value)
										.scrollIntoView({ behavior: 'smooth', block: 'start' });
								}}
							>
								<p className={styles.Link}>{value}</p>
							</button>
						);
					}
				})}
			</nav>
		</>
	);
};

export default NavBar;
