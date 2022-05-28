// import { stringify } from "nodemon/lib/utils";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Questions.css";
import "./options.css";
import loading from "./loading.gif";
import "./gif.css";
function Questions() {
  let copyres;
  let response;
  const [user, setuser] = useState("");
  const [name, setname] = useState("");
  const [rating, setrating] = useState("");
  const [link, setlink] = useState("");
  const userdata = async (user) => {
    let u = await fetch("http://localhost:4000/getuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ id: user }),
    });
    u = await u.json();
    return u;
  };
  const finduser = async (user) => {
    let data = await fetch(`http://localhost:4000/solvedquestions`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ id: user }),
    });
    data = await data.json();
    return data;
  };
  const onchange = (e) => {
    setuser(e.target.value);
  };
  const onclick = async (e) => {
    console.log("working");
    const a = await finduser(user);
    const Userdata = await userdata(user);
    const ibox=document.getElementById("invisible");
    ibox.style.display="flex";
    setname(user);
    setrating(Userdata.result[0].maxRating);
   console.log(Userdata.result[0]);
    setlink(Userdata.result[0].avatar);
    setcolor(a);
    e.preventDefault();
  };
  
  const setcolor = async (user) => {
    let arr = user.result;
    let solved = [];
    for (let i = 0; i <= 15; i++) {
      let div = document.getElementById(`${i}${1}`);
      solved.push(div.innerHTML);
    }
    arr.forEach((element) => {
      for (let i = 1; i <= 15; i++) {
        if (element.problem.name === solved[i]) {
          let div = document.getElementById(`${i}${1}`).parentElement;
          if (element.verdict === "OK") {
            div.style.backgroundColor = "#29fd53";
            div.style.color = "white";
          } else if (
            element.verdict === "WRONG" &&
            div.style.backgroundColor != "green"
          ) {
            div.style.backgroundColor = "red";
          }
        }
      }
    });
    response=copyres;
    console.log(response);
  };
  useEffect(async () => {
    const spinner = document.getElementById("spinner");
    const inner = document.getElementById("innercontainer");
    inner.style.display = "none";
    spinner.style.display = "block";
    response = await getQuestions();
    copyres=response;
    spinner.style.display = "none";
    inner.style.display = "block";
  }, []);
  const onclick800 = async () => {
    let c = 0;
    let res = await response.q800.sort(function (a, b) {
      const lastperson = a.submissions;
      const nextperson = b.submissions;
      if (lastperson > nextperson) {
        return -1;
      } else {
        return 1;
      }
    });
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${res[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 800;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${res[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q900[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick900 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q900[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 900;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q900[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q900[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      if(user==="")
      {

      }
      else
      {
        setcolor(user)
      }
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1000 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1000[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1000;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1000[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1000[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q1100[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1100 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1100[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1100;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q900[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q900[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1200 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1200[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1200;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1200[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1200[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1300 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q900[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1300;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1300[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1300[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1400 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1400[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1400;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q900[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1400[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1500 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1500[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1500;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q900[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1500[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1600 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q900[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1600;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1600[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1600[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1700 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1700[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1700;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1700[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1700[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1800 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1800[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1800;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1800[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1800[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick1900 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q1900[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 1900;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q1900[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q1900[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const onclick2000 = () => {
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q2000[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 2000;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q900[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q2000[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q2000[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  const getQuestions = async () => {
    let id = document.getElementById("spinner");
    // id.style.display = "block";
    let response = await fetch(`http://localhost:4000/getquestions`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    response = await response.json();
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      let pita = idx.parentElement;
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q800[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 800;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q800[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q800[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length - 1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
    return response;
  };
  return (
    <>
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
              <ion-icon
                name="search"
                id="searchicon"
                onClick={onclick}
              ></ion-icon>
            </label>
          </form>
        </div>
        <div id="invisible">
          <div id="one">
            <img src={link} alt="" />
          </div>
          <div id="two">
            <div id="codename">{name}</div>
            <div id="group">
            <div id = "rating">Max. Rating: </div>
            <div id="coderating">{rating}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="options">
          <div className="first">
            <button onClick={onclick800} className="option">
              800
            </button>
            <button onClick={onclick900} className="option">
              900
            </button>
            <button onClick={onclick1000} className="option">
              1000
            </button>
            <button onClick={onclick1100} className="option">
              1100
            </button>
            <button onClick={onclick1200} className="option">
              1200
            </button>
            <button onClick={onclick1300} className="option">
              1300
            </button>
            <button onClick={onclick1400} className="option">
              1400
            </button>
          </div>

          <div className="first">
            <button onClick={onclick1500} className="option">
              1500
            </button>
            <button onClick={onclick1600} className="option">
              1600
            </button>
            <button onClick={onclick1700} className="option">
              1700
            </button>
            <button onClick={onclick1800} className="option">
              1800
            </button>
            <button onClick={onclick1900} className="option">
              1900
            </button>
            <button onClick={onclick2000} className="option">
              2000
            </button>
          </div>
        </div>

        <div id="inner">
          <div id="spinner">
            <img src={loading} alt="spinner" id="gif" />
          </div>
          <div id="innercontainer">
            <div class="list list1">
              <div class="elements0" id="00">
                Index
              </div>
              <div class="elements1" id="01">
                Problem
              </div>
              <div class="elements2" id="02">
                Frequency
              </div>
              <div class="elements3" id="03">
                Rating
              </div>
              <div class="elements4" id="04">
                Tags
              </div>
            </div>
            <div class="list">
              <div class="elements0" id="10"></div>
              <div class="elements1" id="11"></div>
              <div class="elements2" id="12"></div>
              <div class="elements3" id="13"></div>
              <div class="elements4" id="14"></div>
            </div>
            <div class="list">
              <div class="elements0" id="20"></div>
              <div class="elements1" id="21"></div>
              <div class="elements2" id="22"></div>
              <div class="elements3" id="23"></div>
              <div class="elements4" id="24"></div>
            </div>
            <div class="list">
              <div class="elements0" id="30"></div>
              <div class="elements1" id="31"></div>
              <div class="elements2" id="32"></div>
              <div class="elements3" id="33"></div>
              <div class="elements4" id="34"></div>
            </div>
            <div class="list">
              <div class="elements0" id="40"></div>
              <div class="elements1" id="41"></div>
              <div class="elements2" id="42"></div>
              <div class="elements3" id="43"></div>
              <div class="elements4" id="44"></div>
            </div>
            <div class="list">
              <div class="elements0" id="50"></div>
              <div class="elements1" id="51"></div>
              <div class="elements2" id="52"></div>
              <div class="elements3" id="53"></div>
              <div class="elements4" id="54"></div>
            </div>
            <div class="list">
              <div class="elements0" id="60"></div>
              <div class="elements1" id="61"></div>
              <div class="elements2" id="62"></div>
              <div class="elements3" id="63"></div>
              <div class="elements4" id="64"></div>
            </div>
            <div class="list">
              <div class="elements0" id="70"></div>
              <div class="elements1" id="71"></div>
              <div class="elements2" id="72"></div>
              <div class="elements3" id="73"></div>
              <div class="elements4" id="74"></div>
            </div>
            <div class="list">
              <div class="elements0" id="80"></div>
              <div class="elements1" id="81"></div>
              <div class="elements2" id="82"></div>
              <div class="elements3" id="83"></div>
              <div class="elements4" id="84"></div>
            </div>
            <div class="list">
              <div class="elements0" id="90"></div>
              <div class="elements1" id="91"></div>
              <div class="elements2" id="92"></div>
              <div class="elements3" id="93"></div>
              <div class="elements4" id="94"></div>
            </div>
            <div class="list">
              <div class="elements0" id="100"></div>
              <div class="elements1" id="101"></div>
              <div class="elements2" id="102"></div>
              <div class="elements3" id="103"></div>
              <div class="elements4" id="104"></div>
            </div>
            <div class="list">
              <div class="elements0" id="110"></div>
              <div class="elements1" id="111"></div>
              <div class="elements2" id="112"></div>
              <div class="elements3" id="113"></div>
              <div class="elements4" id="114"></div>
            </div>
            <div class="list">
              <div class="elements0" id="120"></div>
              <div class="elements1" id="121"></div>
              <div class="elements2" id="122"></div>
              <div class="elements3" id="123"></div>
              <div class="elements4" id="124"></div>
            </div>
            <div class="list">
              <div class="elements0" id="130"></div>
              <div class="elements1" id="131"></div>
              <div class="elements2" id="132"></div>
              <div class="elements3" id="133"></div>
              <div class="elements4" id="134"></div>
            </div>
            <div class="list">
              <div class="elements0" id="140"></div>
              <div class="elements1" id="141"></div>
              <div class="elements2" id="142"></div>
              <div class="elements3" id="143"></div>
              <div class="elements4" id="144"></div>
            </div>
            <div class="list">
              <div class="elements0" id="150"></div>
              <div class="elements1" id="151"></div>
              <div class="elements2" id="152"></div>
              <div class="elements3" id="153"></div>
              <div class="elements4" id="154"></div>
            </div>
            <div id="space"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
