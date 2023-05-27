import React, { useEffect ,useState} from 'react'
import axios from "axios"
import "../style/alldata.css"
import { Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid ,Text,Button,Stack} from '@chakra-ui/react';
import Loading from './Loading';
import TableFormat from './TableFormat';
import GridFormat from './GridFormat';
const AllData = () => {
    const[data1,setData] = useState([]);
    const [flag,setFlag] = useState(true);
    const fetchData =async()=>{
        const {data} = await axios.get("https://plain-bull-underclothes.cyclic.app/api/details");
        console.log(data);
        setData(data)
    }
    useEffect(()=>{
         fetchData();
    },[]);
  return (
    <>
    <Stack spacing={4} direction='row' align='center' margin={15}>

  <Button colorScheme='teal' size='lg' onClick={()=>setFlag(!flag)}>
    Grid Format
  </Button>
  <Button colorScheme='teal' size='lg' onClick={()=>setFlag(!flag)}>
    Table Format
  </Button>
</Stack>
    {
        data1.length >0?(flag?<GridFormat data={data1}/>: <TableFormat data={data1}/>):<Loading/>
    }
    
   
    </>
    
    
  )
}

export default AllData