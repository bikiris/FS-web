import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../utils/CartProvider";
import ProductsData from "../data/ProductsData";

const CartPage = () => {
  const { cart, removeFromCart, getTotalCost } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-2 p-8 justify-center items-center">
        <p className='pt-20 text-2xl'>Cart: {cart.length} items</p>
        <p>Total cost: ${getTotalCost()}</p>
        <button>Checkout</button>
      </div>
      
      <div className='flex flex-col gap-2 p-8 max-w-7xl mx-auto'>
        {cart.map(({ productId, colorOption, quantity }) => (
          <div
            key={productId}
            className='flex gap-2 items-start justify-between'
          >
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 items-center">
                <img src={ProductsData[productId - 1].imgLink} width={150} />
                <p>Quantity: {quantity}</p>
                <button onClick={() => removeFromCart(productId, colorOption)}>Remove Item</button>
              </div>
              <div>
                <p className="font-bold">{ProductsData[productId - 1].productName}</p>
                <p className="text-gray-400">Color: {colorOption}</p>
              </div>
            </div>   
            <p className='font-bold'> ${ProductsData[productId - 1].price * quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
