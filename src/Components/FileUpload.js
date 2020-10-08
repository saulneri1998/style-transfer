import { Flex, Heading, Stack } from '@chakra-ui/core'
import React, {useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import { useRecoilState } from 'recoil';
import { imageSizeState, inputImageState, isLoadingState } from '../atoms';

function FileUpload() {
    const [, setImageSize] = useRecoilState(imageSizeState);
    const [, setIsLoading] = useRecoilState(isLoadingState);
    const [inputImage, setInputImage] = useRecoilState(inputImageState);
    
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = (e) => {
            resizeImg(file, e).then(([imgUrl, imgSize]) => {
                setInputImage(imgUrl);
                setImageSize(imgSize);
                setIsLoading(true);
            });
        }
        reader.readAsDataURL(file)
    }, [setImageSize, setInputImage, setIsLoading])

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    const content = inputImage == null ? 
        <p>Arrastra una imagen, o haz click para seleccionar</p> 
        : <img src={inputImage} alt="input_image"/>;

    return (
        <Stack textAlign="center">
            <Heading shadow="sm">Sube una imagen!</Heading>
            <Flex {...getRootProps()}
            height={300} 
            align="center" justify="center"
            bg="gray.200" color="gray.500"
            border="1px" borderRadius="lg" borderColor="gray.400">

                <input {...getInputProps()} />
                { content }
            </Flex>
        </Stack>
    );
}

function resizeImg(file, e) {
    let promise = new Promise(async (resolve) => {
        let img = new Image();
        img.src = e.target.result;

        img.onload = () => {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");

            const MAX_SIZE = 250;
            const maxSide = img.width > img.height ? img.width : img.height;
            const transformRatio = MAX_SIZE / maxSide;

            canvas.width = img.width*transformRatio;
            canvas.height = img.height*transformRatio;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const dataurl = canvas.toDataURL(file.type);
            resolve([dataurl, {width: canvas.width, height: canvas.height}]);
        }
    })
    return promise
}

export default FileUpload;