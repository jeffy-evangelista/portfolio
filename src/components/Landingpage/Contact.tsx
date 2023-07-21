import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import SocialLink from "components/Contact/SocialLink";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/jefferson-ramos-0b4a6a1b3/",
      icon: <FaLinkedin color={"#0a66c2"} size={30} />,
      label: "LinkedIn",
      color: "blue",
    },
    {
      link: "https://www.linkedin.com/in/jefferson-ramos-0b4a6a1b3/",
      icon: <FaGithub color={"#35363a"} size={30} />,
      label: "Github",
      color: "gray",
    },
    {
      link: "https://www.linkedin.com/in/jefferson-ramos-0b4a6a1b3/",
      icon: <HiOutlineMail color={"#d33f34"} size={30} />,
      label: "Mail",
      color: "red",
    },
    {
      link: "https://www.linkedin.com/in/jefferson-ramos-0b4a6a1b3/",
      icon: <FaFacebook color={"#1877f2"} size={30} />,
      label: "Facebook",
      color: "blue",
    },
    {
      link: "https://www.linkedin.com/in/jefferson-ramos-0b4a6a1b3/",
      icon: <BsPersonLinesFill color={"teal"} size={30} />,
      label: "Resume",
      color: "teal",
    },
  ];
  return (
    <CustomSection sectionName="contact" sectionTitle="Contact">
      <Card w={{ base: "350px", md: "500px" }}>
        <CardBody>
          <Flex justify={"space-between"}>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                link={link.link}
                icon={link.icon}
                label={link.label}
                color={link.color}
              />
            ))}
          </Flex>
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter color={"brand.darkGrey"} bg={"white"} px="4">
              or
            </AbsoluteCenter>
          </Box>
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
