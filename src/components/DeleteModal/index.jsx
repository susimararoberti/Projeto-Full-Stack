import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import API from "../../api";

const DeleteModal = ({ isOpen, onClose, id, route }) => {
  const handleDelete = async () => {
    await API.delete(`/${route}/${id}`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deletar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Tem certeza de que deseja deletar este registro?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Voltar
          </Button>
          <Button colorScheme={"red"} onClick={handleDelete}>
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
