import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";
import { Box, Container, Errors } from "./styles";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const auth = useAuth();
  const schema = yup.object().shape({
    login: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Informe uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const loged = async ({ login, password }) => {
    const data = { login, password };

    try {
      await auth.signin(data, () => history.push("/contacts"));
      toast.success("Logado com Sucesso!");
    } catch (error) {
      toast.error("Erro ao logar, login e/ou senha incorreto(s)!");
    }
  };

  return (
    <Container>
      <Box>
        <FormComp
          title="Login"
          onSubmitFunction={handleSubmit(loged)}
          inputSize="7vh"
        >
          <div>
            <label>
              Login:{" "}
              {errors.login?.message && (
                <Errors> - {errors.login?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite seu login aqui..."
              {...register("login")}
            />
          </div>
          <div>
            <label>
              Senha:{" "}
              {errors.password?.message && (
                <Errors> - {errors.password?.message}</Errors>
              )}
            </label>
            <input
              type="password"
              placeholder="Digite sua senha aqui..."
              {...register("password")}
            />
          </div>
          <ButtonComp type="submit" nameButton="Logar"></ButtonComp>
        </FormComp>
      </Box>
    </Container>
  );
}

export default Login;
