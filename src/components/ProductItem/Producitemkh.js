import React, { Component } from 'react';
import * as Message from '../../constants/Message';
import { Link } from 'react-router-dom';
import '../../css/product.css';
class Productitemkh extends Component {
    render() {
        var { product } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                {' '}
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <Link to={`/product/${product.id}/item`}>
                            <img src={product.img} className="img-fluid" alt={''} />
                            <a>
                                <div className="mask waves-light waves-effect waves-light"></div>
                            </a>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <h2>{product.name}</h2>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>{this.showRatings(product.price)}</li>
                        </ul>
                        <div className="card-footer">
                            <span className={`label label-${statusClass}`}>{statusName}</span>
                            <p className="left">{product.price}$</p>
                            <button type="button" class="btn btn-primary" onClick={() => this.onAddToCart(product)}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        alert('Bạn có chắc chắn thêm vào giỏ hàng ');
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    };
    showRatings(price) {
        var result = [];
        for (var i = 1; i <= price; i++) {
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var j = 1; j <= 5 - price; j++) {
            result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return result;
    }
}

export default Productitemkh;
