import "./App.css";
import Nav from "./components/Nav";
import AuthButtons from "./components/AuthButtons";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="grid grid-cols-5">
      <Nav />
      <main className="px-12 py-6 col-span-4 bg-cyan-50">
        <AuthButtons />
        <Header />
        <List />
      </main>
    </div>
  );
}

export default App;
