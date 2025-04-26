import { useNavigate } from "react-router-dom";

import { motion } from 'motion/react';

const ProductItem = ({imgLink, productName, price}) => {

  const navigate = useNavigate();
  const openProductPage = () => {
    navigate('/products/1');
  }

  return (
    <motion.div className="flex flex-col p-2 hover:cursor-pointer" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
     
  
      onClick={openProductPage} >
      <img src= {imgLink} 
        alt='product image'/>
      <h1 className="font-bold text-lg">{productName}</h1>
      <p>${price}</p>
    </motion.div>
  )
}

export default ProductItem;