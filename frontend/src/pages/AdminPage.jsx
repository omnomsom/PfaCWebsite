import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import {
  Input,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Center,
  Box,
  Flex, // Import Flex from Chakra UI
} from "@chakra-ui/react";

export const AdminPage = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().integer().positive(),
    breed: yup.string().required(),
    gender: yup.string().required(),
    photo: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/animals",
        data
      );
      console.log("Animal added:", response.data);
    } catch (error) {
      console.error("Error adding animal:", error);
    }
  };

  return (
    <Center h="100vh">
      <Box
        p={4}
        borderWidth={1}
        borderRadius="lg"
        shadow="lg"
        bg="white"
        maxW="sm"
        w="100%"
      >
        <Heading p={2} size="lg">Add Animal</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl p={2} isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Name" />
              )}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl p={2} isInvalid={errors.age}>
            <FormLabel>Age</FormLabel>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <Input {...field} type="number" placeholder="Age" />
              )}
            />
            <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
          </FormControl>

          <FormControl p={2} isInvalid={errors.breed}>
            <FormLabel>Breed</FormLabel>
            <Controller
              name="breed"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Breed" />
              )}
            />
            <FormErrorMessage>{errors.breed?.message}</FormErrorMessage>
          </FormControl>

          <FormControl p={2} isInvalid={errors.gender}>
            <FormLabel>Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Gender" />
              )}
            />
            <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
          </FormControl>

          
          <FormControl p={2} isInvalid={errors.link}>
            <FormLabel>Photo</FormLabel>
            <Controller
              name="photo"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Link" />
              )}
            />
            <FormErrorMessage>{errors.link?.message}</FormErrorMessage>
          </FormControl>


          <Flex justify="center">
            {" "}
            {/* Use Flex with justify="flex-end" */}
            <Button m={2} colorScheme="teal" type="submit">
              Add Animal
            </Button>
          </Flex>
        </form>
      </Box>
    </Center>
  );
};
