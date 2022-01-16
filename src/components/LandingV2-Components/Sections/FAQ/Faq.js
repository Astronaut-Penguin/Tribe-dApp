//- Import React
import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';

//- Import Styles
import styles from './Faq.module.css';

//- Import Icons
import Triangle from './assets/Triangle.png';
import TriangleOpen from './assets/TriangleOpen.png';

const FaqSection = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <h2 className={styles.Faq}>Frequently Asked Questions</h2>
      <div className={styles.AccordionSection}>
        <div className={styles.Container}>
          {Data.map((item, index) => {
            return (
              <>
                <div className={styles.Wrap} onClick={() => toggle(index)} key={index}>
                  <span>
                    {clicked === index ? 
                      <img className={styles.Img} src={TriangleOpen} /> : 
                      <img className={styles.Img} src={Triangle} />}
                  </span>
                  <h1>{item.question}</h1>
                </div>
                {clicked === index ? (
                  <div className={styles.Dropdown}>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
                <div className={styles.Border}/>
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default FaqSection;