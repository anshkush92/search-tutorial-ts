import ChangeTotalRows from "./components/change-total-rows/ChangeTotalRows";
import CurrentTotalRows from "./components/change-total-rows/CurrentTotalRows";
import BasicTable from "./components/table/Table";
import useFakeData from "./hooks/useFakeData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import createTheme from "@mui/material/styles/createTheme";

import { useAppSelector } from "./app/hooks";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const userData = useFakeData();
  const isDarkMode = useAppSelector((state) => state.toggleMode.isDarkMode);

  const darkMode = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkMode}>
        <Navbar></Navbar>
        <CurrentTotalRows></CurrentTotalRows>
        <ChangeTotalRows></ChangeTotalRows>
        <BasicTable rows={userData}></BasicTable>
        <ToastContainer closeButton={true} position="top-right" />
      </ThemeProvider>
    </div>
  );
};

export default App;
