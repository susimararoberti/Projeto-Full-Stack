import { Item } from "./styles";

function List({ name, secondName, email, username, age, photo }) {
  return (
    <Item>
      <div>
        <img src={photo} alt="Imagem do contato" />
        <h1>
          {name}
          {""} {secondName}
        </h1>
        <p>{email}</p>
        <p>{username}</p>
        <p>{age}</p>
      </div>
    </Item>
  );
}

export default List;
