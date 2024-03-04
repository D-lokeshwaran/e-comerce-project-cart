import './App.css';
import Product from './components/Product/Product'
import { products } from './components/Product/products.js'
import Header from './components/Header.js'
import ProductList from './components/ProductList.js'
import CartContextProvider from './contexts/cart.js'
import { Provider } from 'react-redux'
import store from './store'
import { useState } from 'react';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('electronics');

    return (
        <div className="App">
            <Provider store={store}>
            {/*<CartContextProvider>*/}
                <Header
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <ProductList selectedCategory={selectedCategory} />
            {/*</CartContextProvider>*/}
            </Provider>
        </div>
    );

}

export default App;
