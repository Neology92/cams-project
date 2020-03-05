import styled from 'styled-components';
import PropTypes from 'prop-types';

class Body extends React.PureComponent {
    render() {
        const { label, desc, children } = this.props;

        return (
            <Wrapper>
                <Title>{label}</Title>
                <Desc>{desc}</Desc>
                <div>{children}</div>
            </Wrapper>
        );
    }
}

const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 5px;
`;

const Desc = styled.div`
    font-size: 14px;
    margin: 0 0 31px;
`;

const Wrapper = styled.div`
    width: 305px;
    padding: 90px;
    margin: 12px;

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
