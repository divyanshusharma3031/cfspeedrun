import React, { useState } from "react";
import "./Searchbox.css"
function Searchbox() {
  const [user, setuser] = useState("");
  const finduser=async (user)=>{
    let data = await fetch(`http://localhost:4000/solvedquestions`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({id:user})
    });
    data=await data.json();
    return data;
  }
  const onchange=(e)=>{
    setuser(e.target.value);
  }
  const onclick=async (e)=>{
    console.log("working");
    const a=await finduser(user);
    console.log(a);
    e.preventDefault();
  }
  return (
    <div id="container">
      <div id="divform">
        <form action="fds.js" id="form1">
          <input
            type="text"
            name="search1"
            id="search1"
            placeholder="Codeforces Handle"
            onFocus="toggle()"
            onBlur="toggle1()"
            value={user}
            onChange={onchange}
          />
          <label for="search1" id="labelsearch">
            <ion-icon name="search" id="searchicon" onClick={onclick}></ion-icon>
          </label>
        </form>
      </div>
      <div id="invisible"></div>
    </div>
  );
}

export default Searchbox;
