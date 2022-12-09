import "./style.css";

function App() {
  return (
    <div className="">
      <header className="py-3 bg-skyblue">
        <div className="container">
          <div className="flex items-center">
            <div className="w-3/12">
              <p className="logo font-semibold text-white">
                Smart Error Detector
              </p>
            </div>
            <div className="w-9/12"></div>
          </div>
        </div>
      </header>
      <div className="">
        <div className="flex h-full">
          <div className="w-2/12 h-screen sidebar">Sidebar</div>
          <div className="w-10/12">Detect Error App</div>
        </div>
      </div>
    </div>
  );
}

export default App;
