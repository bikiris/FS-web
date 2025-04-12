import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

import ProductsData from "../data/ProductsData";

const ProductPage = () => {
  return (
    <>
      <Navbar /> 
      <p className="pt-20 text-2xl pl-8">Products</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-8">
        {ProductsData.map((product, index) => {
          return (
            <ProductItem key={index} 
                imgLink={product.imgLink} 
                productName={product.productName} 
                price={product.price} />
          )
        })}
      </div>
    </>
  )
}
export default ProductPage;