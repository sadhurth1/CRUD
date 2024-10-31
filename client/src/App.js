import './App.css';
import AddUsers from "./addUser/AddUsers.jsx"
import User from './getUser/User.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Update from "./updateuser/Update.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />,
    },
    {
      path:"/add",
      element:<AddUsers />,
    },
    {
      path:"/Update/:id",
      element:<Update />,
    }
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
