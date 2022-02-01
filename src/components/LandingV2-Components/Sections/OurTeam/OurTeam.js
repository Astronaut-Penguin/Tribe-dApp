//- Import React
import React from 'react';

//- Import Styles
import styles from './OurTeam.module.css';

//- Team Card Import
import { CardTeam } from '../../..';

const OurTeamSection = ({ id }) => {
	return (
		<section className={styles.Container} id={id}>
			<div className={styles.Subcontainer}>
				<div className={styles.Content}>
					<div className={styles.Team}>Our Team</div>
					<div className={styles.MobileContent}>
						<div className={styles.TeamContainer}>
							<CardTeam
								character={1}
								name={'Penguin'}
								rol={'CTO'}
								style={{ position: 'absolute', left: '0px', top: '90px' }}
							/>
							<CardTeam
								character={8}
								name={'Fede'}
								rol={'CEO'}
								rol2={'Co-Founder'}
							/>
							<CardTeam 
								character={6} 
								name={'Fabrizio'} 
								rol={'CMO'} 
								rol2={'Co-Founder'}
							/>
							<CardTeam 
								character={11} 
								name={'Tomas'} 
								rol={'CFO'} 
								style={{ position: 'absolute', right: '0px', top: '90px' }}
							/>
						</div>
						<div className={styles.TeamContainer}>
							<CardTeam
								character={5}
								name={'Elias'}
								rol={'CCO'}
								style={{ top: '20px' }}
							/>
							<CardTeam
								character={3}
								name={'Astro'}
								rol={'Project Manager'}
								style={{ position: 'absolute', right: '0px', top: '80px' }}
							/>
							<CardTeam 
								character={2} 
								name={'Agus'} 
								rol={'Design Team Lead'}
								style={{ position: 'absolute', left: '0px', top: '80px' }}
							/>
						</div>
						<div className={styles.TeamContainer}>
							<CardTeam
								character={4}
								name={'Diego'}
								rol={'UX/IX Specialist'}
								style={{ position: 'absolute', left: '0px', top: '80px' }}
							/>
							<CardTeam
								character={7}
								name={'Facu'}
								rol={'Full Stack Developer'}
								style={{ top: '25px' }}
							/>
							<CardTeam
								character={10}
								name={'Flor'}
								rol={'Graphic Design'}
								style={{ position: 'absolute', right: '0px', top: '80px' }}
							/>
						</div>
						<div style={{ marginTop: '40px' }}>
							<CardTeam
								character={9}
								name={'Fede'}
								rol={'Front-end Developer'}
							/>
						</div>
					</div>

					<div className={styles.PcContent}>
						<div className={styles.TeamContainer}>
							<CardTeam
								character={5}
								name={'Elias'}
								rol={'CCO'}
								style={{ position: 'absolute', left: '0px', top: '170px' }}
							/>
							<CardTeam
								character={1}
								name={'Penguin'}
								rol={'CTO'}
								style={{ position: 'absolute', left: '125px', top: '60px' }}
							/>
							<CardTeam
								character={8}
								name={'Fede'}
								rol={'CEO'}
								rol2={'Co-Founder'}
							/>
							<CardTeam
								character={6}
								name={'Fabrizio'}
								rol={'CMO'}
								rol2={'Co-Founder'}
							/>
							<CardTeam
								character={11}
								name={'Tomas'}
								rol={'CFO'}
								style={{ position: 'absolute', right: '125px', top: '60px' }}
							/>
							<CardTeam
								character={3}
								name={'Astro'}
								rol={'Project Manager'}
								style={{ position: 'absolute', right: '0px', top: '170px' }}
							/>
						</div>
						<div
							className={styles.TeamContainer}
							style={{ margin: '50px 0px 50px 0px' }}
						>
							<CardTeam
								character={4}
								name={'Diego'}
								rol={'UX/IX Specialist'}
								style={{ margin: '0px 25px 0px 0px' }}
							/>
							<CardTeam
								character={2}
								name={'Agus'}
								rol={'Design Team Lead'}
								style={{ margin: '0px 0px 0px 25px' }}
							/>
							<CardTeam
								character={7}
								name={'Facu'}
								rol={'Full Stack Developer'}
								style={{ position: 'absolute', right: '80px', top: '100px' }}
							/>
							<CardTeam
								character={10}
								name={'Flor'}
								rol={'Graphic Design'}
								style={{ position: 'absolute', left: '80px', top: '100px' }}
							/>
						</div>
						<div className={styles.TeamContainer}>
							<CardTeam
								character={9}
								name={'Fede'}
								rol={'Front-end Developer'}
								style={{ margin: '0px 0px 0px 0px' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurTeamSection;
