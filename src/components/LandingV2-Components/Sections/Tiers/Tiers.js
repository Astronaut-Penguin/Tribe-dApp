//- Import React
import React from 'react';

//- Import Styles
import styles from './Tiers.module.css';

//- Import Card
import CardTier from '../../Cards/CardTier/CardTier';
import CardTier2 from '../../Cards/CardTier/CardTier';
import CardTier3 from '../../Cards/CardTier/CardTier';


//- Import Images
import Caveman from './assets/Caveman.png';
import CavemanLogo from './assets/CavemanLogo.png';
import CryptoKing from './assets/CryptoKing.png';
import CryptoKingLogo from './assets/CryptoKingLogo.png';
import Gladiator from './assets/Gladiator.png';
import GladiatorLogo from './assets/GladiatorLogo.png';

const TiersSection = () => {
    return (
        <CardTier 
            price={'50,000'} 
            allocation={'Guaranteed Allocation'} 
            image={Gladiator} 
            logo={GladiatorLogo} 
        />
    );
};

export default TiersSection;