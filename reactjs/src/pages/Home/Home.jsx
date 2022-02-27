import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import Navbar from "../../components/Navbar/Navbar";
import Body from "../../components/Body/Body";
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function Home(props) {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("user"));
  let history = useHistory();

  useEffect(() => {
    console.log("user is: ", user);
    if (user && user.role === "admin") history.push("/dashboard");
    return () => {};
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Breadcrumb />  */}

      <Body />
    </div>
  );
}

export default Home;
