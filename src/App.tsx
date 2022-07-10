import { faker } from "@faker-js/faker";

// Table Should be made of
// Name, DOB, Phone number ,Gender, Avatar, country

const App = () => {
  const randomName = faker.name.findName();
  const randomEmail = faker.internet.email();
  const dob = faker.date.birthdate().toLocaleDateString();
  const gender = faker.name.gender(true);
  const avatar = faker.internet.avatar();
  const country = faker.address.country();

  return (
    <div>
      <div>{randomName}</div>
      <div>{randomEmail}</div>
      <div>{dob}</div>
      <div>{gender}</div>
      <div>
        <img src={avatar} alt={randomName}></img>
      </div>
      <div>{country}</div>
    </div>
  );
};

export default App;
