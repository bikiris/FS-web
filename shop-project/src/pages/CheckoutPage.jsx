import Navbar from "../components/Navbar";

import { CartContext } from "../utils/CartProvider";
import { useContext } from "react";
import ProductsData from "../data/ProductsData";

import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cart, getTotalCost, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    clearCart();
    window.alert("Checkout successful!");
    
  }

  return (
    <div>
      <Navbar />
      <div className='pt-20'>
        <div className='flex flex-col p-10'>
          <h1 className='text-gray-400'>Checkout</h1>
          <p className='text-3xl font-bold'>${getTotalCost().toFixed(2)}</p>

          <div className="pt-8">
            <p>Order Summary</p>
            <div className="flex flex-col pt-2 max-w-7xl mx-auto gap-4">
              {cart.map(({ productId, colorOption, quantity }) => (
                <div
                  key={productId}
                  className='flex gap-2 items-start justify-between'
                >
                  <div className='flex gap-4'>
                    <div className='flex flex-col gap-2 items-center'>
                      <img
                        src={ProductsData[productId - 1].imgLink}
                        width={70}
                      />
                    </div>
                    <div>
                      <p className='font-bold'>
                        {ProductsData[productId - 1].productName}
                      </p>
                      <p className='text-gray-400'>Color: {colorOption}</p>
                      <p className='text-gray-400'>Quantity: {quantity}</p>
                    </div>
                  </div>
                  <p className='font-bold'>
                    ${(ProductsData[productId - 1].price * quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className='flex justify-between items-center pt-4 border-t border-gray-400'>
                <p className='text-gray-400'>Total</p>
                <p className='font-bold'>${getTotalCost().toFixed(2)}</p>
              </div>
            </div>
          </div>

          <form className="pt-8 flex flex-col gap-2">
            <p>Shipping Information</p>
            <div>    
              <label for='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='example@abc.com'
                className='border border-gray-400 p-2 w-full rounded-md mt-2'
              />
            </div>
            <div className="flex flex-col">    
              <label>Shipping Address </label>
              <input
                id='fullname'
                type='text'
                placeholder='Full name'
                className="border border-gray-400 p-2 rounded-t-md text-gray-100 mt-2"
              />
              <input
                id='address'
                type='text'
                placeholder='Address'
                className="border border-gray-400 p-2 rounded-b-md"
              />
            </div>
          </form>

          <form className="pt-8 flex flex-col gap-2">
              <h1>Payment Information</h1>
              <div className="flex flex-col">
                <label>Card number</label>
                <input 
                  type='text'
                  placeholder='1234 5678 9012 3456'
                  id="card-number"
                  className="border border-gray-400 p-2 rounded-md"
                />
              </div>

              <div className="flex gap-4 overflow-hidden">
                <div className="flex flex-col flex-auto">
                  <label>Expiration date</label>
                  <input 
                    type='text'
                    placeholder='MM/YY'
                    id='expiration-date'
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col flex-auto">
                  <label>Security code</label>
                  <input 
                    type='text'
                    placeholder='123'
                    id="security-code"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                  </div>
              </div>
          </form>

          
          <button className="mt-8 !bg-blue-600" onClick={handleCheckout}>Pay</button>
          
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
