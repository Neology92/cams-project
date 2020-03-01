import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListSubheader } from '@material-ui/core';

class Subheader extends React.PureComponent {
    render() {
        const { label } = this.props;
        return (
            <Wrapper>
                <span>{label}</span>
            </Wrapper>
        );
    }
}

const Wrapper = styled(ListSubheader)`
    && {
        padding: 0;
        text-align: left;
        height: 25px;
        position: relative;

        span {
            position: absolute;
            top: -15px;
            height: 12px;
            min-height: 0;
        }
    }
`;

Subheader.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Subheader;
