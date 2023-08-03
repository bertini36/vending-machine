// This is a TypeScript interface to define which props the component should receive
interface ProductProps {
	title: string;
	price: number;
}

export const Product = ({ title, price }: ProductProps) => {
	return (
		<div>
			<span>{title}</span>
			<span>{price}€</span>
			<a href="#">Buy</a>
		</div>
	)
}
