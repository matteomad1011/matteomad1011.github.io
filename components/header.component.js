import { Flex, Heading, Link, Spacer, Box, Divider } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box p={4}>
      <Flex>
        <Heading>MC</Heading>
        <Spacer></Spacer>
        <Link>Github</Link>
      </Flex>
      <Divider></Divider>
    </Box>
  );
}
