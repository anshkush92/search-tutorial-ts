// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { faker } from "@faker-js/faker";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector } from "../app/hooks";

// Test -------------------------- Structure of Props ----------------------------------
import { UserDataType } from "../types/UserDataType.type";

// Test -------------------------- The current component ----------------------------------
const useFakeData = () => {
  const totalRows = useAppSelector((state) => state.totalRows.totalRows);
  const [userData, setUserData] = useState<UserDataType[]>([]);

  const generateFakeData = async () => {
    let tempData: UserDataType[] = [];

    for (let i = 1; i <= totalRows; i++) {
      const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        dob: faker.date.birthdate().toLocaleDateString(),
        phone: faker.phone.number("###-####-###"),
        avatar: faker.internet.avatar(),
        country: faker.address.country(),
      };
      tempData.push(user);
    }
    setUserData(tempData);
  };

  if (userData.length === 0) generateFakeData();

  return userData;
};

// Test -------------------------- Exporting the current component ------------------------
export default useFakeData;
