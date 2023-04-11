import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            products: [],
            filteredProducts: [],
        };
    }
    componentDidMount() {
        // Fetch products data from API
        fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then((products) => this.setState({ products }))
            .catch((error) => console.error(error));
    }
    handleInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query });
        // Filter products based on the search query
        const filteredProducts = this.state.products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()),
        );
        this.setState({ filteredProducts });
    };
    render() {
        const { query, filteredProducts } = this.state;
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <div className="input-group">
                            <input
                                id="search-focus"
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={query}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </form>
                </nav>
                <ul>
                    {filteredProducts.map((product) => (
                        <Link to={`/product/${product.id}/item`}>
                            <li key={product.id}>
                                {product.name} - ${product.price}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductSearch;
