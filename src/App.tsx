import BasicTable from "./components/table/Table";
import useFakeData from "./hooks/useFakeData";

const App = () => {
  const userData = useFakeData();

  return (
    <div>
      <BasicTable rows={userData}></BasicTable>
    </div>
  );
};

export default App;
