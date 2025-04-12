import React ,{useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'
const Products = () => {
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
   
  useEffect(()  =>{
    setLoading(true);
    axios({
        method:"GET",
        url:"https://fakestoreapi.com/products",
        
  
    }).then(res => {
        console.log(res.data);
        setData(res.data);
    }).catch(e=>console.log(e))
    .finally(()=> setLoading(false));


  },[]);
  
  return (  
  <div className='products-container'>
        {loading && (
        <div>
            {" "}
             <h1>Loading...</h1>
             
             </div>
            )}

       {data.map((product)=>(

    
<div key="product.id" className='card'>
   
<div><img src={product.image} alt="#"></img></div>
<div className="card-description">
<h3 className='title'>{product.title}</h3>
<div><span className='price'>${product.price}</span> 
<span className='mrp'>MRP: ${((product.price*0.3)+product.price).toFixed(2)}</span>
 
</div>

{/* <h6>Category : {product.category}</h6> */}
</div>

</div>



       ))}     
    
    </div>  
  );
};

export default Products;