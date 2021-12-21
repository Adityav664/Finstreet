import styled from "styled-components";

const Container = styled.div`
	text-align: left;
  height: 10rem;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  text-align: center;
	border-top: 2px solid black;
`;

const P = styled.p`
	text-align: left;
  font-size: medium;
	font-style: oblique;
  font-weight: 500;
	margin-left: 5rem;
	margin-top: 5rem;
`;
function Footer(){
    return (
			<Container>
				<P>Work Done By Aditya Verma</P>
			</Container>
    );
}

export default Footer;