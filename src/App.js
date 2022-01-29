import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, title: "cloths", amount: 5000, date: new Date(2022, 1, 14) },
    { id: 2, title: "food", amount: 1500, date: new Date(2022, 0, 1) },
    { id: 3, title: "travelling", amount: 800, date: new Date(2022, 4, 2) },
    { id: 4, title: "movies", amount: 500, date: new Date(2022, 1, 14) },
  ];
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </>
  );
}

export default App;
