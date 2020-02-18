import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {
        cartItems.map( item =>
          <CartItem key={item.id} item={item}/>
        )
    }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({cart: { cartItems }}) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);
