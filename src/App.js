import React from "react";
import { CounterAppFunction } from "./components/counter-app-v4";

// Membuat namespace
import * as Button from "./components/common/button-class";

function App() {
  return (
    <CounterAppFunction>
      <Button.ButtonClass>
        <Button.MyButton></Button.MyButton>
      </Button.ButtonClass>
    </CounterAppFunction>
  );
}

export default App;
