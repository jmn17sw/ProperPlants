import Gallery from 'Gallery.jsx'
import Cart from 'Cart.jsx'
import ProductCard from 'ProductCard.jsx'
import {useState} from 'react'


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(``)
  return (
  <>
    <h1>Welcome to Proper Plants</h1>
    <ol>
    {
      Gallery.map((individualProduct) => {
        return <ProductCard productName={individualProduct.name}
        setSelectedProduct={setSelectedProduct} />
        
      })
    }
    </ol>
    <Cart selectedProduct={selectedProduct} />
  </>
  )
}

