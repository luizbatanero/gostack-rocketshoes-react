import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, Loading } from './styles';

class Home extends Component {
  state = {
    products: [],
    loading: true,
    didMount: false,
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setTimeout(() => {
      this.setState({ products: data, loading: false });

      setTimeout(() => {
        this.setState({ didMount: true });
      }, 0);
    }, 1000);
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading, didMount } = this.state;
    const { amount, addingIds } = this.props;

    if (loading) {
      return (
        <Loading>
          <Loader type="MutatingDot" color="#FFFFFF" />
        </Loading>
      );
    }
    return (
      <ProductList didMount={didMount ? 1 : 0}>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
              disabled={addingIds.includes(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[product.id] || 0}
                {addingIds.includes(product.id) && (
                  <div className="loading">
                    <Loader type="Oval" color="#FFF" width={18} height={18} />
                  </div>
                )}
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.products.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
  addingIds: state.cart.addingIds,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
