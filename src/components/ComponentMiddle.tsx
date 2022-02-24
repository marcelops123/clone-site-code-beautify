import React from 'react'
import { UploadOutlined, LinkOutlined } from '@ant-design/icons'
import { HStack, Box, VStack, ChakraProvider, Image } from '@chakra-ui/react'
import { Grid, Select, Button, Checkbox } from '@chakra-ui/react'

export const ComponentMiddle = () => {
    return (
        <HStack >
            <Grid padding={15}></Grid>
            <Box textAlign={'center'} bg='#e2e2e2' w='60%' height={680} p={150} color='white'>
                Box 1
            </Box>
            <Grid padding={1}></Grid>
            <VStack>
                <ChakraProvider>
                    <Select right={-2} top={405} width={200} color={'dodgerblue'} textColor={'black'} placeholder='2 Tab Space'>
                    </Select>
                </ChakraProvider>
                <Button  size={'md'} borderX={1} borderY={1} borderColor={'gray.100'} padding={6} borderRadius={10} borderStyle={'solid'} fontSize={30} bgColor={'gray.100'} top={-110} left={-80} colorScheme='blue'><UploadOutlined />File</Button>
                <ChakraProvider>
                    <Checkbox bottom={120} size={'lg'} textAlign={'initial'} left={-75} defaultIsChecked>Auto<br></br> Update</Checkbox>
                </ChakraProvider>
                <Button size={'md'} borderX={1} borderY={1} borderColor={'gray.100'} padding={6} borderRadius={10} borderStyle={'solid'} fontSize={30} bgColor={'gray.100'} top={-240} right={-90} colorScheme='blue'><LinkOutlined />URL</Button>
                <ChakraProvider>
                    <Checkbox bottom={240} size={'lg'} whiteSpace={'nowrap'} right={-85} >Big Num</Checkbox>
                    <Button right={100} size={'lg'} fontSize={30} textColor={'white'} top={-220} left={1} height={70} width={270} bgColor={'#00e6ac'} >Tree Viewer</Button>
                </ChakraProvider>
                <ChakraProvider>
                    <Button right={140} size={'lg'} fontSize={30} textColor={'white'} bottom={-110} left={1} height={50} width={250} bgColor={'blue.400'} >Beautify</Button>
                    <Button size={'md'} borderX={1} borderY={1} padding={6} borderRadius={10} bgColor={'transparent'} borderStyle={'solid'} fontSize={22} top={135} right={70} >Minify</Button>
                    <Button size={'md'} borderX={1} borderY={1} padding={6} borderRadius={10} bgColor={'transparent'} borderStyle={'solid'} fontSize={22} bottom={-76} right={-85} >Validate</Button>
                </ChakraProvider>
            </VStack>
            <Box right={30} marginRight={50} boxSize='md'>
                <Grid marginLeft={-280} marginRight={7}>
                    <Image minWidth={140} src='https://i.pinimg.com/originals/e0/11/c5/e011c5f0d8b581d627369f6bddf6611b.jpg' />
                </Grid>
            </Box>
            <ChakraProvider>
                <Box textAlign={'center'} marginRight={70} bg='#e2e2e2' bgSize={100} w='60%' height={680} p={130} color='white'>
                    Box 2
                </Box>
                <Grid padding={5}></Grid>
            </ChakraProvider>
        </HStack>
    )
}