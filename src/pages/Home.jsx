import React from "react";
import Container from "../components/ui/Container";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import MiddleComponent from "../components/MiddleComponent";

function Home() {
  return (
    <main>
      {/* Top section */}
      <section>
        <Container>
          <main className="flex justify-between gap-16">
            <LeftSection />
            <RightSection />
          </main>
        </Container>
      </section>
      {/* Middle section */}
      <section>
        <MiddleComponent />
      </section>
    </main>
  );
}

export default Home;
