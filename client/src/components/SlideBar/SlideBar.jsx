import React from "react";
import { useNavigate } from "react-router-dom";

const SlideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#2E8B57]">
      <div className="font-semibold text-5xl p-5 text-white ">Vefy</div>
      <div className="text-sm font-medium text-white px-5 py-1">
        Your Personal Health Companion
      </div>

      <nav className="pt-[50vh] pl-8 text-slate-800 text-xl font-medium">
        <div
          onClick={() => navigate("/profile")}
          className="py-4 cursor-pointer hover:text-green-100 transition-colors"
          tabIndex={0}
          role="button"
          aria-label="Go to Profile"
        >
          Profile
        </div>

        <div
          onClick={() => navigate("/recipes")}
          className="py-4 cursor-pointer hover:text-green-100 transition-colors"
          tabIndex={0}
          role="button"
          aria-label="Go to Recipes"
        >
          Recipes
        </div>

        <div
          onClick={() => navigate("/bookmarks")}
          className="py-4 cursor-pointer hover:text-green-100 transition-colors"
          tabIndex={0}
          role="button"
          aria-label="Go to Bookmarks"
        >
          Bookmarks
        </div>

        <div
          onClick={() => navigate("/")}
          className="py-4 cursor-pointer hover:text-green-100 transition-colors"
          tabIndex={0}
          role="button"
          aria-label="Go to Login"
        >
          Login
        </div>
      </nav>
    </div>
  );
};

export default SlideBar;
