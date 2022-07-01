import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-96 bg-midnight mb-1">
        <div className=" w-1/2 h-96 float-right grid grid-cols-3 gap-4 text-white">
          <div className="m-16">
            <h1>Platforma</h1>
            <a href="#" className="text-xs">
              Creeaza Cont
            </a>
            <br></br>
            <a href="#" className="text-xs font-light">
              Acceseaza Cont
            </a>
          </div>
          <div className="m-16">
            <h1>Meniu</h1>
            <a href="#" className="text-xs">
              Home
            </a>
            <br></br>
            <a href="#" className="text-xs">
              Despre Noi
            </a>
            <br></br>
            <a href="#" className="text-xs">
              Cum Functioneaza
            </a>
            <br></br>
            <a href="#" className="text-xs">
              Sfaturi
            </a>
            <br></br>
            <a href="#" className="text-xs">
              F.A.Q
            </a>
            <br></br>
            <a href="#" className="text-xs">
              Contact
            </a>
          </div>
          <div className="m-16">
            <h1>Legal</h1>
            <a href="#" className="text-xs">
              Termeni si Conditii
            </a>
            <br></br>
            <a href="#" className="text-xs">
              Politica Confidentialitate
            </a>
            <br></br>
            <a href="#" className="text-xs">
              Politica Coockies
            </a>
            <br></br>
            <a href="#" className="text-xs">
              GDPR
            </a>
            <br></br>
            <a href="#" className="text-xs">
              ANPC
            </a>
          </div>
        </div>
      </div>
      <div className="grid place-items-center w-full h-16 bg-slate text-white text-xs">
        Copyright © 2021 . Toate drepturile rezervate.
      </div>
    </div>
  );
};

export default Footer;
