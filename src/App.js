import { useState } from "react";
import InputComponent from "./components/inputComponent";
import OutputComponent from "./components/outputComponent";
import "./style.css";

function App() {
  const [sidebarItems, setSidebarItems] = useState({
    input: true,
    output: false,
    userManual: false,
  });

  const Proceed = () => {
    setSidebarItems({
      ...sidebarItems,
      output: true,
      input: false,
    });
  };

  const RevertBack = () => {
    setSidebarItems({
      ...sidebarItems,
      output: false,
      input: true,
    });
  };

  return (
    <div className="">
      <header className="py-3 bg-skyblue">
        <div className="px-4">
          <div className="flex items-center">
            <div className="w-2/12">
              <h1 className="logo font-bold text-white text-xl text-start text-uppercase">
                Scribe Assist
              </h1>
            </div>
            <div className="w-8/12"></div>
          </div>
        </div>
      </header>
      <div className="">
        <div className="flex h-full">
          <div className="w-2/12 h-screen sidebar">
            <div className="flex flex-col p-4 gap-2">
              <div
                className={`"text-lg text-white cursor-pointer px-2 py-1 rounded-md ${
                  sidebarItems.input ? "bg-gray-400" : "hover:bg-gray-400"
                }`}
              >
                Input
              </div>
              <div
                className={`"text-lg text-white cursor-pointer px-2 py-1 rounded-md ${
                  sidebarItems.output ? "bg-gray-400" : "hover:bg-gray-400"
                }`}
              >
                Output
              </div>
              <div
                className={`"text-lg text-white cursor-pointer px-2 py-1 rounded-md ${
                  sidebarItems.userManual ? "bg-gray-400" : "hover:bg-gray-400"
                }`}
              >
                User manual
              </div>
            </div>
          </div>
          <div className="w-10/12 px-8 py-4">
            {sidebarItems.input && (
              <InputComponent clickProceed={() => Proceed()} />
            )}
            {sidebarItems.output && (
              <OutputComponent clickRevertBack={() => RevertBack()} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
