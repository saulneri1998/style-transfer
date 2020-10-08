import React from 'react';
import { CSSReset, Divider, SimpleGrid, Stack, ThemeProvider } from '@chakra-ui/core';
import Header from './Components/Header';
import FileUpload from './Components/FileUpload';
import ModelPick from './Components/ModelPick';
import GenerateButton from './Components/GenerateButton';
import ImageResult from './Components/ImageResult';
import customTheme from './theme';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />

      <RecoilRoot>
        <Stack p={10}>
          <Header />
          <Divider />
          <SimpleGrid columns={2} spacing={30}>
            <FileUpload />
            <ModelPick />
          </SimpleGrid>
          <GenerateButton />
          <ImageResult />
        </Stack>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
