import React from 'react';
import '../App.css';

const Blogs=(props) => {
    const {blogsData}=props;
    return ( 
        <div>
            <section id="blog-section">
            {blogsData.map((item)=>(
            <div className="card" style={{width: 17.5+"rem"}} key={item.id}>
                <img src={item.small_image} className="card-img-top" alt="edyodaStories"/>
                <div className="card-body">
                    <h5 className="card-title blog-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 blog-author">{item.authorname} | 
                     <span className="blog-date"> {item.posted_on.split("T")[0]}</span></h6>
                    <p className="card-text blog-content">{item.description}</p>
                </div>
            </div>))}
            </section>
        </div>
    );
}
 
export default Blogs;
