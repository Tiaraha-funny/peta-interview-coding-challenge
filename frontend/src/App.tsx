import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="bg-gray-100">
			<header className="flex px-4 items-center justify-between bg-gray-200 text-gray-800">
				<h1>
          <img width={60} height={60} src="../logo.png" alt="Product logo" />
        </h1>
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
