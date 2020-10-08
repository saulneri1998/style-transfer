import { Image, Flex, Stack, Heading } from '@chakra-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { styleModelState } from '../atoms';
 
const ModelPick = () => {
    const [styleModel, setStyleModel] = useRecoilState(styleModelState)

    const handleClick = (e) => {
        const model = e.target.getAttribute('value');
        setStyleModel(model)
    }

    return(
        <Stack textAlign="center">
            <Heading shadow="sm">Selecciona un modelo!</Heading>
            <Flex flexWrap="wrap"
            height={300}
            bg="purple.200" p="20px" 
            borderRadius="lg">
                <Image 
                    value="wave" onClick={ handleClick }
                    border={styleModel === "wave" ? "2px" : 0} borderColor="purple.600"
                    m="10px" size="110px" rounded="lg"
                    src={process.env.PUBLIC_URL + '/models_images/wave.jpg'}
                />
                <Image 
                    value="udnie" onClick={ handleClick }
                    border={styleModel === "udnie" ? "2px" : 0} borderColor="purple.600"
                    m="10px" size="110px" borderRadius="lg"
                    src={process.env.PUBLIC_URL + '/models_images/udnie.jpg'}
                />
            </Flex>
        </Stack>
    );
}

export default ModelPick;