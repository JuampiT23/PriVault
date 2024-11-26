import { Link } from 'react-router-dom'
import img from '../Item/Item.jsx'

const ItemDetail = ({name, description, price}) => {
  
    return (
    <div className="container" >
        <h2>{name}</h2>
        <div className="card">
            <img src={img}
            style={{ width: '200px', height: '200px' }}
            className="card-img-top"
            alt={name}
            />
        </div>
        <div className="card-body">
            <p>{description}</p>
            <p>{price}</p>
        </div>
        <Link to="/cart" >Finalizar compra</Link>
    </div>
  )
}

export default ItemDetail