import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/header.component";
import { useRouter } from "next/router";

export default function Home() {
  const git = "https://github.com/matteomad1011";
  const linkedin = "https://linkedin.com/in/matteo-cavallo-515095194";
  const router = useRouter();
  return (
    <Center>
      <Box bgColor="white" maxW="xl">
        <Box p={8}>
          <Flex>
            <Heading fontSize="md">that's me</Heading>
            <Spacer></Spacer>
            <HStack spacing={4}>
              <Link
                color="purple.600"
                style={{ fontWeight: "bold" }}
                isExternal
                href={git}
              >
                Github
              </Link>
              <Link
                color="purple.600"
                style={{ fontWeight: "bold" }}
                isExternal
                href={linkedin}
              >
                LinkedIn
              </Link>
            </HStack>
          </Flex>
        </Box>
        <Stack p={4}>
          <Center>
            <Stack align="center">
              <Avatar name="Matteo Cavallo" src="pp.jpeg" size="2xl" />
              <Heading as="h1" size="2xl" textAlign="center">
                Matteo Cavallo
              </Heading>
              <Text fontSize="lg">DEVELOPER</Text>
            </Stack>
          </Center>
          <Container>
            <Heading fontSize="2xl" my={4}>
              About me
            </Heading>
            Hello, I'm Matteo Cavallo, a software engineering student from Italy
            at Politecnico of Milano. I have trained myself to be that kind of
            person whose presence can make the real differerence inside a
            work-space.
          </Container>
          <Container>
            <Heading fontSize="2xl" my={4}>
              Contact me
            </Heading>
            Want to reach out? Contact me by{" "}
            <Link
              href="mailto:m.cavallo1011@gmail.com"
              style={{ textDecoration: "underline" }}
              color="purple.600"
            >
              Email
            </Link>
            ,{" "}
            <Link
              style={{ textDecoration: "underline" }}
              color="purple.600"
              isExternal
              href={git}
            >
              Github
            </Link>
            {" or "}
            <Link
              style={{ textDecoration: "underline" }}
              color="purple.600"
              isExternal
              href={linkedin}
            >
              Linkedin
            </Link>
            <Heading></Heading>
          </Container>
          <Box p={4}>
            <Heading fontSize="2xl" my={4}>
              Last projects
            </Heading>
            <HStack>
              <Box
                onClick={() => window.open("https://avvento-elis.vercel.app")}
                rounded="md"
                boxShadow="md"
                w="100%"
                maxW="sm"
              >
                <Flex justify="space-between" p={2}>
                  <Box p={2}>
                    <Heading fontSize="md">ELIS - Avvento 2020</Heading>
                    <Text color="gray.700">Dic 2020</Text>
                  </Box>
                  <Square bgColor="red.200" size="80px">
                    <Image
                      src="avvento.png"
                      h="100%"
                      w="100%"
                      objectFit="cover"
                    />
                  </Square>
                </Flex>
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}
