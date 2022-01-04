//- React Imports
import React from 'react';

//- Styles Imports
import styles from './Header.module.css';

//- Components Imports
import { FlatButton } from '../..';

const Header = () => {
	return (
		<header className={styles.Container}>
			<div className={styles.Subcontainer}>
				<a className={styles.Logo} href="">
					Tribe
				</a>
				<div className={styles.Button}>
					<FlatButton text={'Enter Application'} mid />
				</div>
			</div>
		</header>
	);
};

export default Header;
