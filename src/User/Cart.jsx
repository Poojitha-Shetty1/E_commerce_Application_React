import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {


    let cartItems = useSelector((state) => state.cart.cart)
    let totalPrice = useSelector((state) => state.cart.totalPrice)
    // console.log(cartItems)

    let result = cartItems.map((item, ind) => {
        return (
          <div className='card' key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p className='category'>{item.category}</p>
            <p className='price'>${item.price}</p>
            <p className='rating'>⭐ {item.rating}</p>
    </div>
        )
      })


      return (
        <div>
          <div className='products-container'>
            {result}
          </div>
          <div className='cart-footer'>
            <h2>Total Price: ${totalPrice}</h2>
            <button className='addtocart' onClick={() => alert("Order placed!!!!!")}>Buy now</button>
          </div>
        </div>
      )
}

export default Cart