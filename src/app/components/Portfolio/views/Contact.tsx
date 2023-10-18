import React, { useState } from 'react';
import {
	Paper,
	Text,
	TextInput,
	Textarea,
	Button,
	Group,
	SimpleGrid,
} from '@mantine/core';
import { ContactIconsList } from '../components/ContactIcons';
import fondCont from '../assets/fontC.png';
import classes from '../css/ConctactMe.module.css';
import { DataE, ISection } from '../../../interfaces/Portfolio.interface';
import { THEME } from '../../../constants/constants';
import { useForm } from '@mantine/form';
import { ApiServices } from '../../../api/index';
import { motion } from 'framer-motion';
import { notifications } from '@mantine/notifications';
import { IconAlertTriangle, IconChecks } from '@tabler/icons-react';

export default function Contact({ theme }: ISection) {
	const [loading, setloading] = useState(false)
	const form = useForm({
		initialValues: {
			email: '',
			name: '',
			subject: '',
			message: '',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});
	const deslockButton = () => {
		setTimeout(() => {
			setloading(false);
		}, 3000);
	}
	const emailTo = async (values: DataE) => {
		setloading(true)
		const response = await ApiServices.sendEmail(values);
		if (response) {
			form.reset();
			notifications.show({
				icon :  <IconChecks/>,
				color: 'teal',
				title: 'Correo enviado correctamente',
				message: 'Gracias por contactarme, te respondere lo mas pronto posible',
			  })
			  deslockButton()
		}else{
			notifications.show({
				icon: <IconAlertTriangle/>,
				color: 'red',
				title: 'Error al enviar el correo',
				message: 'Por favor intente mas tarde',
				
			  })
			  deslockButton()
		}
	};

	return (
		<section>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.3,
					ease: [0, 0.71, 0.2, 1.01],
					scale: {
						type: 'spring',
						damping: 5,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}
			>
				<Paper shadow='md' radius='lg'>
					<div className={classes.wrapper} style={{ color: 'black' }}>
						<div
							className={classes.contacts}
							style={{
								backgroundImage: `url(${fondCont})`,
								backgroundPositionY: theme === THEME.LIGHT ? 'top' : 'bottom',
							}}
						>
							<Text fz='lg' fw={700} className={classes.title} c='#fff'>
								Contact information
							</Text>

							<ContactIconsList />
						</div>

						<form
							className={classes.form}
							onSubmit={form.onSubmit((values) => emailTo(values))}
						>
							<Text fz='lg' fw={700} className={classes.title}>
								Get in touch
							</Text>

							<div className={classes.fields}>
								<SimpleGrid cols={{ base: 1, sm: 2 }}>
									<TextInput
										label='Your name'
										placeholder='Your name'
										{...form.getInputProps('name')}
									/>
									<TextInput
										label='Your email'
										placeholder='jorge@gmail.co'
										required
										{...form.getInputProps('email')}
									/>
								</SimpleGrid>

								<TextInput
									mt='md'
									label='Subject'
									placeholder='Subject'
									required
									{...form.getInputProps('subject')}
								/>

								<Textarea
									mt='md'
									label='Your message'
									placeholder='Please include all relevant information'
									minRows={3}
									{...form.getInputProps('message')}
								/>

								<Group justify='flex-end' mt='md' style={{ height: 60, marginRight: 10}}>
									<motion.div
										style={{ width: 150 }}
										whileHover={ loading ? {scale: 1} :{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 17 }}
									>
										<Button
											disabled={loading}
											type='submit'
											className={classes.control}
											color={theme === THEME.LIGHT ? 'orange' : 'violet'}
										>
											Send message
										</Button>
									</motion.div>
								</Group>
							</div>
						</form>
					</div>
				</Paper>
			</motion.div>
		</section>
	);
}
