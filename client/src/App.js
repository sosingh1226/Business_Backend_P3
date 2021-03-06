import './App.css';
import React from 'react';
import './App.css';
// import Homepage from "./Pages/Homepage";
// import Login from "./Pages/Loginpage";
// import Signup from "./Pages/Signup";


// function App() {
//   const [userData, setUserData] = useState({
//     user: undefined,
//     token: undefined,
//   });

//   const checkLoggedIn = async () => {
//     let token = localStorage.getItem("auth-token");

//     if (token === null) {
//       localStorage.setItem("auth-token", "");
//       token = "";
//     } else {
//       const userRes = await axios.get("/users/", {
//         headers: { "x-auth-token": token },
//       });

//       setUserData({
//         token,
//         user: userRes.data,
//       });
//     }
//   };

//   const logout = () => {
//     setUserData({
//       token: undefined,
//       user: undefined,
//     });

//     localStorage.setItem("auth-token", "");
//   };

//   useEffect(() => {
//     checkLoggedIn();
//   }, []);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         {!userData.user ? (
//           <>
//             <Link to="/signup">Signup</Link>
//             <Link to="/login">Login</Link>
//           </>
//         ) : (
//           <Link to="/login" onClick={logout}>
//             Logout
//           </Link>
//         )}

//         <UserContext.Provider value={{ userData, setUserData }}>
//           <Switch>
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/" component={Home} />
//           </Switch>
//         </UserContext.Provider>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
