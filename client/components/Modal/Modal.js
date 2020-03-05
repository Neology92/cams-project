import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal as MuiModal } from '@material-ui/core';
import Body from './Body';
import SideMessage from './SideMessage';

const StyledMuiModal = styled(MuiModal)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px;

    > div {
        margin: 0 0 24px;

        :last-child {
            margin: 0;
        }
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: ${({ theme }) => theme.palette.background.opacity};
    background-color: ${({ theme }) => theme.palette.common.black};
`;

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
            <StyledMuiModal
                TrapFocus
                disablePortal // May resolve problems with SSR if appears
                aria-labelledby={label}
                aria-describedby={desc}
                open={isOpen}
                onClose={() => close()}
                BackdropComponent={Background}
            >
                <>
                    <Body label={label} desc={desc} close={close}>
                        <>{children}</>
                    </Body>
                    {messageItems && (
                        <Grid>
                            {messageItems.map(item => (
                                <SideMessage
                                    key={item.label}
                                    label={item.label}
                                    desc={item.desc}
                                    icon={item.icon}
                                />
                            ))}
                        </Grid>
                    )}
                </>
            </StyledMuiModal>
        );
    }
}

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
