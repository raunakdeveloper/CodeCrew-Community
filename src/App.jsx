import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default App;
