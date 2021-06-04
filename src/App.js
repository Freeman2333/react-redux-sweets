import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Carousels from "./components/Carousels";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import {store, persistor} from "./components/redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import Checkout from './components/home/Checkout'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Nav />
          <Carousels />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/checkout" component={Checkout} ></Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
