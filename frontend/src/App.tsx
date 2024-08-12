import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			<header className="flex justify-between p-4 bg-gray-200 text-gray-800">
				<h1>Products</h1>
				<nav>
					<ul className="flex gap-4">
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/add">Add Products</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</div>
	);
}

export default App;
