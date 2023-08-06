import{s as i,j as t}from"./index-8efcf2de.js";const n=i.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${e=>e.theme.text};
  border-top: 2px solid ${e=>e.theme.text};

  background-color: ${e=>`rgba(${e.theme.textRgba},0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`,o=i.h1`
  font-size: ${e=>e.theme.fontxl};
  color: ${e=>e.theme.text};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;

  text-shadow: 1px 1px 2px ${e=>e.theme.text};

  @media (max-width: 64em) {
    font-size: ${e=>e.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: ${e=>e.theme.fontxl};
    padding: 2rem 0;

    width: 100%;
  }
`,r=i.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`,a=i.button`
  display: inline-block;
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.hoverColor};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${e=>e.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }
  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${e=>e.theme.fontsm};
  }
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${e=>e.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`,s=()=>t.jsxs(n,{children:[t.jsxs(o,{children:["Football is an infinite game. There is no end, no beginning, but it continues in cycle."," "]}),t.jsx(r,{children:t.jsx(a,{children:"Play Now"})})]});export{s as default};
