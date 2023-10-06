import ServicesGeneral from './services';
import Axios from 'axios';

export const ApiServices = new ServicesGeneral(
	Axios.create({
		headers: {
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
		},
	})
);
