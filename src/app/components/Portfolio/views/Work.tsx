import React from 'react';
import { motion } from 'framer-motion';

import '../css/skills.css';
import { ISection } from '../../../interfaces/Portfolio.interface';
export default function Work(props: ISection) {
	return (
		<section className='work'>
			<motion.h2
				className='section-h2'
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				WORK EXPERIENCE
			</motion.h2>
			<motion.div className='wrapper'>
				<motion.div
					className='card'
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<motion.div className='poster'>
						<img
							src={
								'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/perfectbody.png?alt=media&token=71d4f658-0d11-4cfb-8930-5e200e665bb4'
							}
							alt='Perfect body medical center'
						/>
					</motion.div>
					<motion.div className='details'>
						<h1>Perfect body medical center</h1>
						<h2>junio. 2021- enero. 2022</h2>

						<motion.div className='tags'>
							<span className='tag'>PHP</span>
							<span className='tag'>LARAVEL</span>
							<span className='tag'>MySql</span>
						</motion.div>
						<p className='desc'>
							Manejo de base de datos con MySql WorkBench,Desarrollo y
							refactorización de vistas en Laravel.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					className='card'
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<motion.div className='poster'>
						<img
							src='https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/deviltech.jpg?alt=media&token=26850caf-8bfc-4805-8398-5d04f6200c93&_gl=1*fthiyt*_ga*MTAwNjM3NzgxMC4xNjk3NTk5Mzky*_ga_CW55HF8NVT*MTY5NzU5OTM5MS4xLjEuMTY5NzU5OTQ0MC4xMS4wLjA.'
							alt='Location Unknown'
						/>
					</motion.div>
					<motion.div className='details'>
						<h1>Devitech</h1>
						<h2>mayo. 2022- marzo 2023</h2>

						<motion.div className='tags'>
							<span className='tag'>TypeScript</span>
							<span className='tag'>Node</span>
							<span className='tag'>React</span>
						</motion.div>
						<p className='desc'>
							Manejo de base de datos con PostgreSql y MongoDB
						</p>
						<p className='desc'>
							Integracion de nuevos servicios tanto para la web como
							aplicaciones de escritorio en Node js
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					className='card'
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<motion.div className='poster'>
						<img
							src='https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/mocion.jpg?alt=media&token=d4b1cdec-41fc-45a7-9ec4-8d5163aa2ef7&_gl=1*1l0g3ek*_ga*MTAwNjM3NzgxMC4xNjk3NTk5Mzky*_ga_CW55HF8NVT*MTY5NzU5OTM5MS4xLjEuMTY5NzU5OTUxNC41My4wLjA.'
							alt='Location Unknown'
						/>
					</motion.div>
					<motion.div className='details'>
						<h1>Mocion S.A.S</h1>
						<h2>marzo 2023-octubre 2023</h2>

						<motion.div className='tags'>
							<span className='tag yellow'>React</span>
							<span className='tag'>Typescript</span>
							<span className='tag blue'>docker</span>
							<span className='tag blue'>Nest</span>
						</motion.div>
						<p className='desc'>
							Diseño e implementación de vistas con React, TypeScript y redux
						</p>
						<p className='desc'>Optimización de código y Diseño de flujos</p>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
