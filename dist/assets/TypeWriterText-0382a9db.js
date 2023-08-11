import{s as a,j as e,T as n,B as s}from"./index-fb37b949.js";const i=a.h2`
  font-size: ${t=>t.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${t=>t.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    
  }
  .text {
    color: ${t=>t.theme.hoverColor};
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
`,r=a.h3`
  font-size: ${t=>t.theme.fontxl};
  text-transform: capitalize;
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
`,o=a.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    height: 0vh;

    button {
      margin: 0 auto;
    }
  }
`,m=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["STARK Easy",e.jsx(n,{options:{autoStart:!0,loop:!0},onInit:t=>{t.typeString('<span class="text">Learn!</span>').pauseFor(1e3).deleteAll().typeString('<span class="text">Play!</span>').pauseFor(1e3).deleteAll().typeString('<span class="text">Test your skills!</span>').pauseFor(1e3).deleteAll().start()}})]}),e.jsx(r,{children:"Your Starknet Academy"}),e.jsx(o,{children:e.jsx(s,{text:"Start the Adventure",link:"/connect"})})]});export{m as default};
