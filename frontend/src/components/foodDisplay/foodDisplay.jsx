import { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../fooditem/fooditem';


export default function FoodDisplay({category}){
    const context = useContext(StoreContext);
    
    const {food_list} = context
    
    return(
        <div className='food-display' id='food-display'>
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index) => {
                    if (category === 'All' || category === item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                
                    }
                    })}
            </div>
        </div>
    )
}