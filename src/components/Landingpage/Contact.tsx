import {
  Button,
  Card,
  CardBody,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import React from "react";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <CustomSection sectionName="contact" sectionTitle="Contact">
      <Card w={{ base: "350px", md: "500px" }}>
        <CardBody>
          <form
            method="Post"
            action="https://getform.io/f/7fbfb199-280e-44d8-b4f8-ef09e25d8ed6"
          >
            <Stack direction={"column"} spacing={5}>
              <Input name="name" placeholder="Name" type="string" isRequired />
              <Input name="Email" placeholder="email" type="email" isRequired />
              <Textarea name="message" placeholder="Message" rows={10} />
              <Button bg={"brand.teal"} color={"white"} type="submit">
                {" "}
                Let's Talk
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </CustomSection>
  );
};
export default Contact;
