import { Text } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <CustomSection sectionTitle="About" sectionName="about">
      <Text>
        Hello, I’m Jeffy Evangelista. From a young age, I’ve been fascinated by
        the inner workings of technology, enabling us to connect and innovate.
        Learning is a never-ending journey, and I embrace every opportunity to
        expand my knowledge and skills. In this ever-evolving landscape, I
        always stay up-to-date on the latest developments, whether it's new
        programming languages or other tools for software development. When I’m
        not engrossed in coding, you can often find me indulging in my favorite
        pastimes. I'm an avid anime enthusiast, a dedicated gamer, and I also
        prioritize regular exercise to maintain a healthy body and mind. Let's
        connect and explore the wonders of technology together! You can reach me
        at jeffy.evangelista@email.com or find me on LinkedIn.
      </Text>
    </CustomSection>
  );
};
export default About;
