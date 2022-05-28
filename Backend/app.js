const express = require("express");
const fetch = require("node-fetch");
const api = require("../Backend/server/api");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 4000;
const path = require("path");
app.use(express.json());
app.use("/api", api);
// app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.post("/getuser", async (req, res) => {
  let data = await fetch(
    `https://codeforces.com/api/user.info?handles=${req.body.id}`
  );
  data = await data.json();
  if (data.status === "FAILED") {
    res.status(404).send("Invalid user name");
  } else {
    console.log(data.result[0]);
    res.status(200).json(data);
  }
});

app.post("/solvedquestions", async (req, res) => {
  let solvedquestion = await fetch(
    ` https://codeforces.com/api/user.status?handle=${req.body.id}`
  );
  solvedquestion = await solvedquestion.json();
  console.log(solvedquestion.problems);
  res.status(200).send(solvedquestion);
});

app.get("/getquestions", async (req, res) => {
  let questions = await fetch(
    "https://codeforces.com/api/problemset.problems?tags=implementation"
  );
  questions = await questions.json();
  let q800 = [];
  let q900 = [];
  let q1000 = [];
  let q1100 = [];
  let q1200 = [];
  let q1300 = [];
  let q1400 = [];
  let q1500 = [];
  let q1600 = [];
  let q1700 = [];
  let q1800 = [];
  let q1900 = [];
  let q2000 = [];
  let problems = questions.result.problems;
  let stats = questions.result.problemStatistics;
  problems.forEach((element, index) => {
    let temp = {
      name: element.name,
      tags: element.tags,
      submissions: stats[index].solvedCount,
    };
    switch (element.rating) {
      case 800:
        q800.push(temp);
        break;
      case 900:
        q900.push(temp);
        break;
      case 1000:
        q1000.push(temp);
        break;
      case 1100:
        q1100.push(temp);
        break;
      case 1200:
        q1200.push(temp);
        break;
      case 1300:
        q1300.push(temp);
        break;
      case 1400:
        q1400.push(temp);
      case 1500:
        q1500.push(temp);
        break;
      case 1600:
        q1600.push(temp);
        break;
      case 1700:
        q1700.push(temp);
        break;
      case 1800:
        q1800.push(temp);
        break;
      case 1900:
        q1900.push(temp);
        break;
      case 2000:
        q2000.push(temp);
        break;
      default:
        break;
    }
  });
  // q1800.forEach((element)=>{
  //     console.log(element);
  // })
  // console.log(questions);
  q800.sort(function (a, b) {
    const lastperson = a.submissions;
    const nextperson = b.submissions;
    if (lastperson > nextperson) {
      return -1;
    } else {
      return 1;
    }
  });
  q900.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1000.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1100.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1200.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1300.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1400.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1500.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1600.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1700.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1800.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q1900.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  q2000.sort(function(a,b){
    const lastperson=a.submissions;
    const nextperson=b.submissions;
    if(lastperson>nextperson)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  });
  const dk = {
    q800,
    q900,
    q1000,
    q1100,
    q1200,
    q1300,
    q1400,
    q1500,
    q1600,
    q1700,
    q1800,
    q1900,
    q2000,
  };
  res.status(200).json(dk);
});
app.listen(port, () => {
  console.log(`API at http://localhost:${port}`);
});
