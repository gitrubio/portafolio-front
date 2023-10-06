import { AxiosInstance } from 'axios';

export default class ServicesGeneral {
	constructor(private readonly Api: AxiosInstance) {}

	async sendEmail() {
		try {
			const {data} = await this.Api.post('https://email-service-kqug.onrender.com/api/email', {
				titleFrom: 'PROBANDO SERVICIO DESDE LA WEB XD 👻',
				userTo: 'carloviloria0@gmail.com',
				subject: 'SERVICIO EN LINEA',
				text: 'Hello world?',
				html: '<h1>El mas culon del team</h1>',
			});
            return data !== null
		} catch (error) {
            console.log("error",error);
            
            return false
        }
	}
}
