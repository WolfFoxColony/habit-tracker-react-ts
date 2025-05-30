import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import './assets/styles/main.scss';
import {store} from "./RTK/store.tsx";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
