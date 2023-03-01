import { FirstStack } from "../components/about/stack";
import type { NextPage } from "next";

interface AboutProps {}

const About: NextPage<AboutProps> = () => {
  return (
    <>
      <main>
        <FirstStack />
      </main>
    </>
  );
};

export default About;
