// import styled from "styled-components";
import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer"

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async()=>{
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
    const frase = await api.json()
    // console.log(frase)
    setCharacters(frase)
  };



  return (
    <>
      <Container>
        <Header/>

        {/* le decimos que si characters esta vacio, no me lo muestre 
        y si tiene la informacion, SOLO me muestre characters */}
        {!characters ? (
          <Welcome reqApi={reqApi}/>
        ) : (
          <CharacterContainer characters={characters} reqApi={reqApi} />
        )}
      </Container>
      </>
  );
}


export default App;
