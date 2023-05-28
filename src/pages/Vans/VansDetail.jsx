import React from "react";
import { useParams,Link,useLocation ,useLoaderData} from "react-router-dom";
import { getVans } from "../../api";

export function loader({params}){
    console.log(params)
    return getVans(params.id);
}
export default function VansDetail(){
    //const params=useParams()
    const location=useLocation();
    const van=useLoaderData();
    // console.log(location);
    // const [van,setVan]=React.useState(null)
    // console.log(params);
//     React.useEffect(()=>{
// fetch(`/api/vans/${params.id}`)
// .then(res=>res.json())
// .then(data=>setVan(data.vans))

//     },[params.id])
//     console.log(van )

    
    const search=location.state &&  location.state.search||""
    const type= location.state?.type||"all"
    return ( 
      <> 
       {/* <Link to=".." relative='path' className="back-button" >&larr; <span>Back to all vans </span></Link> */}
      <Link to={`..${search}`} relative='path' className="back-button" >&larr; <span>Back to {type} vans </span></Link>

      <div className="van-detail-container">
      
      
      {van?(
              <div className="van-detail">
              <img src={van.imageUrl} />
              <i  className={`van-type${van.type} selected`} >{van.type}</i> 
              <h2>{van.name}</h2>
              <p className="van-price">₹{van.price} <span>/day</span></p>
              <p>{van.description}</p>
              <button className="link-button">
Rent this van
              </button>
              </div>
          ):<h2> Loading ...</h2>
      }
          
      </div></> 
    )
}  