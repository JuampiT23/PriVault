import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="Card" style={{ width: '18rem' }}>
      <img src={product.img} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}</p>
        <Link to= {`/detail/${product.id}`} className="btn btn-primary">Sumar al carrito</Link>
      </div>
    </div>
  )
}

export default Item