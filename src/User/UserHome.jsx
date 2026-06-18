import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

function UserHome() {

  // let api ='https://dummyjson.com/products';

  let navigate = useNavigate();
const [products, setproducts] = useState([]);

let dispatch=useDispatch();
let userId= localStorage.getItem("uid");

  async function getdata(){
    let res =await axios.get("https://dummyjson.com/products")
    // console.log(res.data.products)
    setproducts(res.data.products);
  }

  async function StoreData(item) {  
    console.log("Sending:", {
      ptitle: item.title,
      pcategory: item.category,
      pprice: item.price,
      prating: item.rating,
      userId: userId
  })
    let response = await axios.post("http://localhost:8080/api/cart/addItems", {
      pimage:item.thumbnail,
        ptitle: item.title,
        pcategory: item.category,
        pprice: item.price,     
        prating: item.rating,
        userId: userId
    })
}

  let result = products.map((item, ind) => {
    return (
      <div className='card' key={item.id}>
        <img src={item.thumbnail} alt={item.title} />
        <h3>{item.title}</h3>
        <p className='category'>{item.category}</p>
        <p className='price'>${item.price}</p>
        <p className='rating'>⭐ {item.rating}</p>
        <div className='card-buttons'>
        <button className='addtocart' onClick={()=>{ dispatch(addItem(item)); StoreData(item);alert("Added to cart!");
}}>
  Add to Cart</button>

  <button onClick={() => navigate(`/userDashboard/productDetails/${item.id}`)} 
className='open-btn'>Open</button>
    
    </div>    
        </div>
    )
  })


  useEffect(()=>{
    getdata();

 },[])


 return (
      <div className='products-container'>
          {result}
      </div>
 )
}

export default UserHome 