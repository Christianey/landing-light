import {
  ChakraProvider,
  Flex,
  Text,
  Circle,
  Image,
  Divider,
  Box,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box px={4} className="App">
        <nav>
          <Flex
            justify="flex-end"
            gridGap={4}
            align="center"
            py="4"
            px="8"
            sx={{ "& > .chakra-text": { fontWeight: "bold" } }}
          >
            <Text>TRIPS</Text>
            <Text>RECENTLY VIEWED</Text>
            <Text>BOOKINGS</Text>
            <Circle size="2.5rem" overflow="hidden">
              <Image
                src="cardi_b.jpg"
                fit={"cover"}
                style={{ height: "100%", width: "100%" }}
              />
            </Circle>
          </Flex>
        </nav>

        <Box my={10} px={6}>
          <Divider />
        </Box>

        <Box px={16}>
          <Flex justify="space-between" align="center">
            <Flex direction="column">
              <Text fontWeight={"bold"}>Payment Information</Text>
              <Text fontSize="sm">Choose your menthod of payment</Text>
            </Flex>
            <Flex gridGap={4}>
              <Box w="3rem">
                <Image src="Visa.jpg" />
              </Box>
              <Box w="3rem">
                <Image src="paypal.png" />
              </Box>
              <Box w="3rem">
                <Image src="mastercard.png" />
              </Box>
            </Flex>
          </Flex>

          <Flex wrap={"wrap"} my={6} justify="space-between">
            <Box flexBasis={"30%"} w={"30%"}>
              <Image src="credit_card.png" />
            </Box>
            <Flex
              flexBasis={"50%"}
              sx={{ "& > div": { flexBasis: "48%", mb: 4 } }}
              justify="space-between"
              flexWrap={"wrap"}
            >
              <Flex direction="column">
                <FormLabel>Credit card number</FormLabel>
                <Input />
              </Flex>
              <Flex direction="column">
                <FormLabel>Expiration date</FormLabel>
                <Input />
              </Flex>
              <Flex direction="column">
                <FormLabel>Security code</FormLabel>
                <Input />
              </Flex>
              <Flex direction="column">
                <FormLabel>Postal Code</FormLabel>
                <Input />
              </Flex>

              <Flex direction="column" flexGrow={1} mt={4}>
                <RadioGroup>
                  <Radio value="1">
                    Use this card for the next time purchase
                  </Radio>
                </RadioGroup>
                <Button mt={3}>Add Card</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
