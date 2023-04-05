import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  color,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IIHospitalDocrtors } from "./interface";
import data from "../data";
import Order from "./Order";

function Main() {
  const { doctors } = data;
  const [doctor, setDoctor] = useState([]);

  doctors.sort((r1, r2) => r2.rating - r1.rating);

  return (
    <>
      <SimpleGrid
        columns={2}
        spacing={10}
        textAlign={"right"}
        p={20}
        justifyContent={"center"}
      >
        <Heading size={"md"} gridColumn={"2"} textAlign={"center"}>
          الأطباء المتوفرين
        </Heading>
        {doctors.map((item) => (
          <Box
            boxShadow={"0 0 5px 0 #ccc"}
            key={item.id}
            bg="#F9F9F9"
            height="auto"
            borderRadius={10}
            w={450}
            gap={10}
            p={5}
          >
            <Heading textAlign={"center"} size={"md"}>
              د. {item.doctorName}
            </Heading>
            {item.isAvailable ? (
              <Button bg={"lightgreen"} color={"#fff"}>
                متاح
              </Button>
            ) : (
              <Button bg={"tomato"} color={"#fff"}>
                غير متاح
              </Button>
            )}
            <Text textAlign={"center"} fontWeight={"bold"}>
              التقييم: {item.rating}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Main;
