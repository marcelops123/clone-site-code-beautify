import React from 'react';
import { ChakraProvider, Divider } from '@chakra-ui/react'

import { ComponentNavBar } from './components/ComponentNavBar';
import { ComponentText } from './components/ComponentText';
import { ComponentMiddle } from './components/ComponentMiddle';


function Main() {
  return (
    <body>

      <ChakraProvider>
        <ComponentNavBar />
        <Divider color={'blackAlpha.100'} marginTop={5} orientation='horizontal' />
        <ComponentText />
      </ChakraProvider>
      <ComponentMiddle />
      
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>

    </body>

  );

}

export default Main;
