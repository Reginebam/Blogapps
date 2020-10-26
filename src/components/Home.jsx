import React, { useState } from "react";
import PropTypes from "prop-types";
import { postArray } from "./Posts";
import Post from "./Post";



const Home = (props) => {
const [posts, setPosts]= useState(postArray);
    return( 

<div>

{
    posts.map((post)=>{
return <Post key={post.id} post={post}/>





    })
}

</div>


    )
};



export default Home;
