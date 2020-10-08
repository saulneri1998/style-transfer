import { atom } from 'recoil';

export const imageSizeState = atom({
    key: 'imageSize', // unique ID (with respect to other atoms/selectors)
    default: {
        width: 0,
        height: 0,
    },
});

export const styleModelState = atom({
    key: 'styleModel', // unique ID (with respect to other atoms/selectors)
    default: 'wave',
});

export const outputImageState = atom({
    key: 'outputImage', // unique ID (with respect to other atoms/selectors)
    default: null,
});

export const inputImageState = atom({
    key: 'inputImage', // unique ID (with respect to other atoms/selectors)
    default: null,
});

export const isLoadingState = atom({
    key: 'isLoading', // unique ID (with respect to other atoms/selectors)
    default: false,
});