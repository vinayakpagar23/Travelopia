import React from "react";
import "../style/alldata.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
const GridFormat = ({ data }) => {
  return (
    <>
      <div className="OuterBox">
        {data.map((item) => (
          <div className="box">
            <Text>
              <span style={{ fontWeight: "bold" }}>Name : </span> {item.name}
            </Text>
            <Text>
              {" "}
              <span style={{ fontWeight: "bold" }}>email :</span> {item.email}
            </Text>
            <Text>
              {" "}
              <span style={{ fontWeight: "bold" }}>email :</span>{" "}
              {item.destination}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>No_of_treavellers :</span>{" "}
              {item.no_of_travellers}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>budget_per_Person : $ </span>{" "}
              {item.budgetPerPerson}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>Total_Budget: $ </span>{" "}
              {item.totalBudget}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridFormat;
