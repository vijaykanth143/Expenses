import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "cloths", amount: 5000, date: new Date(2022, 1, 14) },
    { id: 2, title: "food", amount: 1500, date: new Date(2022, 0, 1) },
    { id: 3, title: "travelling", amount: 800, date: new Date(2022, 4, 2) },
    { id: 4, title: "movies", amount: 500, date: new Date(2022, 1, 14) },
  ];
  return (
    <>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
