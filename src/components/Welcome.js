// este componente lo teniamos al principio todo en app.js pero hemos refactorizado y traido a un componente individual

import styled from "styled-components";
import Logo from "../the-simpson.png";


export default function Welcome(props) {
    const {reqApi} = props;
    
    return (
        <ContentLogo>
        <WelcomeText>Bienvenido, para generar frases, pincha sobre la imagen</WelcomeText>
        {/* al hacer click en la imagen, llama a reqApi para hacer la peticion a la api */}
        <ImageLogo src={Logo} alt="Simpsons sofa" onClick={reqApi}/>
        </ContentLogo>
    )
};

const ImageLogo = styled.img`
  width:450px;
  height: auto;

  &:hover {
    cursor:pointer;
  }
`;

const ContentLogo = styled.div`
  width:100%;
  text-align: center;
`

const WelcomeText = styled.div`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`