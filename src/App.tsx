import BasicTable from "./components/Table";
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
