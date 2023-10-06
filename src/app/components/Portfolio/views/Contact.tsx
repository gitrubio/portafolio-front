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
import bg from '../assets/bg.svg';
import classes from '../css/ConctactMe.module.css';
import { ISection } from '../../../interfaces/Portfolio.interface';
import { THEME } from '../../../constants/constants';

export default function Contact({theme} : ISection) {
	return (
		<section>
      <Paper shadow='md' radius='lg'>
			<div className={classes.wrapper} style={{ backgroundColor : theme === THEME.LIGHT ? 'white' : '', color : theme === THEME.LIGHT ? 'black' : 'white' }}>
				<div
					className={classes.contacts}
					style={{ backgroundImage: `url(${bg})` }}
				>
					<Text fz='lg' fw={700} className={classes.title} c='#fff'>
						Contact information
					</Text>

					<ContactIconsList />
				</div>

				<form
          
					className={classes.form}
					onSubmit={(event) => event.preventDefault()}
				>
					<Text fz='lg' fw={700} className={classes.title}>
						Get in touch
					</Text>

					<div className={classes.fields}>
						<SimpleGrid cols={{ base: 1, sm: 2 }}>
							<TextInput label='Your name' placeholder='Your name' />
							<TextInput
								label='Your email'
								placeholder='hello@mantine.dev'
								required
							/>
						</SimpleGrid>

						<TextInput mt='md' label='Subject' placeholder='Subject' required />

						<Textarea
							mt='md'
							label='Your message'
							placeholder='Please include all relevant information'
							minRows={3}
              
						/>

						<Group justify='flex-end' mt='md'>
							<Button type='submit' className={classes.control}>
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
