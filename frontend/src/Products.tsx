import { useLoaderData } from "react-router-dom";
import Card from "./components/card";
import { useState } from "react";
interface ProductsData {
	description: string;
	id: number;
	is_recommended: number;
	is_sold: number;
	name: string;
	number_of_likes: number;
	owner_address: string;
	owner_email: string;
	owner_name: string;
	payment_method: any;
	picture: string;
	price: string;
}

export async function loader() {
	const fetchUlr = await fetch("http://127.0.0.1:5000/products");
	const products = await fetchUlr.json();
	return products;
}

function Products() {
	const { products } = useLoaderData() as { products: ProductsData[] };
	const [likes, setLikes] = useState<Record<any, number>>({});

	const handleLikes = (productId: number) => {
		const currentLikes = likes[productId] || 0;
		const newLikes = currentLikes + (likes[productId] ? -1 : 1);
		setLikes((prevLikes) => ({ ...prevLikes, [productId]: newLikes }));
	};

	return (
		<section>
			<header className="bg-cover bg-center bg-no-repeat bg-[url('/public/salling.jpg')] bg-blend-multiply h-80 w-full text-center">
				<h1 className="text-6xl w-2/6 mx-auto pt-4 font-normal">
					My E-Commerce Store
				</h1>
				<p className="text-lg font-normal mt-6 lg:text-xl w-1/4 mx-auto">
					We love promoting people’s businesses and helping them sell their
					products.
				</p>
			</header>
			<ul className="flex gap-4 justify-between flex-wrap p-4 mt-20">
				{products.map((product) => (
					<Card
						key={product.id}
						title={product.name}
						imgSource={product.picture}
						price={product.price}
						description={product.description}
						likes={likes[product.id] || 0}
						handleLike={() => handleLikes(product.id)}
					/>
				))}
			</ul>
		</section>
	);
}

export default Products;
