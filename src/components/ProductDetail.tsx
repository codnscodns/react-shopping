import {useLocation} from 'react-router-dom'

export default function ProductDetail() {
    const location = useLocation();
    const {product} = location.state; // state에서 product 객체 받아오기
    const imageUrl = product?.imageUrl

    return (
        <main className="main-content">
            <div>
                    <div>
                        <img width="100%" src={imageUrl} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <p>
                            {product.price.toLocaleString()}원
                        </p>
                    </div>
            </div>
        </main>
    );
}