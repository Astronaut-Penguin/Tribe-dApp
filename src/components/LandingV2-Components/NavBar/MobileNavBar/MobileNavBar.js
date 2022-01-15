//- React Imports
import React, { useEffect, useState, createRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import clamp from 'lodash.clamp';

//- Styles Imports
import styles from './MobileNavBar.module.css';

//- Flicking Imports
import Flicking from '@egjs/react-flicking';

// //- Owl Carousel Imports
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//- React Router Hash Link Imports
import { HashLink } from 'react-router-hash-link';

const MobileNavBar = ({ sections }) => {
	////////////
	// STATES //
	////////////
	//- TEST STATES
	const [s, setS] = useState(0);

	useEffect(() => {
		sections.map((value, i) => {
			if (s == i) {
				window.location = '#/#' + value;
				document
					.getElementById(value)
					.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	}, [s]);

	//- Section Number
	// const index = useRef(0);

	//- Screen Width
	// const width = window.innerWidth;

	// //- Items Width
	// const [lw, setLw] = useState([]);
	// const [mid, setMid] = useState([]);
	// const [move, setMove] = useState(0);

	// const options = {
	// 	center: true,
	// 	margin: 10,
	// 	autoWidth: true,

	// 	URLhashListener: true,
	// 	startPosition: 'URLHash',
	// };

	//////////
	// DRAG //
	//////////

	// const [{ x, scale, left }, api] = useSpring(() => ({
	// 	x: move,
	// 	left: width / 2 - 20 - 122,
	// 	scale: 1,
	// }));

	// const bind = useDrag(({ active, movement: [x], cancel }) => {
	// 	setMove(x);
	// 	console.log(x);

	// 	api.start({
	// 		x: move,
	// 		scale: active ? 1.1 : 1,
	// 		left: width / 2 - 25 - lw[s],
	// 	});
	// });

	// const [props, api] = useSprings(sections.length, (i) => ({
	// 	x: 66 / 2 + width / 4,
	// 	scale: 1,
	// }));

	// const bind = useDrag(
	// 	({ active, movement: [mx], direction: [xDir], cancel }) => {
	// 		if (active && Math.abs(mx) > width / 2) {
	// 			index.current = clamp(
	// 				index.current + (xDir > 0 ? -1 : 1),
	// 				0,
	// 				sections.length - 1,
	// 			);
	// 			cancel();
	// 		}
	// 		api.start((i) => {
	// 			const x =
	// 				(i - index.current) * (lw / 2 + width / 4) +
	// 				(active ? mx : lw / 2 + width / 4);
	// 			const scale = active ? 1.1 : 1;
	// 			return { x, scale };
	// 		});
	// 	},
	// );

	////////////
	// RENDER //
	////////////

	return (
		<nav className={styles.Container}>
			<Flicking
				className={`${styles.NavContainer}`}
				onChanged={(e) => {
					setS(e.index);
				}}
			>
				{sections.map((value, i) => (
					<button
						className={`${styles.Button} ${
							s == i ? styles.Selected : styles.NotSelected
						}`}
						key={i}
						onClick={() => {
							setS(i);
						}}
					>
						<HashLink
							to={'/#' + value}
							data-hash={value}
							className={styles.Link}
						>
							{value}
						</HashLink>
					</button>
				))}
			</Flicking>
			{/* <OwlCarousel {...options} className={`${styles.NavContainer}`}>
				{sections.map((value, i) => (
					<button
					className={styles.Button}
						key={i}
						data-hash={'Nav' + i}
						onClick={() => {
							setS(i);
							console.log('Faso ' + i);
						}}
					>
						<HashLink
							to={'/#Nav' + i}
							className={`${s == i ? styles.sections : styles.Notsections}`}
						>
							{value}
						</HashLink>
					</button>
				))}
			</OwlCarousel> */}
			{/* <animated.ul
				className={`${styles.NavContainer}`}
				style={{ x, left }}
				{...bind()}
			>
				{sections.map((value, i) => (
					<animated.li id={'Nav' + i} key={i}>
						<a
							href="#"
							className={`${s == i ? styles.sections : styles.Notsections}`}
							style={{ scale }}
							onClick={() => {
								setS(i);
							}}
						>
							{value}
						</a>
					</animated.li>
				))}
			</animated.ul> */}
			{/* <animated.ul className={`${styles.NavContainer}`}>
				{props.map(({ x, scale }, i) => (
					<animated.li id="Nav0" {...bind()} key={i} style={{ x, scale }}>
						<a
							href="#"
							className={`${s == i ? styles.sections : styles.Notsections}`}
							onClick={() => {
								setS(i);
							}}
						>
							{sections[i]}
						</a>
					</animated.li>
				))}
			</animated.ul> */}
		</nav>
	);
};

export default MobileNavBar;
