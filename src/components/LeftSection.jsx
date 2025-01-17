import React from "react";
import IntroButton from "./buttons/IntroButton";
import Button from "./buttons/Button";
import OutLineButton from "./buttons/OutLineButton";
import Socials from "./Socials";
import { useState, useEffect } from "react";
import ChangingText from "./ui/ChangingText";

const LeftSection = () => {
  return (
    <section className="flex flex-col gap-5 w-1/2">
      <div>
        <IntroButton />
      </div>
      <h1 className="text-7xl font-semibold">
        Make your websites look 10x <ChangingText />
      </h1>
      <p className="text-lg text-gray-400">
        Copy paste the most trending components and use them in your websites
        without having to worry about styling and animations.
      </p>
      <div className="flex gap-3 pt-4">
        <Button text={"Browse Components"} />
        <OutLineButton text={"Custom Components"} />
      </div>
      <Socials />
    </section>
  );
};

export default LeftSection;
