import ChangeTotalRows from "./components/change-total-rows/ChangeTotalRows";
import CurrentTotalRows from "./components/change-total-rows/CurrentTotalRows";
import BasicTable from "./components/table/Table";
import useFakeData from "./hooks/useFakeData";

const App = () => {
  const userData = useFakeData();

  return (
    <div>
      <CurrentTotalRows></CurrentTotalRows>
      <ChangeTotalRows></ChangeTotalRows>
      <BasicTable rows={userData}></BasicTable>
    </div>
  );
};

export default App;
