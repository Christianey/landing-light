import { useState } from "react";
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
  Radio,
  Button,
} from "@chakra-ui/react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";

function App() {
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    postalCode: "",
  });
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getZIPProps,
  } = usePaymentInputs();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <ChakraProvider>
      <Box px={[1, 2, 3, 4]} className="App" pb={6}>
        <nav>
          <Flex
            justify={["space-between", "space-between", "flex-end", "flex-end"]}
            gridGap={[2, 2, 4, 4]}
            fontSize={[".8rem", "1.2rem", "1.2rem", "1.2rem"]}
            align="center"
            py={[1, 2, 3, 4]}
            px={[2, 3, 3, 4]}
            sx={{
              "& > .chakra-text": { fontWeight: "bold", whiteSpace: "pre" },
            }}
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

        <Box my={[1, 2, 3, 4]} px={6}>
          <Divider />
        </Box>

        <Box px={[2, 4, 8, 16]}>
          <Flex
            justify="space-between"
            direction={["column", "row", "row", "row"]}
            align="center"
            gridGap={[4, null, null, null]}
          >
            <Flex
              direction="column"
              align={["center", "flex-start", "flex-start", "flex-start"]}
            >
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

          <Flex
            wrap={"wrap"}
            my={6}
            direction={["column", "column", "row", "row"]}
            justify="space-between"
            align="center"
          >
            <Flex
              justify="center"
              flexBasis={["100%", "100%", "40%", "30%"]}
              w={["100%", "100%", "40%", "30%"]}
              mb={[4, 4, 0, 0]}
            >
              <Image
                src="credit_card.png"
                boxSize={"100%"}
                maxW={["70%", "50%", "100%", "100%"]}
              />
            </Flex>

            <Flex
              direction="column"
              flexBasis={"50%"}
              sx={{
                "& > div > div": {
                  flexBasis: ["98%", "98%", "98%", "48%"],
                  mb: 4,
                },
              }}
            >
              {meta.isTouched && meta.error && (
                <span style={{ color: "red" }}>Error: {meta.error}</span>
              )}
              <Flex justify="space-between" flexWrap={"wrap"}>
                <Flex direction="column">
                  <FormLabel>Credit card number</FormLabel>
                  <PaymentInputsWrapper>
                    <Input
                      {...getCardNumberProps({ onChange: handleChange })}
                      name="cardNumber"
                      value={formValues.cardNumber}
                    />
                  </PaymentInputsWrapper>
                </Flex>
                <Flex direction="column">
                  <FormLabel>Expiration date</FormLabel>
                  <Input
                    {...getExpiryDateProps({ onChange: handleChange })}
                    name="expirationDate"
                    value={formValues.expirationDate}
                  />
                </Flex>
                <Flex direction="column">
                  <FormLabel>Security code</FormLabel>
                  <Input
                    {...getCVCProps({ onChange: handleChange })}
                    name="cvc"
                    value={formValues.cvc}
                  />
                </Flex>
                <Flex direction="column">
                  <FormLabel>Postal Code</FormLabel>
                  <Input
                    {...getZIPProps({ onChange: handleChange })}
                    name="postalCode"
                    value={formValues.postalCode}
                  />
                </Flex>
              </Flex>
              <Flex direction="column" flexGrow={1}>
                <Radio value="1" mb={4}>
                  Use this card for the next time purchase
                </Radio>
                <Button color="white" bg="blue">
                  Add Card
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Divider my={4} />

          <Flex direction="column" fontWeight="bold">
            <Flex justify="space-between">
              <Text>Subtotal</Text>
              <Text>N2497</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Estimated Tax </Text>
              <Text>N110.64</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Promotional Code Z4KXLM9A</Text>
              <Text>N-60</Text>
            </Flex>
          </Flex>

          <Divider my={4} />
          <Flex justify="space-between" align="center">
            <Button color="white" bg="blue">
              Complete Payment
            </Button>
            <Text fontWeight="900">TOTAL: N2556.64</Text>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
