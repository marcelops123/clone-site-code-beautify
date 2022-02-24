import { HeartOutlined } from '@ant-design/icons'
import { HStack } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import React from 'react'

export const ComponentText  = () => {
    return(
<HStack>
<Text paddingX={8} fontWeight={'bold'} color={'blackAlpha.800'} paddingY={0} marginTop={-6} fontSize='5xl'>JSON Viewer</Text>
<Button fontSize={23} top={-3} left={1000}  padding={5} borderColor={'blackAlpha.100'} borderX={1} borderY={1} borderRadius={6} height={50} borderStyle={'solid'} colorScheme={'gray.100'} outlineColor={'transparent'} textColor={'black'}> <HeartOutlined />Add to Fav</Button>
<Button fontSize={23} top={-3} left={1000} width={90} height={50} colorScheme={'blue'} outlineColor={'transparent'} >New</Button>
<Button fontSize={23} top={-3} left={1000}  backgroundColor={'blackAlpha.800'} height={50} colorScheme={'blue'}   >Save & Share</Button>
</HStack>
        )

}