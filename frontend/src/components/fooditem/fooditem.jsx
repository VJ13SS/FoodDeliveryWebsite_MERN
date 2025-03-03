import { useContext } from 'react'
import './fooditem.css'
import { StoreContext } from '../../context/storeContext'

export default function FoodItem({id,name,price,description,image}){

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className='food-item-image'/>
                {
                    !cartItems[id]?<img src='./Images/add_icon_white.png' className='add' onClick={() => addToCart(id)}/>:
                    <div className="food-item-counter">
                        <img onClick={() => removeFromCart(id)} src='./Images/remove_icon_red.png' alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src="./Images/add_icon_green.png" alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src='./Images/rating_starts.png' alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}