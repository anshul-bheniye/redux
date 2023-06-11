import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";


export const Checkout = ({dog}) => {
    const {pic, name , price} = dog;
    const dispatch = useDispatch();
  return (
    <div >
        <div  className="card card-checkout">
            <div className="checkout-image" >
                <img src={pic} alt={name} />
            </div>
            <div>
            <p>I am  {name}</p>
            </div>

            <p>Price $ {price} </p>
            <button className="remove" onClick={()=>dispatch(remove(dog))}>Remove</button>
        </div>
    </div>
  )
}
