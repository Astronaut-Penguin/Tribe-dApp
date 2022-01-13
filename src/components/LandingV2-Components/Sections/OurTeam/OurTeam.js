//- Import React
import React from 'react';

//- Import Styles
import styles from './OurTeam.module.css';

//- Import Images
import AgusCTO from './assets/AgusCTO.png';
import AgusDesign from './assets/AgusDesign.png';
import AleManager from './assets/AleManager.png';
import DiegoUX from './assets/DiegoUX.png';
import EliasCCO from './assets/EliasCCO.png';
import FabrizioCMO from './assets/FabrizioCMO.png';
import FacuDev from './assets/FacuDev.png';
import FedeCEO from './assets/FedeCEO.png';
import FedeDev from './assets/FedeDev.png';
import FlorDesign from './assets/FlorDesign.png';
import TomasCFO from './assets/TomasCFO.png';
import Circulo from './assets/Circulo.png';

const OurTeamSection = () => {
	return (
		<section className={styles.Container}>
			<div className={styles.Subcontainer}>
				<div className={styles.Content}>
					<div className={styles.TribePop}>
						Our Team
					</div>
					<div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={EliasCCO}/>
                            <p className={styles.Text}>
                                <b>Elias</b> <br/>CCO
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={FedeCEO}/>
                            <p className={styles.Text}>
                                <b>Fede</b> <br/>CEO
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={FabrizioCMO}/>
                            <p className={styles.Text}>
                                <b>Fabrizio</b> <br/>CMO
                            </p>
                        </div>

                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={AgusDesign}/>
                            <p className={styles.Text}>
                                <b>Agus</b> <br/>Design Team Lead
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={TomasCFO}/>
                            <p className={styles.Text}>
                                <b>Tomas</b> <br/>CFO
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={AleManager}/>
                            <p className={styles.Text}>
                                <b>Astro</b> <br/>Project Manager
                            </p>
                        </div>

                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={DiegoUX}/>
                            <p className={styles.Text}>
                                <b>Diego</b> <br/>UX/IX Specialist
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={AgusCTO}/>
                            <p className={styles.Text}>
                                <b>Penguin</b> <br/>CTO
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={FlorDesign}/>
                            <p className={styles.Text}>
                                <b>Flor</b> <br/>Graphic Design
                            </p>
                        </div>

                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={FedeDev}/>
                            <p className={styles.Text}>
                                <b>Fede</b> <br/>Front-end Developer
                            </p>
                        </div>
                        <div className={styles.MemberContainer}>
                            <img className={styles.Circulo} src={Circulo}/>
                            <img className={styles.Picture} src={FacuDev}/>
                            <p className={styles.Text}>
                                <b>Facu</b> <br/>Full Stack Developer
                            </p>
                        </div>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default OurTeamSection;
