import React from "react";

const Header = () => {
  return (
    <div className=" p-6 w-full text-center text-2xl text-neutral-100">
      <img
        className="my-0 mx-auto"
        src="/img/fifa.png"
        width={150}
        height={80}
        alt="FIFA logo photo"
      />
      <h1>FIFA WORLD CUP QATAR 2022</h1>
      <h2>GROUPS</h2>
    </div>
  );
};

export default Header;
