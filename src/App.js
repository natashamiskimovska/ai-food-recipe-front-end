import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import CallToActionWithVideo from './front_page/index'
import WithSubnavigation from './front_page/nav_bar'
import SmallWithNavigation from './footer/index'
import SignupCard from './login_page/signup'
import SignIn from './login_page/signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitailFocus from './generate_menu'
import GridBlurredBackdrop from './my_recipes/index'
import GeneratedMenu from './generate_menu/generated_recipe'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <WithSubnavigation />
            <ColorModeSwitcher justifySelf="flex-end" />
            <Routes>
              <Route path="/" element={<CallToActionWithVideo />} />
              <Route path="sign_up" element={<SignupCard />} />
              <Route path="sign_in" element={<SignIn />} />
              <Route path="new_recipe" element={<InitailFocus />} />
              <Route path="my_recipes" element={<GridBlurredBackdrop />} />
              <Route path="generated_recipe" element={
                <GeneratedMenu />
            } />
            </Routes>
            <SmallWithNavigation />
          </Grid>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
