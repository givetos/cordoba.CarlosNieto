import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({product}) => { 

    return (
    <>
       <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
                <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.title}
                />

                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn primary">Ver Detalle</Link>
            </div>
        </div>
    </>

    )
}
        
 export default Item