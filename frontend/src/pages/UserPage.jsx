import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SimpleGrid,
  Text,
  VStack,
  Image,
  Box,
  Heading,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react";

function UserPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/animals").then((response) => {
      setAnimals(response.data);
    });
  }, []);

  return (
    <div>
      <Heading p={2} size="lg" textAlign="center">
        Help us find a forever home!
      </Heading>
      <Center>
        <Box p={6} bg="white" maxW="100%" w="90%" align="center">
          <SimpleGrid
            spacing={4}
            columns={[2, 3, 4]}
          >
            {animals.map((animal) => (
              <Card key={animal._id} maxW="sm">
                <Box height="200px" position="relative">
                  <Image
                    src={animal.photo}
                    alt={animal.name}
                    borderRadius="lg"
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="100%"
                    position="absolute"
                    top="0"
                    left="0"
                  />
                </Box>

                <CardBody>
                  <VStack spacing={3}>
                    <Heading size="md">{animal.name}</Heading>
                    <Text fontSize="sm">{`Age: ${animal.age}`}</Text>
                    <Text fontSize="sm">{`Breed: ${animal.breed}`}</Text>
                    <Text fontSize="sm">{`Gender: ${animal.gender}`}</Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
}

export default UserPage;
