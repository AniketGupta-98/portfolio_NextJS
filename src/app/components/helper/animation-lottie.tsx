'use client';

import Lottie from 'lottie-react';
import { CSSProperties } from 'react';

type AnimationLottieProps = {
    animationPath: object;
    width?: string | number;
};

const AnimationLottie = ({ animationPath, width = '95%' }: AnimationLottieProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: typeof width === 'number' ? `${width}px` : width,
        } as CSSProperties,
    };

    return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
