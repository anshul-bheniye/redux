import { useTitle } from "../hook/useTitle"

import { Checkout } from "../components";
import { useSelector } from "react-redux";
 
export const CartItems = () => {
  useTitle("Cart");

  const dogs = useSelector(state => state.cartState.cartList)
  const total = useSelector(state => state.cartState.total)

  return (
 <div>
     <div className="cartitems">
      <p  className="cart-title"> In Cart: {dogs.length} items / Total: $ {total} </p>
      <div>
        {dogs.map((dog)=> (<Checkout key={dog.id} dog={dog} />))}
      </div>
    </div>
 </div>
  )
}
