import { Button } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import ml5 from 'ml5';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styleModelState, outputImageState, inputImageState, isLoadingState} from '../atoms';

const GenerateButton = () => {
    const [modelLoaded, setModelLoaded] = useState(false);
    const [trainedModel, setTrainedModel] = useState(null);
    
    const styleModel = useRecoilValue(styleModelState);
    const inputImage = useRecoilValue(inputImageState);
    const [, setOutputImage] = useRecoilState(outputImageState);
    const [, setIsLoading] = useRecoilState(isLoadingState);
    
    useEffect(() => {
        ml5.styleTransfer(process.env.PUBLIC_URL + '/models/' + styleModel)
        .then(trained => {
            setModelLoaded(true);
            setTrainedModel(trained)
        }).catch(err => console.log('Error:', err))
    }, [styleModel])
    
    const generateImage = () => {
        const inputImg = new Image()
        inputImg.src = inputImage;
        trainedModel.transfer(inputImg).then(result => {
            setOutputImage(result.src)
            setIsLoading(false);
        }).catch(err => console.log('Error:', err));
    }

    return(
        <Button 
            size="lg" variantColor="purple" variant="outline"
            isDisabled={!(modelLoaded && inputImage)}
            onClick={ generateImage }
        >
                Generar
        </Button>
    )
}

export default GenerateButton;