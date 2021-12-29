import React, { useState, Fragment } from 'react';
import CircularSpinner from './Circular';

import styles from './Loader.module.css';


const ImageLoader = ({ image }) => {
	const [src, setSrc] = useState(image);
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			<div>
				<div className={styles.CelebrityNftImage}> 
					{!loaded && (
						<div className={styles.LoaderBackground}>
							<CircularSpinner />
						</div>
					)}

					<img
                        className={styles.ImageLoader}
						src={src}
						onLoad={() => {
							setLoaded(true);
						}}
					/> 
				</div>
			</div>
		</>
	);
};

export default ImageLoader;