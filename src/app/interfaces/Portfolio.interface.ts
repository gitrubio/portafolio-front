
export interface IPortfolio {
    theme : string;
}

export interface ISection extends IPortfolio  {
    img?: string
}

export interface DataE {
	message: string;
	name: string;
	email: string;
	subject: string;
}