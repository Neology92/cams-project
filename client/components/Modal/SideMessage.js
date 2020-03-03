// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class SideMessage extends React.PureComponent {
    render() {
        const { label, desc, icon } = this.props;

        return (
            <div>
                <Icon component={icon} />
                <div>{label}</div>
                <div>{desc}</div>
            </div>
        );
    }
}

SideMessage.propTypes = {
    icon: PropTypes.func,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

SideMessage.defaultProps = {
    icon: null,
};

export default SideMessage;
