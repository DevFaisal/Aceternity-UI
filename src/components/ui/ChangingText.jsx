import React, { useEffect, useState } from "react";

function ChangingText() {
  const texts = ["better", "modern", "beautiful", "awesome"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <span className="">{texts[index]}</span>;
}

export default ChangingText;
