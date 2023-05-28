import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CheckIcon,
  useToast,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AllData from "./AllData";
import "../style/alldata.css";

const DetailsForm = () => {
  const [name, setName] = useState("vk");
  const [email, setEmail] = useState("ck");
  const [destination, setDestination] = useState();
  const [no_of_travellers, setNumTravellers] = useState(1);
  const [budgetPerPerson, setBudgetPerPerson] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [picLoading, setPicLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !destination || !no_of_travellers) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://plain-bull-underclothes.cyclic.app/api/details",
        {
          name,
          email,
          destination,
          no_of_travellers,
          budgetPerPerson,
          totalBudget,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/details");
      localStorage.setItem("details", JSON.stringify(data));
      setPicLoading(false);
    } catch (error) {
      toast({
        title: "Email Is already used, Please use another email!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  // const chooseCountry=(value)=>{
  //   setDestination(value);
  //   if(value==="India"){
  //       setBudgetPerPerson(15000);
  //   }
  //   else if(value==="Africa"){
  //     setBudgetPerPerson(20000);
  // }
  // else{
  //   setBudgetPerPerson(25000);
  // }
  // }

  const TBudget = (value) => {
    setNumTravellers(value);

    // setTotalBudget(budgetPerPerson*Number(no_of_travellers));
  };

  useEffect(() => {
    setTotalBudget(budgetPerPerson * no_of_travellers);
  }, [no_of_travellers, budgetPerPerson]);
  return (
    <Box display={"flex"} flexWrap={"wrap"} zIndex={10000} className="form">
      <Box
        // width={"40%"}
        margin={"auto"}
        marginTop={"60px"}
        padding={10}
        backgroundColor={"white"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        className="details"
      >
        <Heading margin={2}>plan Your Trip !</Heading>
        <VStack spacing={"5px"} color="black">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              // outlineColor={"black"}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="destination" isRequired>
            <FormLabel>Destination</FormLabel>
            <Select
              placeholder="Select country"
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
            </Select>
          </FormControl>
          <FormControl id="travellers" isRequired>
            <FormLabel>No. of travellers</FormLabel>
            <Input
              type="number"
              placeholder="Enter No. of travellers"
              onChange={(e) => setNumTravellers(e.target.value)}
            />
          </FormControl>

          <FormControl id="budget" isRequired>
            <FormLabel>Budget Per Person</FormLabel>
            {/* <Text fontSize='2xl'>{budgetPerPerson}</Text> */}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input
                placeholder="Enter amount"
                type="number"
                onChange={(e) => setBudgetPerPerson(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="Total budget" isRequired>
            <FormLabel>Total Budget</FormLabel>
            <Text fontSize="2xl">{totalBudget}</Text>
          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            isLoading={picLoading}
          >
            Submit Data
          </Button>
        </VStack>
      </Box>
      <Box marginTop={59} paddingTop={30}>
        {/* <div style={{width:"100%",height:0,paddingBottom:"100%",position:"relative"}}><iframe src="https://giphy.com/embed/3oKIPDf1E4qKYRJ6oM" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/beach-gear-bag-3oKIPDf1E4qKYRJ6oM">via GIPHY</a></p> */}
        <Image
          borderRadius={20}
          marginRight={10}
          width={700}
          src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190425170948/friends-on-road-trip.jpg"
        ></Image>
      </Box>
    </Box>
  );
};

export default DetailsForm;
