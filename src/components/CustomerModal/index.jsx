import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../api";

const CustomerModal = ({ isOpen, onClose, data, type }) => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (form) => {
    setLoading(true);
    type === "edit"
      ? await API.patch(`/customer/${data._id}`, form)
      : await API.post(`/customer/`, form);
    reset();
    setLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            {type === "edit"
              ? "Editar Cliente"
              : type === "read"
              ? "Detalhes do Cliente"
              : "Cadastrar novo Cliente"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel
                border="1px solid #ccc"
                borderRadius={16}
                w="100%"
                p={2}
                mt={2}
              >
                Nome:
                {type === "read" ? (
                  <Text pl={3} fontWeight={400}>{`${data.name}`}</Text>
                ) : (
                  <Input
                    type="text"
                    placeholder="Digite o nome aqui..."
                    defaultValue={data && data.name}
                    readOnly={type === "read" ? true : false}
                    {...register("name")}
                  />
                )}
              </FormLabel>
              <FormLabel
                border="1px solid #ccc"
                borderRadius={16}
                w="100%"
                p={2}
                mt={2}
              >
                Email:
                {type === "read" ? (
                  <Text pl={3} fontWeight={400}>{`${data.email}`}</Text>
                ) : (
                  <Input
                    type="text"
                    placeholder="Digite o email aqui..."
                    defaultValue={data && data.email}
                    readOnly={type === "read" ? true : false}
                    {...register("email")}
                  />
                )}
              </FormLabel>
              <FormLabel
                border="1px solid #ccc"
                borderRadius={16}
                w="100%"
                p={2}
                mt={2}
              >
                Telefone:
                {type === "read" ? (
                  <>
                    <Text fontWeight={400} pl={3}>
                      Telefone: {data.phone}
                    </Text>
                  </>
                ) : (
                  <>
                    <FormLabel>Telefone:</FormLabel>
                    <Input
                      readOnly={type === "read" ? true : false}
                      type="text"
                      defaultValue={data && data.phone}
                      {...register("phone")}
                    />
                  </>
                )}
              </FormLabel>
              <FormLabel
                border="1px solid #ccc"
                borderRadius={16}
                w="100%"
                p={2}
                mt={2}
              >
                Endereço:
                {type === "read" ? (
                  <Text pl={3} fontWeight={400}>{`${data.address}`}</Text>
                ) : (
                  <Input
                    type="text"
                    placeholder="Digite o endereço aqui..."
                    defaultValue={data && data.address}
                    readOnly={type === "read" ? true : false}
                    {...register("address")}
                  />
                )}
              </FormLabel>
              <FormLabel
                border="1px solid #ccc"
                borderRadius={16}
                w="100%"
                p={2}
                mt={2}
              >
                CPF:
                {type === "read" ? (
                  <Text pl={3} fontWeight={400}>{`${data.cpf}`}</Text>
                ) : (
                  <Input
                    type="text"
                    placeholder="Digite o CPF aqui..."
                    defaultValue={data && data.cpf}
                    readOnly={type === "read" ? true : false}
                    {...register("cpf")}
                  />
                )}
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              variant={"outline"}
              mr={3}
              onClick={onClose}
            >
              Fechar
            </Button>
            {type !== "read" && (
              <Button
                type="submit"
                isLoading={loading}
                colorScheme={type === "edit" ? "yellow" : "green"}
              >
                {type === "edit" ? "Alterar" : "Cadastrar"}
              </Button>
            )}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CustomerModal;
