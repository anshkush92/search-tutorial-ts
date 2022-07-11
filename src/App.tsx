import ChangeTotalRows from "./components/change-total-rows/ChangeTotalRows";
import BasicTable from "./components/table/Table";
import useFakeData from "./hooks/useFakeData";

const App = () => {
  const userData = useFakeData();

  return (
    <div>
      <ChangeTotalRows></ChangeTotalRows>
      <BasicTable rows={userData}></BasicTable>
    </div>
  );
};

export default App;
