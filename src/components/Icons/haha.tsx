import React from 'react';
import Svg, {
    Defs,
    Path,
    LinearGradient,
    Stop,
    G,
    Mask,
    Use,
} from 'react-native-svg';
import { BaseProps } from '../types';

const Haha: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 35 35" fill="none" style={style}>
            <Defs>
                <Path
                    d="M1.075 1.813A10.71 10.71 0 004.688 9.35a10.693 10.693 0 007.097 2.68c2.718 0 5.202-1.01 7.098-2.68 2.1-1.86 3.477-4.541 3.61-7.537C19.578.938 15.843.411 11.784.411 7.726.411 3.99.937 1.075 1.813"
                    id="prefix__a"
                />
                <Path
                    d="M.188 3.35a10.693 10.693 0 007.096 2.68c2.718 0 5.202-1.01 7.098-2.68A10.69 10.69 0 007.284.667C4.568.667 2.082 1.677.188 3.35"
                    id="prefix__d"
                />
                <LinearGradient
                    x1="50.001%"
                    y1="-.43%"
                    x2="50.001%"
                    y2="99.579%"
                    id="prefix__b"
                >
                    <Stop stopColor="#502411" offset="0%" />
                    <Stop stopColor="#8C4B1A" offset="100%" />
                </LinearGradient>
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M17.5 0C7.834 0 0 7.834 0 17.5S7.834 35 17.5 35C27.164 35 35 27.166 35 17.5S27.164 0 17.5 0z"
                    fill="#FFE17D"
                />
                <G transform="translate(5.646 18.36)">
                    <Mask id="prefix__c" fill="#fff">
                        <Use xlinkHref="#prefix__a" />
                    </Mask>
                    <Path
                        d="M1.075 1.813A10.71 10.71 0 004.688 9.35a10.693 10.693 0 007.097 2.68c2.718 0 5.202-1.01 7.098-2.68 2.1-1.86 3.477-4.541 3.61-7.537C19.578.938 15.843.411 11.784.411 7.726.411 3.99.937 1.075 1.813"
                        fill="url(#prefix__b)"
                        mask="url(#prefix__c)"
                    />
                </G>
                <G transform="translate(10.146 24.36)">
                    <Mask id="prefix__e" fill="#fff">
                        <Use xlinkHref="#prefix__d" />
                    </Mask>
                    <Path
                        d="M.188 3.35a10.693 10.693 0 007.096 2.68c2.718 0 5.202-1.01 7.098-2.68A10.69 10.69 0 007.284.667C4.568.667 2.082 1.677.188 3.35"
                        mask="url(#prefix__e)"
                    />
                </G>
                <G fill="#26304E">
                    <Path d="M7.599 16.089a.896.896 0 01-.746-.398.896.896 0 01.25-1.24c1.604-1.07 3.485-1.827 4.817-2.283a92.556 92.556 0 00-3.888-2.463.894.894 0 11.92-1.533c.466.28 4.59 2.764 5.535 3.71a.894.894 0 01-.416 1.498c-.034.009-3.462.882-5.977 2.559a.886.886 0 01-.495.15M27.261 16.089a.894.894 0 00.497-1.638c-1.605-1.07-3.486-1.827-4.818-2.283 1.16-.788 2.782-1.8 3.888-2.463a.894.894 0 10-.92-1.533c-.466.28-4.59 2.764-5.535 3.71a.894.894 0 00.416 1.498c.034.009 3.462.882 5.977 2.559a.89.89 0 00.495.15" />
                </G>
            </G>
        </Svg>
    );
};

export default Haha;
