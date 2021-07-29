import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../App.css';
import Blogs from './Blogs';


const Filter = () => {
    const [cssAll,setCssAll]=useState("categories filter-select");
    const [Id,setId]=useState("");
    const [filterData,setFilterData]=useState([]);
    const [blogsData,setData]=useState([]);
    
    useEffect(()=>{
        axios({
            method:'GET',
            url:"https://api.edyoda.com/v1/blog/postcategories/",
            header:{'Access-Control-Allow-Origin': '*'}
        })
        .then(response=>{setFilterData(response.data)})
        .catch(error=>{console.log(error)})

        axios({
            method:'GET',
            url:"https://api.edyoda.com/v1/blog/",
            header:{'Access-Control-Allow-Origin': '*'}
        })
        .then(response=>{setData(response.data)})
        .catch(error=>{console.log(error)})
    },[])
    
    function filterBlogs(item){
        
        setCssAll("categories")
        filterData.map((filterItem)=>{
            if(filterItem.id===item.id){
                setId(filterItem.id);
            }
        })
        axios({
            method:'GET',
            url:"https://api.edyoda.com/v1/blog/"+item.slug+"/",
            header:{'Access-Control-Allow-Origin': '*'}
        })
        .then(response=>{setData(response.data.posts)})
        .catch((error)=>{console.log(error)})
    }

    function allBlogs(){
        setId("");
        setCssAll("categories filter-select");
        axios({
            method:'GET',
            url:"https://api.edyoda.com/v1/blog/",
            header:{'Access-Control-Allow-Origin': '*'}
        })
        .then(response=>{setData(response.data)})
        .catch((error)=>{console.log(error)})
    }
    

    
    return ( 
    <div>
        <section className="Category-section">
            <h1 className="Category-section-heading">Latest Posts</h1>
            <p className="filter-text"> <i className="fas fa-filter filter-icon"></i>Filter by Category</p>
            <div className="categories-list">
                
                <div className={cssAll} 
                onClick={allBlogs} id="all">All</div>

                {filterData.map((item)=> 
                
                <div key={item.id} 
                    onClick={()=>filterBlogs(item)}
                    className={Id===item.id ? "categories filter-select" : "categories" }>
                    {item.title}
                </div>)}
            </div>
        </section>

        <Blogs blogsData={blogsData}/>
    </div> 
    );
}
 
export default Filter;