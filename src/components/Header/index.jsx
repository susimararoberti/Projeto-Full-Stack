import { useAuth } from "../../context/AuthContext";
import { Box } from "./styles";
import ButtonComp from "../../components/Button";
import { useHistory } from "react-router-dom";

const Header = () => {
  const historico = useHistory();
  const auth = useAuth();

  const contatos = () => {
    historico.push("/contacts");
  };
  const httpCats = () => {
    historico.push("/cats");
  };
  const randomDogs = () => {
    historico.push("/dogs");
  };
  const clientes = () => {
    historico.push("/customers");
  };
  const logout = () => {
    auth.logout(() => historico.push("/"));
  };

  return (
    <Box>
      <div>
        <ButtonComp type="submit" onClick={contatos} nameButton="Contatos" />
        <ButtonComp type="submit" onClick={httpCats} nameButton="Cats HTTP" />
        <ButtonComp
          type="submit"
          onClick={randomDogs}
          nameButton="Random Dogs"
        />
        <ButtonComp type="submit" onClick={clientes} nameButton="Clientes" />
        <ButtonComp type="submit" onClick={logout} nameButton="Logout" />
      </div>
    </Box>
  );
};

export default Header;
