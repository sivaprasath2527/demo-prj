import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';   
import reducer from './Components/Redux'  
import { Dashboard } from './Components/Dashboard';


                                                       



const store = createStore(
  reducer,
  window.REDUXDEVTOOLS_EXTENSION&&window.REDUX_DEVTOOLS_EXTENSION(),applyMiddleware(thunk)
)


function App() {


  return (
   <Provider store = {store}>
   <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Login />} />

          </Routes>
        </BrowserRouter>
     

    </div>
    </Provider>


  )
}


export default App;