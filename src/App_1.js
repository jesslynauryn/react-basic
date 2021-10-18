import ButtonClass from "./components/common/button-class";
import ButtonFunction from "./components/common/button-function";

function App() {
  const label1 = "Button Class 1";
  const label2 = "Button Class 2";

  return (
    <div className="container">
      {/* <Component propsKey=propsValue /> */}
      <ButtonClass label={label1} isActive={false}>
        <p>Hehe</p>
      </ButtonClass>

      <ButtonClass children={<p>Hehe</p>} label={label2} isActive={true} />

      <hr></hr>

      <ButtonFunction
        children={<p>Function</p>}
        label={label2}
        isActive={true}
      />

      <ButtonFunction
        children={<p>Function</p>}
        label={label1}
        isActive={false}
      />
    </div>
  );
}

export default App;
