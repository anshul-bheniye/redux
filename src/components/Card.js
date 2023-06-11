import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add, remove } from "../store/cartSlice";

 

export const Card = ({dog}) => {
  const [inCart, setInCart] = useState(false);
  const {pic, name, breed, price, id} = dog;
  const dispatch = useDispatch();
  const dogCart = useSelector(state=>state.cartState.cartList);
  
  useEffect(()=>{
    const findDogInCart = dogCart.find(item => item.id === id);
    findDogInCart ? setInCart(true) : setInCart(false)
  },[dogCart, id])
  return (
    <div  className="card">
      <div className="image-container" >
      <img src={pic} alt={name} />
      </div>
      <div>
        <p>I am {name}</p>
        <p>my breed {breed} </p>
      </div>
      <div className="card-cta">
        <p>Price $ {price}</p>
        
        {inCart 
        ?  <button className="remove" onClick={()=> dispatch(remove(dog))}>Remove from Cart</button> 
        : <button className="add" onClick={()=> dispatch(add(dog))}>Add to Cart</button>}
      </div>
    </div>
  )
}
