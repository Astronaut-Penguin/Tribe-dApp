//- React Imports
import React from 'react';

//- Styles Imports
import styles from './Header.module.css';

//- Components Imports
import { Link } from 'react-router-dom';
import { FlatButton } from '../..';

const Header = () => {
	return (
		<header className={styles.Container}>
			<div className={styles.Subcontainer}>
				<a className={styles.Logo} href="">
					Tribe
				</a>
				<div className={styles.Button}>
					<Link to="/dashboard">
						<FlatButton text={'Enter Application'} mid />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
