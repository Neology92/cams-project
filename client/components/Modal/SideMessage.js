import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class SideMessage extends React.PureComponent {
    // renderPrefixIcon() {
    //     const { type, icon } = this.props;
    //     const { focused } = this.state;

    //     return icon ? (
    //         <PrefixIcon component={icon} type={type} focused={focused} />
    //     ) : null;
    // }

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

// const PrefixIcon = styled(Icon)`
//     && {

//     }
// `

const Wrapper = styled.div`
    position: relative;
    width: 300px;
    height: 100px;
    padding: 24px;
    background: ${({ theme }) => theme.palette.secondary.main};
    /* margin: 24px 12px; */

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
`;

const Desc = styled.div`
    font-size: 14px;
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
