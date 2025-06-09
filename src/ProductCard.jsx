const ProductCard = (props) => {
  return (
    <section> 
      <h2>{props.productName}</h2>

      <button onClick={() => {
        props.setSelectedProduct(props.productName)}}
      >Add to Cart</button>
    </section>
  )
}

export default ProductCard