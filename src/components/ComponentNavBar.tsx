import { HStack } from '@chakra-ui/react'
import { Button, Select, Image } from '@chakra-ui/react'
import React from 'react'

export const ComponentNavBar = () => {

    return (
        <HStack justifyContent={'center'} height='auto' display={'-ms-flexbox'} paddingTop={4} >
            <Image marginLeft={-120} paddingX={150} src='https://codebeautify.org/img/slogo.webp ' />
            <Button color={'gray.500'}left={60} fontSize={22} colorScheme={'trasnparent'} outlineColor={'transparent'} boxShadow={''} bgColor='transparent' >JSON Formatter</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >XML Formatter</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >HEX Color Codes</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >Calculators</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >JSON Beautifier</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >Recent Links</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >Sitemap</Button>
            <Button color={'gray.500'}left={60} fontSize={23} colorScheme={'trasnparent'} outlineColor={'transparent'} bgColor='transparent' >Favs<Select borderColor={'transparent'} size={'lg'} fontSize={'lg'} color={'blue'} width={8} outlineColor={'transparent'} ></Select></Button>
            <Button right={-18} size={'lg'} top={1} left={258} bgColor={'#00e6ac'} >Login</Button>
            </HStack>
    )

}