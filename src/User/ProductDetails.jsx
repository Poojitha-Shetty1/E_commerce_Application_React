import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

function ProductDetails() {
let params = useParams();
const [product, setproduct] = useState(null);
let navigate = useNavigate();
let dispatch= useDispatch();

async function getdata(){
 let res =await axios.get(`https://dummyjson.com/products/${params.id}`);
 console.log(res.data)
 setproduct(res.data)

}

useEffect(()=>{
    getdata();

},[])

if (!product) return <div>Loading...</div>


return (
    <div className='card'>
     <button  className='addtocart' onClick={()=>{navigate("/userDashboard")}}> go back</button>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className='category'>{product.category}</p>
      <p className='price'>${product.price}</p>
      <p className='rating'>⭐ {product.rating}</p>
      <button className='addtocart' 
        onClick={()=>{dispatch(addItem(product))
          alert("added to cart");
        }}> Add to cart</button>
    </div>
  )
}

export default ProductDetails