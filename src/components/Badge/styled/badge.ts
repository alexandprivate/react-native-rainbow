import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import {
    COLOR_GRAY,
    COLOR_DARK_2,
    COLOR_BRAND,
    COLOR_WHITE,
} from '../../../styles/colors';

interface Props extends BaseProps {
    variant?: string;
    style?: object;
}

export const StyledBadgeContainer = styled.View`
    align-self: center;
`;

export const StyledBadge = styled.Text<Props>`
    border-width: 1px;
    padding: 5px 10px;
    text-align: center;
    border-radius: 12px;
    overflow: hidden;
    ${props =>
        props.variant === 'default' &&
        `
        background: ${COLOR_GRAY}
        color: ${COLOR_DARK_2}
        border-color: ${COLOR_GRAY}
    `};

    ${props =>
        props.variant === 'lightest' &&
        `
        background: transparent;
        border-color: ${COLOR_GRAY}
        color: ${COLOR_DARK_2}
    `}

    ${props =>
        props.variant === 'outline-brand' &&
        `
        color: ${COLOR_BRAND}
        border-color: ${COLOR_BRAND}
    `}

    ${props =>
        props.variant === 'brand' &&
        `
        color: ${COLOR_WHITE}
        background: ${COLOR_BRAND}
        border-color: ${COLOR_BRAND}
    `}
`;
