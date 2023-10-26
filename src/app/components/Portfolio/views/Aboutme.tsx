import React from 'react';
import '../css/aboutMe.css';
import { motion } from 'framer-motion';
import AnimatedText from '../../animated/AnimatedText';
import { ISection } from '../../../interfaces/Portfolio.interface';
import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { downloadCV } from '../../../api/firebase';
export default function Aboutme(props?: ISection) {
	return (
		<section>
			<div className='aboutMe'>
				{props ? (
					<motion.div
						style={{
							width: 200,
							height: 120,
							margin: 'auto',
							overflowY: 'hidden',
						}}
						initial={{ scale: 0 }}
						whileInView={{ rotate: 360, scale: 1 }}
						nonce='#fff'
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 40,
						}}
					>
						<motion.img
							src={props.img}
							style={{ width: 100, borderRadius: 50 }}
						/>
					</motion.div>
				) : (
					<div></div>
				)}
				<motion.div
          className='button'
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				>
					<Button
						rightSection={<IconDownload size={14} />}
						variant='light'
						color='withe'
						onClick={downloadCV}
					>
						Curriculum
					</Button>
				</motion.div>
				<motion.h1 className='text' style={{ textAlign: 'center' }}>
					Hi,
				</motion.h1>
				<motion.h1
					className='hello'
					whileHover={{ rotate: [0, 15, 0, 15, 0] }}
					whileInView={{ rotate: [0, 15, 0, 15, 0] }}
					transition={{ type: 'spring', duration: 3 }}
				>
					👋
				</motion.h1>
				<motion.h1 className='text' style={{ textAlign: 'center' }}>
					{"I'm Carlos Rubio Viloria"}
				</motion.h1>
				<motion.div
					className='description'
					initial={{ top: -100 }}
					whileInView={{ top: 100 }}
					transition={{ type: 'spring', duration: 2 }}
				>
					<AnimatedText
						theme={props?.theme}
						line=" I'm a Full Stack web developer with skills in Java, JavaScript, TypeScript, React, Node,
            Laravel, Nest, databases, and sales management systems. I excel at working
            effectively in collaborative teams and staying updated with the latest industry trends.
            I'm committed to problem-solving and creating effective solutions for our clients."
					/>
				</motion.div>
			</div>
		</section>
	);
}
