import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 41.5px;
  height: 18rem;
  width: 35rem;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 15rem;
    height: 23rem;
  }
	:hover{
  	height: 20	rem;
  	width: 40rem;	
		background-color: #42378f;
  	background-image: linear-gradient(315deg, #42378f 0%, #3f0d12 74%);
  }
`;

const SubContainer = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 21rem;
    width: 15rem;
  }
  justify-content: space-between;
`;

const DetailContainer = styled.div`
  text-align: center;
  height: 10rem;
  width: 62%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-color: #3fa796;
  @media (max-width: 1200px) {
    height: 3rem;
    width: 15rem;
    margin: 0;
  }
`;

const Img = styled.img`
  height: 18rem;
  width: 15rem;
  object-fit: fit;
`;

const P = styled.p`
  font-size: larger;
  font-weight: 500;
  margin: 0;
  margin-top: 15px;
`;

const GenreContainer = styled.div`
  display: flex;
  text-align: left;
  padding-top: 10px;
`;

const TypeContainer = styled.div`
  height: 30px;
  display: flex;
  margin-right: 4px;
`;

const TitleContainer = styled.div`
  width: 80px;
`;

const P2 = styled.p`
  text-align: left;
  margin: 0;
  padding: 5px;
  padding-right: 10px;
`;

function CardViewer({ data }) {

	let navigate = useNavigate();
  const [url, setUrl] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.ZSXrQuieNC-hoPC4kIv_vgAAAA%26pid%3DApi&f=1"
  );
  //console.log(data);
  useEffect(() => {
    if (data.image != null) {
      setUrl(data.image.medium);
    }
  }, []);
  return (
    <Container onClick={()=>navigate(`/${data.name}`,{state:data})}>
      <SubContainer>	
        <Img src={url} alt="" />
        <DetailContainer>
          <P>{data.name}</P>
          <GenreContainer>
            <TitleContainer>
              <P2>Genres :-</P2>
            </TitleContainer>
            {data.genres.map((genre) => (
              <TypeContainer>
                <P2>{genre}</P2>
              </TypeContainer>
            ))}
          </GenreContainer>
          <GenreContainer>
            <TitleContainer>
              <P2>Status:- </P2>
						</TitleContainer>
						<TypeContainer>
							<P2>{data.status}</P2>
							</TypeContainer>
          </GenreContainer>
        </DetailContainer>
      </SubContainer>
    </Container>
  );
}

export default CardViewer;
