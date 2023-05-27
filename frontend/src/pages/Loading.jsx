import React from 'react'
import { Stack,Spinner } from '@chakra-ui/react'
const Loading = () => {
  return (
    <>
    <Stack direction='row' margin={"auto"} spacing={10}>
    <Spinner margin={"auto"} size='xl' />
</Stack>
    </>
  )
}

export default Loading