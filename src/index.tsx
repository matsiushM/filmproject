import React from 'react';
import { createRoot } from 'react-dom/client';
import RootApp from "./components/RootApp";
import GlobalStyles from "./components/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/store";


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <GlobalStyles/>
          <RootApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


