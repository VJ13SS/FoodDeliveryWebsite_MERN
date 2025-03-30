import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const stripe_secret_key="sk_test"

const stripe = new Stripe(stripe_secret_key)

//placing user order from fontend
const placeOrder = async (req,res) =>{

    const frontend_url = "http://localhost:5173"

    try {
        //creates a new order
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })

        //saving the new order in the database
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})//clear the cart data after the order is placed

        //line items is necessary for stripe payment
        const line_items = req.body.items.map((item) => ({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price * 100 * 80
            },
            quantity:item.quantity
        }))

        //for delivery charges -> $2
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2 * 100 * 80 //we  multiply by 80 to convert it to INR
            },
            quantity:1
        })

        //created a session
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        return res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:'Error'})
    }
}

export {placeOrder}