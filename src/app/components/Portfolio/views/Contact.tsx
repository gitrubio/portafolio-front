import React from 'react';
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



export default function Contact({ theme }: ISection) {
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

	const emailTo = async (values: DataE) => {
		const response = await ApiServices.sendEmail();
		console.log(
			response,values
		);
		
	};

	return (
		<section>
			<Paper shadow='md' radius='lg'>
				<div className={classes.wrapper} style={{ color: 'white' }}>
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

							<Group justify='flex-end' mt='md'>
								<Button
									type='submit'
									className={classes.control}
									color={theme === THEME.LIGHT ? 'orange' : 'violet'}
								>
									Send message
								</Button>
							</Group>
						</div>
					</form>
				</div>
			</Paper>
		</section>
	);
}
