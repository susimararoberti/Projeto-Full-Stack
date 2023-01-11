import API from "../../api";
import Header from "../../components/Header";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomerModal from "../../components/CustomerModal";
import CustomerCard from "../../components/CustomerCard";

function Customers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customers, setCustomers] = useState();
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      const response = await API.get("/customer/");

      if (response.data) {
        setCustomers(response.data);
        setIsLoading(false);
      }
    };
    try {
      request();
    } catch (error) {
      console.log(error);
    }
  }, [isOpen, reload]);

  return (
    <>
      <Header />
      <CustomerModal isOpen={isOpen} onClose={onClose} />
      <Flex
        flexDir={"column"}
        m={4}
        p={4}
        borderTopStartRadius={16}
        gap={16}
        border={"2px solid #9ba2ff"}
      >
        <Flex justifyContent={"space-between"}>
          <Text fontSize={28} fontWeight={700} w={"60%"} color="blue">
            Clientes
          </Text>

          <Button
            isLoading={isLoading}
            colorScheme={"green"}
            onClick={onOpen}
            borderTopStartRadius={16}
          >
            Adicionar cliente
          </Button>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          {customers?.map((customer) => {
            return (
              <CustomerCard
                key={customer._id}
                client={customer}
                setReload={setReload}
                reload={reload}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}

export default Customers;
