import './Product.css'


export default function Product({ title, price, img }) {
    return (
        <div className='product-card'>
            <div className="product-image">
                <img src={img} />
            </div>
            <div className="product-details">
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
        </div>
    )
}