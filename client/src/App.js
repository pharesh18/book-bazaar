import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyActivity from './Pages/MyActivity';
import SellBook from './Pages/SellBook';
import SignUp from './Pages/SignUp';
import Product from './Pages/Product';
import AddBook from './Pages/AddBook';
import AdminHome from './Pages/AdminHome';
import OrderFromCustomer from './Pages/OrderFromCustomer';
import Orders from './Pages/Orders';
import Feedback from './Pages/Feedback';
import AdminPurchased from './Pages/AdminPurchased';
import AdminSold from './Pages/AdminSold';
import AdminLogin from './Pages/AdminLogin';
import AdminSignUp from './Pages/AdminSignUp';
import Checkout from './Pages/Checkout';
import ViewBook from './Pages/ViewBook';
import Update from './Pages/Update';
import ViewRequest from './Pages/ViewRequest';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from './actions/bookAction';
import UpdateProfile from './Pages/UpdateProfile';
import ViewCart from './Pages/ViewCart';
import Dashboard from './Pages/Dashboard';
import UpdateAdminProfile from './Pages/UpdateAdminProfile';
import GiveFeedback from './Pages/GiveFeedback';

var flag = 1;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  let isAdmin = false;
  const userLogin = useSelector((state) => state.userLogin)
  if (userLogin) {
    const { userInfo } = userLogin;
    if (userInfo) {
      isAdmin = userInfo.isAdmin;
    }
  }

  if (!isAdmin) {
    return (
      <>
        <Router>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/sellbook' element={<SellBook></SellBook>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route path='/myactivity' element={<MyActivity></MyActivity>}></Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/cart/:id' element={<Cart></Cart>}></Route>
              <Route path='/checkout/:id' element={<Checkout></Checkout>}></Route>
              <Route path='/product/:id' element={<Product></Product>}></Route>
              <Route path='/updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
              <Route path='/viewcart' element={<ViewCart></ViewCart>}></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <div className="App">
            <Routes>
              <Route path='/' element={<Dashboard></Dashboard>}></Route>
              <Route path='/books' element={<AdminHome></AdminHome>}></Route>
              <Route path='/addbook' element={<AddBook></AddBook>}></Route>
              <Route path='/orders' element={<Orders></Orders>}></Route>
              <Route path='/bookrequests' element={<OrderFromCustomer></OrderFromCustomer>}></Route>
              <Route path='/feedback' element={<Feedback></Feedback>}></Route>
              <Route path='/adminpurchased' element={<AdminPurchased></AdminPurchased>}></Route>
              <Route path='/adminsold' element={<AdminSold></AdminSold>}></Route>
              <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
              <Route path='/adminsignup' element={<AdminSignUp></AdminSignUp>}></Route>
              <Route path='/view/:id' element={<ViewBook></ViewBook>}></Route>
              <Route path='/update/:id' element={<Update></Update>}></Route>
              {/* <Route path='/update' element={<Update></Update>}></Route> */}
              <Route path='/viewrequest' element={<ViewRequest></ViewRequest>}></Route>
              <Route path='/givefeedback/:id' element={<GiveFeedback></GiveFeedback>}></Route>
              {/* <Route path='/updateprofile' element={<UpdateProfile></UpdateProfile>}></Route> */}
              <Route path='/updateadminprofile' element={<UpdateAdminProfile></UpdateAdminProfile>}></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
