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
  const [searchText, setSearchText] = useState('')

  const handleLikes = (productId: number) => {
    const currentLikes = likes[productId] || 0;
    const newLikes = currentLikes + (likes[productId] ? -1 : 1);
    setLikes((prevLikes) => ({ ...prevLikes, [productId]: newLikes }));
  };

  const handleDelete = (productId: number) => {

  }
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
      <div className="pl-6 my-10">
      <label htmlFor="search_product" className="block mb-2 text-sm font-medium text-gray-900">Search products</label>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        id="search_product"
        placeholder="Search ..."
        className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block p-2.5"
      />
      </div>
      <ul className="grid grid-cols-4 gap-4 pb-10 pl-6">
        {products?.filter(product => product.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map((product) => (
          <Card
            key={product.id}
            title={product.name}
            imgSource={product.picture}
            price={product.price}
            description={product.description}
            likes={likes[product.id] || 0}
            handleLike={() => handleLikes(product.id)}
            handleDelete={() => handleDelete(product.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Products;
