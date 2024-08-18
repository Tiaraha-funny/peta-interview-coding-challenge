import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products, { loader as productsLoader } from "./Products";
import AddProduct, { action } from "./AddProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>Page not found</div>,
		children: [
			{
				loader: productsLoader,
				index: true,
				element: <Products />,
			},
		],
	},
  {
    path: "add",
    action: action,
    loader: productsLoader,
    element: <AddProduct/>,
    errorElement: <div>Page not found</div>,
  }
]);
const root = document.getElementById("root");
if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
} else {
	throw new Error("No root element found");
}
