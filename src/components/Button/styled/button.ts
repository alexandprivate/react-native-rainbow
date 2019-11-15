import styled from 'styled-components/native';
import {
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_GRAY_2,
    COLOR_ERROR,
    COLOR_SUCCESS,
} from '../../../styles/colors';
import { ButtonVariant } from '../../types';

interface Props {
    variant?: ButtonVariant;
    disabled?: boolean;
}

const StyledButton = styled.TouchableOpacity<Props>`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 100px;
    text-decoration: none;
    padding-vertical: 0;
    padding-horizontal: 16;

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'destructive' &&
        `
            background-color: ${COLOR_ERROR};
            border: 1px solid ${COLOR_ERROR};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
            border: 1px solid ${COLOR_SUCCESS};
        `};
`;

export default StyledButton;
