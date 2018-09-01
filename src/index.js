// import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import allReducers from "./reducers";
import App from "./components/App";

const store = createStore(allReducers);

["one", "two", "three"].forEach(id => {
  ReactDOM.render(
    <Provider store={store}>
      <App counterKey={id} />
    </Provider>,
    document.getElementById(id)
  );
});
