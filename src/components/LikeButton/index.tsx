import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { BaseProps } from '../types';
import {
    IconContainer,
    LableContainer,
    StatesContainer,
    ButtonIconContainer,
    ButtonContainer,
} from './styled';
import Angry from '../Icons/angry';
import Haha from '../Icons/haha';
import Like from '../Icons/like';
import LikeFilled from '../Icons/likeFilled';
import Love from '../Icons/love';
import Sad from '../Icons/sad';
import Wow from '../Icons/wow';
import RenderIf from '../RenderIf';

type Value = 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry';

export type Variant = 'shaded' | 'base';

interface Props extends BaseProps {
    value?: Value;
    showLabel?: boolean;
    onChange?: (state?: any) => void;
    variant?: Variant;
}

const modalStyles = {
    justifyContent: 'center',
    alignItems: 'center',
};

const iconStyles = {
    width: '35',
    height: '35',
};

const modalIconStyle = {
    width: '40',
    height: '40',
};

const stateMap = {
    like: {
        icon: <LikeFilled style={iconStyles} />,
        label: 'Like',
    },
    love: {
        icon: <Love style={iconStyles} />,
        label: 'Love',
    },
    haha: {
        icon: <Haha style={iconStyles} />,
        label: 'Haha',
    },
    wow: {
        icon: <Wow style={iconStyles} />,
        label: 'Wow',
    },
    sad: {
        icon: <Sad style={iconStyles} />,
        label: 'Sad',
    },
    angry: {
        icon: <Angry style={iconStyles} />,
        label: 'Angry',
    },
};

const getLabel = (value?: Value) => {
    if (value) {
        return stateMap[value].label;
    }
    return '';
};

const getIcon = (value?: Value) => {
    if (value) {
        return stateMap[value].icon;
    }
    return <Like style={iconStyles} />;
};

const LikeButton: React.FC<Props> = props => {
    const {
        value,
        showLabel,
        onChange = () => {},
        variant = 'base',
        style,
    } = props;
    const [isModalVisible, setModalVisible] = useState(false);

    const handlePressButton = () => {
        if (value) {
            onChange(undefined);
        } else {
            onChange('like');
        }
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const selectValue = (newValue: Value) => {
        setModalVisible(false);
        onChange(newValue);
    };

    return (
        <TouchableOpacity
            style={style}
            onPress={handlePressButton}
            onLongPress={openModal}
        >
            <ButtonContainer
                variant={variant}
                hasValue={!!value}
                isModalVisible={isModalVisible}
                showLabel={showLabel}
            >
                <IconContainer>{getIcon(value)}</IconContainer>
                <RenderIf isTrue={showLabel && !!value}>
                    <LableContainer>{getLabel(value)}</LableContainer>
                </RenderIf>
            </ButtonContainer>
            <Modal
                isVisible={isModalVisible}
                backdropColor="transparent"
                style={modalStyles as any}
                animationIn="fadeIn"
                animationOut="fadeOut"
                onBackdropPress={closeModal}
            >
                <StatesContainer>
                    <ButtonIconContainer onPress={() => selectValue('like')}>
                        <LikeFilled style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer onPress={() => selectValue('love')}>
                        <Love style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer onPress={() => selectValue('haha')}>
                        <Haha style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer onPress={() => selectValue('wow')}>
                        <Wow style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer onPress={() => selectValue('sad')}>
                        <Sad style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer onPress={() => selectValue('angry')}>
                        <Angry style={modalIconStyle} />
                    </ButtonIconContainer>
                </StatesContainer>
            </Modal>
        </TouchableOpacity>
    );
};

LikeButton.propTypes = {
    value: PropTypes.oneOf(['like', 'love', 'haha', 'wow', 'sad', 'angry']),
    showLabel: PropTypes.bool,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['shaded', 'base']),
};

LikeButton.defaultProps = {
    value: undefined,
    showLabel: false,
    onChange: () => {},
    variant: 'base',
};

export default LikeButton;
