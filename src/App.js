import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./store/";

import GlobalStyle from './style/GlobalStyle'

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
