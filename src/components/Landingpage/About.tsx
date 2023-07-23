import { Text } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <CustomSection sectionTitle="About" sectionName="about">
      <Text maxW={"container.md"}>
        Hello, I’m Jeffy Evangelista, a passionate web developer with an thirst
        for learning and a profound fascination with technology. From a young
        age, I've been captivated by the inner workings of software that enable
        us to connect and innovate.
      </Text>
      <Text maxW={"container.md"}>
        Learning is a never-ending journey, and I embrace every opportunity to
        expand my knowledge and skills. In this ever-evolving landscape, I
        always stay up-to-date on the latest developments, whether it's new
        programming languages or other tools for software development.
      </Text>
      <Text maxW={"container.md"}>
        {" "}
        When I’m not engrossed in coding, you can often find me indulging in my
        favorite pastimes. I'm an avid anime enthusiast, a dedicated gamer, and
        I also prioritize regular exercise to maintain a healthy body and mind.
      </Text>
    </CustomSection>
  );
};
export default About;
