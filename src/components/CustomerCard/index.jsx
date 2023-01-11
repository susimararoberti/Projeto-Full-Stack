import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillInfoCircleFill, BsTrashFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import CustomerModal from "../CustomerModal";
import DeleteModal from "../DeleteModal";
import { useEffect } from "react";

const CustomerCard = ({ client, setReload, reload }) => {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isReadOpen,
    onOpen: onReadOpen,
    onClose: onReadClose,
  } = useDisclosure();

  useEffect(() => {
    setReload(!reload);
  }, [isEditOpen, isDeleteOpen]);

  return (
    <>
      <CustomerModal
        isOpen={isEditOpen}
        onClose={onEditClose}
        data={client}
        type="edit"
      />
      <CustomerModal
        isOpen={isReadOpen}
        onClose={onReadClose}
        data={client}
        type="read"
      />
      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        id={client._id}
        route="customer"
      />
      <Flex
        p={2}
        border={"2px solid #9ba2ff"}
        borderTopStartRadius={16}
        alignItems={"center"}
      >
        <Table size="sm" variant={"unstyled"}>
          <Thead>
            <Tr>
              <Th>Cliente</Th>
              <Th>Email</Th>
              <Th>Telefone</Th>
              <Th>Endereço</Th>
              <Th>CPF</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td w={"24%"}>{client.name}</Td>
              <Td w={"12%"}>{client.email}</Td>
              <Td w={"12%"}>{client.phone}</Td>
              <Td w={"12%"}>{client.address}</Td>
              <Td w={"12%"}>{client.cpf}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Flex gap={2} pr={2}>
          <Button colorScheme={"linkedin"} onClick={onReadOpen}>
            <BsFillInfoCircleFill />
          </Button>
          <Button colorScheme={"yellow"} onClick={onEditOpen}>
            <GrUpdate />
          </Button>
          <Button colorScheme={"red"} onClick={onDeleteOpen}>
            <BsTrashFill />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CustomerCard;
