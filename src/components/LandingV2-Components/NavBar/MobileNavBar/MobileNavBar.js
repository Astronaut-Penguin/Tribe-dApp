//- React Imports
import React, { useEffect, useState } from 'react';

//- Styles Imports
import styles from './MobileNavBar.module.css';

const MobileNavBar = ({ selected }) => {
	////////////
	// STATES //
	////////////
	//- Items Width
	const [width, setWidth] = useState('0px');

	//Hay que conseguir el tamaño de cada <a> para animarlo.
	useEffect(() => {
		const item = document.querySelector('#Nav0');
		setWidth('' + item.offsetWidth + 'px');
	}, []);

	////////////
	// RENDER //
	////////////

	return (
		<nav className={styles.Container}>
			<ul
				className={`${styles.NavContainer}`}
				style={{ left: 'calc( 50% - (' + width + ' / 2))' }}
			>
				<li id="Nav0">
					<a href="#faso" className={`${selected == 0 ? styles.Selected : ''}`}>
						Home
					</a>
				</li>
				<li>
					<a href="#faso" className={`${selected == 1 ? styles.Selected : ''}`}>
						Features
					</a>
				</li>
				<li id="Nav2">
					<a href="#faso" className={`${selected == 2 ? styles.Selected : ''}`}>
						TribePop
					</a>
				</li>
				<li>
					<a href="#faso" className={`${selected == 3 ? styles.Selected : ''}`}>
						Collections
					</a>
				</li>
				<li>
					<a href="#faso" className={`${selected == 4 ? styles.Selected : ''}`}>
						Tiers
					</a>
				</li>
				<li>
					<a href="#faso" className={`${selected == 5 ? styles.Selected : ''}`}>
						RoadMap
					</a>
				</li>
				<li>
					<a href="#faso" className={`${selected == 6 ? styles.Selected : ''}`}>
						Team
					</a>
				</li>
				<li>
					<a href="#faso" className={`${selected == 7 ? styles.Selected : ''}`}>
						Apply
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavBar;
