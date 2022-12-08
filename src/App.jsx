function App() {
  const listPadding = "p-5";
  const otaCoisa = "px-1"
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="flex">
            <li className={listPadding+" "+otaCoisa}>Home</li>
            <li className={listPadding}>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
