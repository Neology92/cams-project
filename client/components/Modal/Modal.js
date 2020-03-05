import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal as MuiModal, Container } from '@material-ui/core';
import Body from './Body';
import SideMessage from './SideMessage';

class Modal extends React.PureComponent {
    render() {
        const {
            children,
            label,
            desc,
            messageItems,
            isOpen,
            close,
        } = this.props;

        return (
            <MuiModal
                // disablePortal
                aria-labelledby={label}
                aria-describedby={desc}
                open={isOpen}
                onClose={() => close()}
            >
                <Container
                    style={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Wrapper>
                        <Body label={label} desc={desc}>
                            {children}
                        </Body>
                        <div>
                            {messageItems.map(item => (
                                <SideMessage
                                    key={item.label}
                                    label={item.label}
                                    desc={item.desc}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </Wrapper>
                </Container>
            </MuiModal>
        );
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

Modal.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    messageItems: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.func,
            label: PropTypes.string,
            desc: PropTypes.string,
        })
    ),
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    children: null,
    messageItems: [],
};

export default Modal;
