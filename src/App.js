import "./App.css";
import './styles.css';
import React from "react";
import { Provider } from "react-redux";
import store from "./components/seminar6/store";
import AddTodo from "./components/seminar6/AddTodo";
import TodoList from "./components/seminar6/TodoList";
import ProductList from "./components/seminar6/ProductList";
import FavoritesList from "./components/seminar6/FavoritesList";
import AddProduct from "./components/seminar6/AddProduct";
import ProductLists from "./components/seminar6/ProductLists";

function App() {
	return (
		<div className="container">
			<h1 className="less">Три функциональных приложения на React с использованием Redux</h1><br></br>

			<Provider store={store}>
				<h1>Список дел</h1>
				<AddTodo />
				<TodoList />
				<br></br>
				<h1>Список товаров</h1>
				<ProductList />
				<h2>Избранные товары</h2>
				<FavoritesList />
				<br></br>
				<h1>Каталог продуктов</h1>
				<AddProduct />
				<ProductLists />
			</Provider>
		</div>
	);
}

export default App;
