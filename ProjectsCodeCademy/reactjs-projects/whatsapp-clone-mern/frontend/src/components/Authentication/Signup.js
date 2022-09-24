import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout"; //This is a vertical stack of elements instead of normal DIV*
import { useToast } from "@chakra-ui/toast";
import axios from "axios"; //  Axios is a Javascript library Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
import React, { useState } from "react";
import { useHistory } from "react-router";

const Signup = () => {
  const [name, setName] = useState(); // STATE in general stores its data in the form of an array
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState(); // for pic we use Cloudinary https://cloudinary.com/ 
  const [loading, setLoading] = useState(false); // for loading pic
  const [show, setShow] = useState(false); // {/* If the word SHOW is hidden then show it after clicking AND vice versa. In the InputRightElement*/}
  const handleClick = () => setShow(!show);
  //const history = useHistory();
  const toast = useToast();
 
  const postDetails = (pics) => {
    setLoading(true);
    if (pic === undefined) {
      toast({
        title: "Pls select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pic.type !== "image/jpeg" && pic.type !== "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "whatsapp-clone");
      data.append("cloud_name", "rez-cloudinary");
      fetch("https://api.cloudinary.com/v1_1/rez-cloudinary/image/upload", {
        method: "post",
        body: data,
      })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Pls select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };
  const submitHandler = () => { };


  return (
    <VStack spacing="5px">
      {" "}
      {/* This is a vertical stack creates vertical column/fields */}
      <FormControl id="first-name" isRequired>
        {" "}
        {/* This is to build a form from ChakraUI*/}
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      {/* This is a vertical stack of elements instead of normal DIV*/}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          {/* This is a group of input fields, so we can have few actions/activities in ONE filed */}
          <Input
            type={show ? "text" : "password"} // If the word SHOW is hidden then show it after clicking AND vice versa
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {/* This is the word SHOW/HIDE button in the filed */}
              {show ? "Hide" : "Show"}
              {/* If the word SHOW is hidden then show it after clicking AND vice versa */}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* Filed for Confirmin the Password */}
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* This is the filed for Picture/Profile*/}
      <FormControl id="pic">
        <FormLabel>Upload Your Profile Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: "15px" }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>

    </VStack>
  );
}


export default Signup;