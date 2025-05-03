import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../utils/CartProvider";
import ProductsData from "../data/ProductsData";

const CartPage = () => {

  const { cart } = useContext(CartContext);

  console.log(cart)

  return(
    <div>
      <Navbar />

      <p className='pt-20'>Cart</p>
      <div className='flex flex-col gap-2 p-8'>
        {cart.map((productId) =>
          <>
            <p>{ProductsData[productId].productName}</p>
            <img src={ProductsData[productId].imgLink} width={200} />
          </>
        )}
      </div>
     
    </div>
  )
}

export default CartPage;