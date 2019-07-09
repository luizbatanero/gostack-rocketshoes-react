import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/rocketshoes.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" width={350} />
      </Link>

      <Cart to="/cart">
        <strong>My cart</strong>
        <div>
          <MdShoppingCart size={36} color="#130042" />
          <span>{cartSize}</span>
        </div>
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
