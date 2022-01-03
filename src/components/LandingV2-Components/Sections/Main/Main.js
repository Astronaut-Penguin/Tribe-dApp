//- Import React
import React from 'react';

//- Import Styles
import styles from './Main.module.css'

//- Import Images
import PlebCharacter3 from './assets/PlebCharacter3.png'
import Binance from './assets/Binance.png'
import Telegram from './assets/Telegram.png'
import Twitter from './assets/Twitter.png'
import Pancake from './assets/Pankake.png'
import Bsc from './assets/bsc-8 2.png'

const MainSection = () => {
    return (
        <section className={styles.Container}>
            <div className={styles.Celebrities}>
                Celebrities <span>TribePop</span> on the Metaverse
            </div>
            
            <p>We launch NFTs. We build the future.</p>
            <img src={PlebCharacter3} />

            <p>Buy <b>TRIBE Tokens</b> on</p>
            <button>Pankake SWAP</button>
            <p>Exclusively on <img src={Binance}/> <b>Binance Smart Chain</b></p><br />

            <div className={styles.Images}>
                <a title='Telegram' href='/'><img src={Telegram} alt='Telegram'/></a>
                <a title='Twitter' href='/'><img src={Twitter} alt='Twitter'/></a>
                <a title='Pancake' href='/'><img src={Pancake} alt='Pancake'/></a>
                <a title='Pancake' href='/'><img src={Bsc} alt='Pancake'/></a>
            </div>

        </section>
    );
};

export default MainSection;