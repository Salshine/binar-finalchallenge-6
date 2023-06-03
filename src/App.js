import React from 'react';
import './App.scss';
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'

import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/loginregis/Login';
import Register from './pages/loginregis/Register';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const Layout = () => {
    return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/home',
          element : <Home/>
        },
        {
          path : '/:category',
          element : <Catalog/>
        },
        {
          path : '/:category/:id',
          element : <Detail/>
        },
        {
          path : '/:category/search/:keyword',
          element : <Catalog/>
        },
      ],
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },

  ])

  return (

    <div>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <RouterProvider router={router}/>
        </GoogleOAuthProvider>
      </Provider>
    </div>
    



    // <BrowserRouter>
    //   <Route render={
    //     props => (
    //       <>
    //         <Header {...props} />
    //         <Routing/>
    //         <Footer/>
    //       </>
    //     )
    //   } />
    // </BrowserRouter>
    

    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       animate={true}
    //       element={
    //         <React.Fragment>
    //           <Header />
    //           <Home/>
    //           <Footer />
    //         </React.Fragment>
    //       }
    //     />

    //     <Route
    //       path="/movie"
    //       element={
    //         <React.Fragment>
    //           <Header />
    //           <Catalog />
    //           <Footer/>
    //         </React.Fragment>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    

    // <BrowserRouter>
    // <Header />
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/Catalog" element={<Catalog />}/>
    //   <Route path="/Detail" element={<Detail />}/>
    // </Routes>
    // <Footer />
    
    // </BrowserRouter>
  );
}

export default App;
