import ButtonComp from "../../components/Button";
import Header from "../../components/Header";
import { useState } from "react";
import { Box, Container, BoxImage } from "./styles";

function CatsPage() {
  const [httpCat, setHttpCat] = useState("");
  const [image, setImage] = useState("");

  const findCat = (event) => {
    event.preventDefault();
    setImage("https://http.cat/" + httpCat);
  };

  return (
    <Container>
      <Header />
      <Box>
        <h1>Cats HTTP</h1>
        <form action="#">
          <input
            placeholder="Digite o status HTTP aqui..."
            tipe="text"
            onChange={(event) => setHttpCat(event.target.value)}
          />
          <ButtonComp type="submit" onClick={findCat} nameButton="Buscar" />
        </form>
      </Box>
      <BoxImage>{image && <img src={image} alt="Cats HTTP" />}</BoxImage>
    </Container>
  );
}

export default CatsPage;
