import { useState, useEffect } from 'react'
import ProductCard from './ProductCard.js'

const ShimmerCard = () => (
    <div className='loading-card'>
        <div className="image loading-shimmer"></div>
        <div className="title loading-shimmer"
             style={{marginTop: '1rem', height: '1rem'}}></div>
        <div className="title loading-shimmer"
             style={{marginTop: '.5rem', height: '1rem', width: '80%'}}></div>
    </div>
)

export default function ProductList({ selectedCategory }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const category = selectedCategory ?? 'electronics';

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(resp => resp.json())
            .then(data => {
                setProducts(data)
                setLoading(false);
            });
    }, [selectedCategory])

    if (loading) {
        return (
            <div className="products">
                { Array.from({length: 6}, (_, index) => (
                        <ShimmerCard key={index}/>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="products">
            { products.map((product) =>
                <ProductCard product={product} />
            )}
        </div>
    )

}