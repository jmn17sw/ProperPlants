import plants from './data.js'

const Gallery = (props) => {
const foundProduct = plants.find((individualProducts) => {
  return individualProducts.name === props.selectedPlant;
})

const galleryProducts = foundProduct.plants ? foundProduct.plants : [];

return (
  <>
    <h2>{props.selectedPlant}</h2>
    <ol>
        {
          galleryProducts.map(() => {
            return (
              <li key={plants.id}>Plants</li>
            )
          })
        }
    </ol>
  </>
)

}
export default Gallery