import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    const BtnClassName = details ? 'bg-blue-100' : 'bg-lime-100'
    const BtnClasses = ['py-4 px-2 border', BtnClassName]
    return (
        <div
        className="border py-2 px-5 flex flex-col items-center mb-5"
        >
            <img src={ product.image } className="w-1/6"/>
            <p>{ product.title }</p>
            <p className="font-bold py-1 px-1 border m-3 bg-lime-300">{ product.price } $</p>
            <button
            className={BtnClasses.join(' ')}
            onClick={() => setDetails(prev => !prev)}>
                {details ? "Скрыть" : "Подробнее"}
            </button>

            {details && <div>
                <p className="m-2">{ product.description }</p>
                <p>Рейтинг: <span style={{ fontSize: '15px', fontWeight: 'bold', color: "#4e61bf",
                 backgroundColor: "#d8d9e3", borderRadius: "100px", padding: '5px', margin: '5px' }}>{ product.rating.rate }</span></p>
            </div>}

        </div>
    )
}
{/* <p>{product.description}</p> */}