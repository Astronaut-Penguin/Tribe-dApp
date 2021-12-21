//Import React
import React from 'react';

//Import Styles
import styles from './Button.module.css';

// BUY BUTTON COMPONENT
// text: STRING - Texto que va en el boton.
// onClick: Function - Funcion que es llamada cuando se hace click en el boton.
// style: CSSProperties - En la etiqueta <button> se debe poner en la propiedad Style una variable
//                          para enviarle CSS desde fuera cuando es llamado en otro componente.

const BuyButton = ({ onClick, text }) => {
    return (
        <button className={styles.CelebrityNftBuy} onClick={onClick}>
			<p>{ text }</p>
		</button>
    );
};

export default BuyButton;