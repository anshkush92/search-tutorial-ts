import ChangeTotalRows from "./components/change-total-rows/ChangeTotalRows";
import CurrentTotalRows from "./components/change-total-rows/CurrentTotalRows";
import BasicTable from "./components/table/Table";
import useFakeData from "./hooks/useFakeData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const userData = useFakeData();

  return (
    <div>
      <CurrentTotalRows></CurrentTotalRows>
      <ChangeTotalRows></ChangeTotalRows>
      <BasicTable rows={userData}></BasicTable>
      <ToastContainer closeButton={true} position="top-right" />
    </div>
  );
};

export default App;
