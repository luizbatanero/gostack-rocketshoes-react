import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/rocketshoes.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" width={350} />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#130042" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
