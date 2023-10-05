import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'mobx-react';
import st from './assets/styles/index.scss';
import App from './App';
import WordStore from './assets/stores/WordStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const stores = {
 wordStore : new WordStore()
}


root.render(
    <Provider {...stores}>
    <App />
    </Provider>
);


