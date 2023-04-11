import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    handleDeleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete resource');
            }
        } catch (error) {
            console.error(error);
        }
    };
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.img}</td>
                <td>{product.title}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">
                        Sửa
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.handleDeleteClick(product.id)}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
