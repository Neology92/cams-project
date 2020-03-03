import styled from 'styled-components';
import PropTypes from 'prop-types';

class Body extends React.PureComponent {
    render() {
        const { label, desc, children } = this.props;

        return (
            <Wrapper>
                <div>{label}</div>
                <div>{desc}</div>
                <div>{children}</div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 300px;
    padding: 90px;

    background: ${({ theme }) => theme.palette.background.default};
`;

Body.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

Body.defaultProps = {
    children: null,
};

export default Body;
