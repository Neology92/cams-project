// import styled from 'styled-components';
import PropTypes from 'prop-types';

class Body extends React.PureComponent {
    render() {
        const { label, desc, children } = this.props;

        return (
            <div>
                <div>{label}</div>
                <div>{desc}</div>
                <div>{children}</div>
            </div>
        );
    }
}

Body.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

Body.defaultProps = {
    children: null,
};

export default Body;
