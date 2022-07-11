// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector } from "../app/hooks";

// Test -------------------------- Structure of Props ----------------------------------
import { UserDataType } from "../types/UserDataType.type";

// Test -------------------------- The current component ----------------------------------
const useFakeData = () => {
  const totalRows = useAppSelector((state) => state.totalRows.totalRows);
  const [userData, setUserData] = useState<UserDataType[]>([]);

  useEffect(() => {
    const generateFakeData = () => {
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
    generateFakeData();
    return () => {
      console.log("Cleanup from fake.tsx");
    };
  }, [totalRows]);

  return userData;
};

// Test -------------------------- Exporting the current component ------------------------
export default useFakeData;
