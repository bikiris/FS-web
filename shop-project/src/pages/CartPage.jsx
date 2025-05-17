import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../utils/CartProvider";
import ProductsData from "../data/ProductsData";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, getTotalCost } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  }

  console.log(cart);

  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col p-8 justify-center items-center">
        <p className='pt-20 text-2xl'>Cart</p>
        <p className="text-lg tracking-wide"> 
          <span className="text-gray-400">{cart.length} Items </span>
          | ${getTotalCost().toFixed(2)}
        </p>
      </div>
      
      <div className='flex flex-col max-w-7xl mx-auto pb-30'>
        {cart.map(({ productId, colorOption, quantity }) => (
          <div
            key={productId}
            className='flex gap-2 items-start justify-between p-8 border-t border-b border-gray-400'
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
            <p className='font-bold'> ${(ProductsData[productId - 1].price * quantity).toFixed(2)}</p>
          </div>
        ))}

        <div className="flex flex-col p-4 gap-1 tracking-wide">
          <h1 className="text-3xl">Summary</h1>
          <div className='flex justify-between'> 
            <p>Subtotal </p>
            <p>${getTotalCost().toFixed(2)}</p>
          </div>
          
          <div className='flex justify-between'>
            <p>Estimated Shipping & Handlings </p>
            <p>FREE</p>
          </div>

          <div className='flex justify-between'>
            <p>Estimated Tax</p>
            <p>--</p>
          </div>

          <div className='flex justify-between pt-2 font-bold'>
            <p>Total </p>
            <p>${getTotalCost().toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className='w-full fixed bottom-0
          flex justify-stretch p-4 bg-[#333] '>
        <button className="w-full !rounded-4xl " onClick={goToCheckout}>Go to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
