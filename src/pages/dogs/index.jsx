import ButtonComp from "../../components/Button";
import Header from "../../components/Header";
import { useState } from "react";
import { APIDOGS } from "../../api";
import { Box, Container, BoxImage } from "./styles";

function DogsPage() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const findDog = async () => {
    setIsLoading(true);
    const dog = await APIDOGS.get();
    if (dog.data) {
      setImage(dog.data.message);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header />
      <Box>
        <h1>Find Dogs</h1>
        <ButtonComp type="submit" onClick={findDog} nameButton="Gerar Imagem" />
      </Box>
      <BoxImage>
        {isLoading && (
          <div>
            <span>Aguarde. Carregando a imagem!</span>
          </div>
        )}
        {image && <img src={image} alt="Find Dogs" />}
      </BoxImage>
    </Container>
  );
}

export default DogsPage;
