//- Last Updated by Alejo - 15/01/2022

//- React Imports
import React from 'react';

//- Styles Imports
import styles from './Header.module.css';

//- Components Imports
import { Link } from 'react-router-dom';
import { FlatButton } from '../..';
import MobileNavBar from '../NavBar/MobileNavBar/MobileNavBar';
import NavBar from '../NavBar/DefaultNavBar/NavBar';

const Header = ({ sections }) => {
	return (
		<header className={styles.Container}>
			<div className={styles.Subcontainer}>
				<a className={styles.Logo} href="">
					Tribe
				</a>
				<NavBar sections={sections} />
				<div className={styles.Button}>
					<Link to="/dashboard">
						<FlatButton mid text={'Enter Application'} />
					</Link>
				</div>
			</div>
			<MobileNavBar sections={sections} />
		</header>
	);
};

export default Header;
