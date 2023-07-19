import CustomSection from "components/CustomSection";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <CustomSection sectionTitle="About" sectionName="about">
      <div>about section</div>
    </CustomSection>
  );
};
export default About;
