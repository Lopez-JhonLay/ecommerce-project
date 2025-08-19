import { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

import { Routes, Route } from "react-router";

import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";

function App() {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		axios.get("/api/cart-items").then((response) => setCart(response.data));
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage cart={cart} />}
			/>
			<Route
				path="/checkout"
				element={<CheckoutPage cart={cart} />}
			/>
			<Route
				path="/orders"
				element={<OrdersPage />}
			/>
			<Route
				path="/tracking"
				element={<TrackingPage />}
			/>
			<Route
				path="*"
				element={<NotFoundPage />}
			/>
		</Routes>
	);
}

export default App;
