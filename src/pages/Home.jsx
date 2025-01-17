import React from "react";
import Container from "../components/ui/Container";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

function Home() {
  return (
    <main>
      <Container>
        <main className="flex justify-between gap-14 pt-36 h-screen">
          <LeftSection />
          <RightSection />
        </main>
      </Container>
    </main>
  );
}

export default Home;
