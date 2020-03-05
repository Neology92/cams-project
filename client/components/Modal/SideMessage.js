import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class SideMessage extends React.PureComponent {
    render() {
        const { label, desc, icon } = this.props;

        return (
            <Wrapper>
                <div>
                    {icon ? <StyledIcon component={icon} /> : null}
                    <Title>{label}</Title>
                </div>
                <Desc>{desc}</Desc>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    width: 300px;
    height: 100px;
    padding: 24px;
    background: ${({ theme }) => theme.palette.secondary.main};

    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: row;
    }
`;

const StyledIcon = styled(Icon)`
    padding: 6px 8px 6px 0;
`;

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 8px;
    color: ${({ theme }) => theme.palette.text.primary};
`;

const Desc = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.primary};
`;

SideMessage.propTypes = {
    icon: PropTypes.func,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

SideMessage.defaultProps = {
    icon: null,
};

export default SideMessage;
