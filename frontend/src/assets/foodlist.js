const food_list = [
    {
        _id:'1',
        name:'Greek Salad',
        image:'/Images/food_1.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Salads'
    },
    {
        _id:'2',
        name:'Veg Salad',
        image:'/Images/food_2.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Salads'
    },
    {
        _id:'3',
        name:'Clover Salad',
        image:'/Images/food_3.png',
        price:16,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Salads'
    },
    {
        _id:'4',
        name:'Chicken Salad',
        image:'/Images/food_4.png',
        price:18,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Salads'
    },
    {
        _id:'5',
        name:'Losagno Rolls',
        image:'/Images/food_5.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Rolls'
    },
    {
        _id:'6',
        name:'Peri Peri Rolls',
        image:'/Images/food_6.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Rolls'
    },
    {
        _id:'7',
        name:'Chicken Rolls',
        image:'/Images/food_7.png',
        price:18,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Rolls'
    },
    {
        _id:'8',
        name:'Veg Rolls',
        image:'/Images/food_8.png',
        price:16,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Rolls'
    },
    {
        _id:'9',
        name:'Ripple Ice Cream',
        image:'/Images/food_9.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Deserts'
    },
    {
        _id:'10',
        name:'Fruit Ice Cream',
        image:'/Images/food_10.png',
        price:18,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Deserts'
    },
    {
        _id:'11',
        name:'Jar Ice Cream',
        image:'/Images/food_11.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Deserts'
    },
    {
        _id:'12',
        name:'Vanilla Ice Cream',
        image:'/Images/food_12.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Deserts'
    },
    {
        _id:'13',
        name:'Chicken Sandwich',
        image:'/Images/food_13.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Sandwich'
    },
    {
        _id:'14',
        name:'Vegan Sandwich',
        image:'/Images/food_14.png',
        price:16,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Sandwich'
    },
    {
        _id:'15',
        name:'Grilled Sandwich',
        image:'/Images/food_15.png',
        price:18,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Sandwich'
    },
    {
        _id:'16',
        name:'Bread Sandwich',
        image:'/Images/food_16.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Sandwich'
    },{
        _id:'17',
        name:'Cup Cake',
        image:'/Images/food_17.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Cakes'
    },
    {
        _id:'18',
        name:'vegan Cake',
        image:'/Images/food_18.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Cakes'
    },
    {
        _id:'19',
        name:'Butterscotch Cake',
        image:'/Images/food_19.png',
        price:20,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Cakes'
    },
    {
        _id:'20',
        name:'Sliced Cake',
        image:'/Images/food_20.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Cakes'
    },
    {
        _id:'21',
        name:'Garlic Mushroom',
        image:'/Images/food_21.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pure Veg'
    },
    {
        _id:'22',
        name:'Fried Cauliflower',
        image:'/Images/food_22.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pure Veg'
    },
    {
        _id:'23',
        name:'Mixed Veg Pulao',
        image:'/Images/food_23.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pure Veg'
    },
    {
        _id:'24',
        name:'Rice Zucchini',
        image:'/Images/food_24.png',
        price:18,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pure Veg'
    },
    {
        _id:'25',
        name:'Cheese Pasta',
        image:'/Images/food_25.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pasta'
    },
    {
        _id:'26',
        name:'Tomato Pasta',
        image:'/Images/food_26.png',
        price:16,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pasta'
    },
    {
        _id:'27',
        name:'Creamy Pasta',
        image:'/Images/food_27.png',
        price:18,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pasta'
    },
    {
        _id:'28',
        name:'Chicken Pasta',
        image:'/Images/food_28.png',
        price:20,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Pasta'
    },
    {
        _id:'29',
        name:'Butter Noodles',
        image:'/Images/food_29.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Noodles'
    },
    {
        _id:'30',
        name:'Veg Noodles',
        image:'/Images/food_30.png',
        price:12,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Noodles'
    },
    {
        _id:'31',
        name:'Somen Noodles',
        image:'/Images/food_31.png',
        price:14,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Noodles'
    },
    {
        _id:'32',
        name:'Cooked Noodles',
        image:'/Images/food_32.png',
        price:16,
        description:'Food provides essential nutrients for overall health and well being.',
        category:'Noodles'
    },
    

]

export default food_list