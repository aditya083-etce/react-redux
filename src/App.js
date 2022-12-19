import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/HookIcecreamContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
