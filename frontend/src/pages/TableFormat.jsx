import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const TableFormat = ({ data }) => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>All trip Details</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Destination</Th>
              <Th isNumeric>No Of travellers</Th>
              <Th isNumeric>Budget Per Person</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ele) => (
              <Tr>
                <Td>{ele.name}</Td>
                <Td>{ele.email}</Td>
                <Td isNumeric>{ele.destination}</Td>
                <Td isNumeric>{ele.no_of_travellers}</Td>
                <Td isNumeric>{ele.budgetPerPerson}</Td>
                <Td isNumeric>{ele.totalBudget}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableFormat;
