import{s as n,j as e,T as a,B as i}from"./index-5241c94e.js";const r=n.h2`
  font-size: ${t=>t.theme.fontxxxl};
  text-transform: capitalize;
  width: 90%;
  text-align: center;
  color: ${t=>t.theme.text};
  margin-top: -2%;
  align-self: flex-start;

  span {
    text-transform: uppercase;
    
  }
  .text {
    color: #d81f3f;
  }

  @media (max-width: 70em) {
    font-size: ${t=>t.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`,l=n.h2`
  font-size: ${t=>t.theme.fontxxl};
  text-transform: capitalize;
  text-align: center;
  width: 90%;
  margin-top: 10%;
  color: ${t=>t.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    
  }
  .text {
    color: #d81f3f;
  }

  @media (max-width: 70em) {
    font-size: ${t=>t.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`,s=n.h3`
  font-size: ${t=>t.theme.fontxl};
  text-transform: capitalize;
  text-align: center;
  margin-left: 20px;
  margin-top: 2%;
  .text {
    color: ${t=>t.theme.hoverColor};
  }

  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    height: 15vh;
    font-size: ${t=>t.theme.fontlg};
    text-align: center;
  }

  animation: appearAnimation 5.5s ease-in-out both;
`,o=n.div`
  width: 80%;
  text-align: center;
  margin-top: 5%;
  margin-left: 20px;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    height: 0vh;

    button {
      margin: 0 auto;
    }
  }
`,x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"STARK Easy"}),e.jsx(s,{children:"Your Starknet Academy"}),e.jsx(l,{children:e.jsx(a,{options:{autoStart:!0,loop:!0},onInit:t=>{t.typeString('<span class="text">Learn!</span>').pauseFor(1e3).deleteAll().typeString('<span class="text">Play!</span>').pauseFor(1e3).deleteAll().typeString('<span class="text">Test your skills!</span>').pauseFor(1e3).deleteAll().start()}})}),e.jsx(o,{children:e.jsx(i,{text:"Start the Adventure",link:"/connect"})})]});export{x as default};
