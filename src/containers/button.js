import React, { Component } from 'react';

class Bton extends Component {
    render() {
        var { product } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <button type="button" class="btn btn-primary" onClick={() => this.onAddToCart(product)}>
                Buy
            </button>
        );
    }
    onAddToCart = (product) => {
        alert('Bạn có chắc chắn thêm vào giỏ hàng ');
        this.props.onAddToCart(product);
    };
}

export default Bton;
