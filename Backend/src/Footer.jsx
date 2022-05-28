import React, { useEffect } from "react"; 
import "./Footer.css"

function Footer() {
    useEffect(() => {
        updatedate();
      }, [])
  const updatedate = () => {
    const footerdate = document.getElementById("footerdate");
    let s = "";
    let date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    s += "    " + months[date.getMonth()] + " ";
    s = s + date.getFullYear() + "     ";
    console.log(s);
    footerdate.innerHTML = s;
  };
  return (
    <footer>
      Vihaan 5.0 &copy;&nbsp;<span id="footerdate"></span>&nbsp;Noob-Devs
    </footer>
  );
}

export default Footer;
