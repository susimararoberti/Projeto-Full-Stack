import { APICONTACTS } from "../../api";
import { Container, Itens } from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import List from "../../components/List";
import Header from "../../components/Header";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    APICONTACTS.get("/?results=16")
      .then((res) => {
        setContacts(res.data.results);
      })
      .catch((_) => {
        toast.error("Erro no servidor!");
      });
  }, []);

  return (
    <Container>
      <Header />
      <Itens>
        <ul>
          {contacts.map((contact) => (
            <List
              key={contact.login.uuid}
              name={contact.name.first}
              secondName={contact.name.last}
              email={contact.email}
              username={contact.login.username}
              age={contact.dob.age}
              photo={contact.picture.thumbnail}
            />
          ))}
        </ul>
      </Itens>
    </Container>
  );
}

export default Contacts;
