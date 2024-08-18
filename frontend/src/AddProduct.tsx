import { ActionFunctionArgs, Form, useActionData, useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export async function action({request} : ActionFunctionArgs) {
  let formData = await request.formData()
  const data = Object.fromEntries(formData.entries())
  console.log('data', data);
  return fetch("http://127.0.0.1:5000/products", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({...data, user_id: uuidv4()}),
})
}

export default function AddProduct() {
  const data = useActionData()
  const prodD = useLoaderData()
  console.log('prodD', prodD);
  console.log('data', data);
  return <section className="pb-10 max-w-screen-lg mx-auto">
    <header>
      <h1>Add a Products</h1>
    </header>
    <Form method="post" className="">
      <div className="border border-gray-300 rounded p-4">
        <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900">Product name</label>
        <input
          type="text"
          id="product_name"
          name="name"
          placeholder="Enter a product name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          required
        />
        <label htmlFor="product_description" className="block mb-2 text-sm font-medium text-gray-900">Product description</label>
        <input
          type="text"
          id="product_description"
          name="description"
          placeholder="Enter a product description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          required
        />
        <label htmlFor="product_picture" className="block mb-2 text-sm font-medium text-gray-900">Product picture</label>
        <input
          type="file"
          id="product_picture"
          name="picture"
          placeholder="Enter a product picture"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          
        />
        <label htmlFor="product_price" className="block mb-2 text-sm font-medium text-gray-900">Pruduct price</label>
        <input
          type="text"
          id="product_price"
          name="price"
          placeholder="Enter the product price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          required
        />
      </div>
      <div className="border border-gray-300 rounded p-4 mt-20">
        <label htmlFor="owner_name" className="block mb-2 text-sm font-medium text-gray-900">Owner name</label>
        <input
          type="text"
          id="owner_name"
          name="owner_name"
          placeholder="Enter your name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          
        />

        <label htmlFor="owner_address" className="block mb-2 text-sm font-medium text-gray-900">Owner address</label>
        <input
          type="text"
          id="owner_address"
          name="owner_address"
          placeholder="Enter your address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
          
        />

        <label htmlFor="owner_email" className="block mb-2 text-sm font-medium text-gray-900">Owner email</label>
        <input
          type="text"
          id="owner_email"
          name="owner_email"
          placeholder="Enter your email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          
        />

      </div>
      <div className="mt-10">
        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Cancel</button>
        <button type="submit" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Save</button>
      </div>
    </Form>

    <div>
      <h2>My poducts</h2>
      {}
    </div>
  </section>
}