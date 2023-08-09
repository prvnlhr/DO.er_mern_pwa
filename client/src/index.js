import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from "react-redux";
import store from './redux/store/store';
import { BrowserRouter as Router } from "react-router-dom";
import { injectStore } from "./redux/api/index"
// import axiosInterceptor from './redux/api/index';
import { LocalAuthProvider } from "./appState/localAuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <LocalAuthProvider>
        <App />
      </LocalAuthProvider>
    </Router>
  </Provider>,
);

injectStore(store);