//- Import React
import React from 'react';

//- Import Styles
import styles from './Apply.module.css';

//- Import Components
import CardNFT from '../../Cards/CardNFT/CardNFT';
import ApplyButton from '../../Buttons/FlatButton/FlatButton';


const ApplySection = () => {
	return (
		<section className={styles.Container}>
			<div className={styles.Subcontainer}>
				<div className={styles.Content}>
                    <CardNFT 
                        name={'The Pleb'}
                        colection={'Caveman NFT'}
                        price={'0.09 BNB'}
                        image={'./assets/memepad/nft/Pleb.png'}
                    />
					<div className={styles.TribePop}>
						Apply for your<span className={styles.GradientText}> TribePop NFTs </span>
					</div>
					<p className={styles.Text}>
						Be an important part of our Marketplace, <br />
                        share your creations and shape you future.
					</p>
                    <ApplyButton text={'Apply Now'}/>
				</div>
			</div>
		</section>
	);
};

export default ApplySection;
