import CustomSection from "components/CustomSection";
import React from "react";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <CustomSection sectionName="contact" sectionTitle="Contact">
      <div>contact section</div>
    </CustomSection>
  );
};
export default Contact;
