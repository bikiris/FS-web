const ProductItem = ({imgLink, productName, price}) => {
  return (
    <div className="flex flex-col p-2">
      <img src= {imgLink} 
        alt='product image'/>
      <h1 className="font-bold text-lg">{productName}</h1>
      <p>${price}</p>
    </div>
  )
}

export default ProductItem;