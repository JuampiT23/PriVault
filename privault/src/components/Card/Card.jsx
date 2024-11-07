const Card = ({ titulo, descripcion }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Producto {titulo}</h5>
          <p className="card-text">Descripción {descripcion}</p>
          <a href="#" className="btn btn-primary">Sumar al carrito</a>
        </div>
      </div>
    );
  };
  
  export default Card;