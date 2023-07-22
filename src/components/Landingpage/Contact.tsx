import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import CustomSection from "components/CustomSection";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialLink from "components/Contact/SocialLink";
import Resume from "assets/Jeffy-Evangelista.pdf";

const Contact = () => {
  const { colorMode } = useColorMode();
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/jeffy-evangelista-b5951a13a/",
      icon: <FaLinkedin size={30} />,
      label: "LinkedIn",
    },
    {
      link: "https://github.com/jeffigy",
      icon: <FaGithub size={30} />,
      label: "Github",
    },
  ];
  return (
    <CustomSection sectionName="contact" sectionTitle="Contact">
      <Card>
        <CardBody>
          <Stack direction={{ base: "column", md: "row" }}>
            <Flex
              justify={{ base: "start", md: "space-around" }}
              direction={"column"}
              w={"330px"}
              align={{ base: "center", md: "start" }}
              px={{ base: "0px", md: "50px" }}
            >
              <Stack
                align={{ base: "center", md: "start" }}
                spacing={0}
                mb={{ base: "20px", md: "0px" }}
              >
                <Text>Email me at</Text>
                <Text color={colorMode === "dark" ? "teal.200" : "teal"}>
                  ejeffydev@gmail.com
                </Text>
              </Stack>

              <Stack
                align={{ base: "center", md: "start" }}
                spacing={0}
                mb={{ base: "20px", md: "0px" }}
              >
                <Text>Connect With Me</Text>
                <HStack gap={5}>
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={index}
                      link={link.link}
                      icon={link.icon}
                      label={link.label}
                    />
                  ))}
                </HStack>
              </Stack>

              <Button
                mb={{ base: "20px", md: "0px" }}
                as={Link}
                variant={"outline"}
                target={"blank"}
                href={Resume}
                rel="noreferrer"
                download={"Jeffy-Evangelista-Resume.pdf"}
              >
                View My CV
              </Button>
            </Flex>
            <Flex direction={"column"} w={"330px"}>
              <form
                method="Post"
                action="https://getform.io/f/7fbfb199-280e-44d8-b4f8-ef09e25d8ed6"
              >
                <Stack direction={"column"} spacing={5}>
                  <Input
                    name="name"
                    placeholder="Name"
                    type="string"
                    isRequired
                  />
                  <Input
                    name="Email"
                    placeholder="email"
                    type="email"
                    isRequired
                  />
                  <Textarea
                    focusBorderColor="teal"
                    name="message"
                    placeholder="Message"
                    rows={5}
                  />
                  <Button color={"white"} type="submit">
                    {" "}
                    Let's Talk
                  </Button>
                </Stack>
              </form>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </CustomSection>
  );
};
export default Contact;
