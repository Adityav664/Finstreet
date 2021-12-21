import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';

const Container = styled.div`
  padding-bottom: 10rem;
`;

const SubContainer = styled.div`
  height: 25rem;
  background-color: #6b0f1a;
  background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  @media (max-width:1300px){
    height: fit-content;
  }
`;

const ImgContainer = styled.div`
  height: 25rem;
  width: 20rem;
  position: relative;
  top: 120px;
  background-color: #42378f;
  background-image: linear-gradient(315deg, #42378f 0%, #3f0d12 74%);
`;

const TitleContainer = styled.div`
	padding-left: 20%;
`;

const CastList = styled.div`
	display: flex;
`;

const ItemList = styled.div`
	display: flex;
  justify-content: center;
  @media (max-width:1200px){
    flex-direction: column;
    margin-left: 25%;
    margin-right: 25%;
  }
`;

const CarouselContainer = styled.div`
	margin-top: 200px;
`;


const P = styled.p`
	text-align: left;
  font-size: xx-large;
  font-weight: 700;
	margin:0;
	margin-top: 3rem;
	margin-bottom: 3rem;
`;

const P2 = styled.p`
	text-align: left;
  font-size: medium;
	font-style: oblique;
  font-weight: 500;
	margin-right: 2rem;
	margin-top: 0;
`;

const Img = styled.img`
  padding: 2rem;
  height: 21rem;
  width: 16rem;
`;

function MoviePage() {
  let location = useLocation();
  const data = location.state;
	const [posts, setPosts] = useState([]);
	const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  let id=data.externals.imdb;
  const fetchPost = async () => {
    const response = await fetch(
       `https://imdb-api.com/en/API/Title/k_06qxynkx/tt7414406/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,`
     );
     const api_data = await response.json();
     setPosts(api_data);
   };
   console.log(posts)
  const [url, setUrl] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.ZSXrQuieNC-hoPC4kIv_vgAAAA%26pid%3DApi&f=1"
  );
  useEffect(() => {
		fetchPost();
    if (data.image != null) {
      setUrl(data.image.medium);
    }
  }, []);
  console.log(posts);
  return (
    <Container>
      <SubContainer>
        <ImgContainer>
          <Img src={url} alt="" />
        </ImgContainer>
        <TitleContainer>
          <P>{data.name}</P>
					<P2>{posts.fullTitle}</P2>
					<P2>Plot:- {posts.plot}</P2>
					<CastList>
						<P2>Genre:- </P2>
						{(data.genres!=null)?(data.genres.map(data=><P2>{data}</P2>)):null}
					</CastList>				
					<CastList>
						<P2>Cast:- </P2>
						{(posts.starList!=null)?(posts.starList.map(data=><P2>{data.name}</P2>)):null}
					</CastList>
					<CastList>
						<P2>Release Date	:- {posts.releaseDate}</P2>
					</CastList>
        </TitleContainer>
      </SubContainer>
			<CarouselContainer>
				{(posts.images!=null)?
					<Carousel
            data={posts.images.items}
            time={2000}
            width="100rem"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "90%",
              maxHeight: "30rem",
              margin: "10rem",
            }}
          />:null}
			</CarouselContainer>
    </Container>
  );
}

export default MoviePage;
