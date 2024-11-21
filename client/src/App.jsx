import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import SlideBar from "./components/SlideBar/SlideBar";
import RecepePage from "./components/RecepePage/RecepePage.jsx";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase.js";
import "./config/firebase.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Set up the listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="">
        <BrowserRouter>
          <div className="flex gap-[15vh]">
            <div className="w-[35vh]">
              {isLoggedIn && (
                <div className="fixed h-screen w-[35vh]">
                  <SlideBar />
                </div>
              )}
            </div>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/recipes" element={<RecepePage />} />

              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
