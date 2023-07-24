import './App.css';
// import Homepage from './pages/index';
import { GlobalContext } from './context';
import { RouterProvider } from 'react-router-dom';
import {router} from "./routers";


function App() {
  const user = {
    username: "riio"
  }

  return (
    <div className='App'>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
