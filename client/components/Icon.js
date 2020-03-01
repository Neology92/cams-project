import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = ({ size, ...props }) => (
    <StyledIcon viewBox="0 0 20 20" fontSize="small" size={size} {...props} />
);

const StyledIcon = styled(SvgIcon)`
    && {
        width: ${({ size }) => size};
        height: ${({ size }) => size};

        g > path:nth-child(2) {
            fill: ${({ theme }) => theme.palette.text.primary};
        }
    }
`;

Icon.propTypes = {
    size: PropTypes.string,
};

Icon.defaultProps = {
    size: '20px',
};

export default Icon;
