import ProductCard from 'ProductCard.jsx'

const Cart = (props) => {
 
let total = 0
for (let i = 0; i < total.length; i++) {
  return total += i
}
return (
  <>
    <h2>(props.selecedPlant)</h2>
    <ProductCard selectedProduct={props.selectedProduct} />
  </>
)
}

export default Cart