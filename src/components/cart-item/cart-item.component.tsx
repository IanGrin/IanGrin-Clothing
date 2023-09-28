import { FC, memo } from "react";

import { CartItemContainer, ItemDetail } from "./cart-item.styles";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <span>{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
});

export default CartItem;
