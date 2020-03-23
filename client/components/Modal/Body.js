import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import Icon from '../Icon';
import { Close } from '../../assets/icons';

class Body extends React.PureComponent {
    render() {
        const { label, desc, children, close } = this.props;

        return (
            <Wrapper>
                <CloseButton
                    onClick={() => close()}
                    type="button"
                    color="primary"
                    variant="contained"
                >
                    <Icon component={Close} />
                </CloseButton>
                <Title>{label}</Title>
                <Desc>{desc}</Desc>
                <div>{children}</div>
            </Wrapper>
        );
    }
}

const CloseButton = styled(MuiButton)`
    && {
        position: absolute;
        background: transparent;
        min-width: 0;
        width: 20px;
        height: 20px;
        top: 24px;
        right: 24px;
        border-radius: 4px;

        padding: 0;
        border: none;
        box-shadow: none;

        cursor: pointer;
        div {
            width: 20px;
            height: 20px;
        }

        &:hover {
            background: transparent;
            box-shadow: none;
        }

        &:focus {
            box-shadow: none;
        }

        .MuiTouchRipple {
            &-root {
                overflow: visible;
            }
            &-child {
                background: ${({ theme }) => theme.palette.primary.main};
            }
        }
    }
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 5px;
    color: ${({ theme }) => theme.palette.text.primary};
`;

const Desc = styled.div`
    font-size: 14px;
    margin: 0 0 31px;
    color: ${({ theme }) => theme.palette.text.primary};
`;

const Wrapper = styled.div`
    width: 305px;
    padding: 90px;
    margin: 12px;
    position: relative;

    background: ${({ theme }) => theme.palette.background.default};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
`;

Body.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
};

Body.defaultProps = {
    children: null,
};

export default Body;
