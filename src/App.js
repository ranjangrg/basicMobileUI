
// import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap
import './App.scss';

import StatusBar from './components/statusBar';
import Content from './components/content';
import Footer from './components/footer';

import allReducers from './reducers';
// import allReducers from './reducers/index.js'; // alternatively

import { createStore } from 'redux';

import { Provider } from 'react-redux';

const global_store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// global_store.subscribe( () => console.log(global_store.getState()) );

function App() {
  return (
    <Provider store={global_store}>
      <div className="App">
        <StatusBar />

        <Content />

        <Footer />
      </div>
    </Provider>);
}

export default App;
