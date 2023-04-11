import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest, actAddToCart } from '../actions/index';
import { connect } from 'react-redux';
import '../css/detail.css';
class Detailproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
            img: '',
            txttile: '',
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status,
                img: itemEditing.img,
                txttile: itemEditing.title,
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    };
    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus, img } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus,
            img: img,
            title: txttile,
        };
        // if (id) {
        //     this.props.actAddToCart(product);
        // } else {
        //     this.props.actAddToCart(product);
        // }
    };
    render() {
        var { id, txtName, txtPrice, chkbStatus, img, txttile } = this.state;
        return (
            <div className="details" key={id}>
                <img src={img} alt="" />
                <div className="box">
                    <div className="row">
                        <h1>{txtName}</h1>
                        <p>${txtPrice}</p>
                    </div>
                    <p>{chkbStatus}</p>
                    <h4>{txttile}</h4>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing,
        products: state.products,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
        // onAddToCart: (product) => {
        //     dispatch(actAddToCart(product, 1));
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailproduct);
