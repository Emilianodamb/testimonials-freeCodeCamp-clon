import Item from "../item/Item.jsx"
import testimonials from "../testimonials.json"


const ItemList = () => {

  return (
    <div className="item-list-container">
      {testimonials.map((item) => (
        <Item key={item.id} objeto={item}/>
      ))}
    </div>
  )
}

export default ItemList