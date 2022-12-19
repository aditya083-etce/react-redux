import { Provider } from "react-redux";

import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";
import IcecreamContainer from "./components/IcecreamContainer";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <HookIcecreamContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
