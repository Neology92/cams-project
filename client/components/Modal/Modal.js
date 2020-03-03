import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal as MuiModal, Grid, Container } from '@material-ui/core';
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
                    <Wrapper container>
                        <Grid item direction="column" xs={6}>
                            <Body label={label} desc={desc}>
                                {children}
                            </Body>
                        </Grid>
                        <Grid item direction="column" xs={4}>
                            {messageItems.map(item => (
                                <SideMessage
                                    key={item.label}
                                    label={item.label}
                                    desc={item.desc}
                                    icon={item.icon}
                                />
                            ))}
                        </Grid>
                    </Wrapper>
                </Container>
            </MuiModal>
        );
    }
}

const Wrapper = styled(Grid)`
    /* margin: 200px auto 0; */
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
