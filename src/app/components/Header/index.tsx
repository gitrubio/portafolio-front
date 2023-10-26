import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { IHeader } from '../../interfaces/Heardes.interfaces';
import useSound from 'use-sound';
import sound from '../../../sounds/light-switch-81967.mp3';
import './css/Header.css';

export default function Header({ changeTheme }: IHeader) {
	const [isOn, setIsOn] = useState(false);
	const [play] = useSound(sound);

	const toggleSwitch = () => {
		play();
		setIsOn(!isOn);
		changeTheme();
	};

	return (
		<div className={`header`} style={{ color: 'white' }}>
			<motion.div
				className='btn-login'
				whileHover={{ scale: [null, 1.5, 1.4] }}
				transition={{ duration: 0.3 }}
			>
				<img
					alt='logo'
					src={
						'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/logoR.png?alt=media&token=ea2115f8-4b9a-4f35-886e-be549f33b444'
					}
					style={{ maxWidth: '50px', maxHeight: '50px' }}
				/>
			</motion.div>
			<div className='links'>
				<motion.a
					key={'linkedin'}
					aria-label='linkedin'
					whileHover={{ scale: [null, 1.5, 1.4] }}
					transition={{ duration: 0.3 }}
					href='https://www.linkedin.com/in/carlos-rubio-viloria-27b328237/'
					target='_blank'
					style={{ color: 'white' }}
				>
					<AiOutlineLinkedin size={20} />
				</motion.a>
				<motion.a
					key={'github'}
					whileHover={{ scale: [null, 1.5, 1.4] }}
					transition={{ duration: 0.3 }}
					href='https://github.com/gitrubio'
					aria-label='github'
					target='_blank'
					style={{ color: 'white' }}
				>
					<AiFillGithub size={20} />
				</motion.a>
			</div>
			<motion.div
				className='theme-color'
				whileHover={{ scale: [null, 1.5, 1.4] }}
				transition={{ duration: 0.3 }}
			>
				{!isOn ? (
					<HiSun className='theme-icon' size={25} onClick={toggleSwitch} />
				) : (
					<HiMoon className='theme-icon' size={25} onClick={toggleSwitch} />
				)}
			</motion.div>
    
		</div>
	);
}
