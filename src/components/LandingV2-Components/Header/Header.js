//- React Imports
import React from 'react';

//- Styles Imports
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.Container}>
			<a className={styles.Logo} href="">
				Tribe
			</a>
		</header>
	);
};

export default Header;
