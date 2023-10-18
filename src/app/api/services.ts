import { AxiosInstance } from 'axios';
import { DataE } from '../interfaces/Portfolio.interface';

export default class ServicesGeneral {
	constructor(private readonly Api: AxiosInstance) {}

	async sendEmail(dataUser: DataE) {
		try {
			const { email, message,name,subject} = dataUser
			const {data} = await this.Api.post('https://email-service-kqug.onrender.com/api/email', {
				titleFrom: `Hola Carlos, soy ${name} y me interesa tu portafolio`,
				userTo: 'carloviloria0@gmail.com',
				userFrom: email,
				subject,
				text: message,
				html: `<h3>Mensaje enviado por ${name || email}</h3><h4> desde ${email}</h3>
				<p>${message}</p>`,
			});
            return data !== null
		} catch (error) {
            console.log("error",error);
            
            return false
        }
	}
}
