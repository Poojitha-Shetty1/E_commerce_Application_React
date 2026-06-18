import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';

function Cart() {

    let dataId=localStorage.getItem("uid");
    const [cartItemBE, setcartItemBE] = useState([]);
    let totalPrice = cartItemBE.reduce((total, item) => total + item.pprice, 0).toFixed(2);


    let cartItems = useSelector((state) => state.cart.cart)
    // let totalPrice = useSelector((state) => state.cart.totalPrice)
    // console.log(cartItems)

async function GetData(){
  let response=await axios.get(`http://localhost:8080/api/cart/getAllItems/${dataId}`);
  setcartItemBE(response.data);
}

async function  DeleteItem(id){
  let response= await axios.delete(`http://localhost:8080/api/cart/deletItems/${id}`)
  GetData();
}

let result = cartItemBE.map((item) => {
  return (
      <div className='card' key={item.id}>
          <img src={item.pimage} alt={item.ptitle} />
          <h3>{item.ptitle}</h3>
          <p>{item.pcategory}</p>
          <p>${item.pprice}</p>
          <p>⭐ {item.prating}</p>
          <button className='addtocart' onClick={() => DeleteItem(item.id)}>Remove</button>
          </div>
  )
})

      
      useEffect(()=>{
        GetData();
      },[]);

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