import { Flex, Image, Spinner } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { imageSizeState, isLoadingState, outputImageState } from '../atoms';

const ImageResult = () => {

    const outputImage = useRecoilValue(outputImageState);
    const imageSize = useRecoilValue(imageSizeState);
    const isLoading = useRecoilValue(isLoadingState);

    const RenderImageSpinner = () => {
        if (isLoading) {
            return <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="purple.500"
                size="xl"
            />
        } else if (outputImage != null) {
            return <Image src={ outputImage } 
                htmlWidth={ imageSize.width } htmlHeight={ imageSize.height }
                alt="output">
            </Image>
        }
        return <></>
    }

    return(
        <Flex id="output_image" align="center" justify="center" p={10}>
            <RenderImageSpinner />
        </Flex>
    )
}

export default ImageResult;