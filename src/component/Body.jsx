import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardViewer from "./CardViewer";

const Container = styled.div`
	display: flexbox;
	background-color: #90d5ec;
  background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);
	flex-wrap: wrap;
	padding:30px;
	justify-content: space-between;
`;

function Body() {
	const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
       "https://api.tvmaze.com/search/shows?q=all"
     );
     const data = await response.json();
     setPosts(data);
   };
  useEffect(() => {
    fetchPost()
  },[]);
	//console.log(posts);
  return (
		<Container>
			{posts.map(post=><CardViewer data={post.show}/>)}
		</Container>
  );
}

export default Body;