import React from 'react';
import { Divider, Subheader, Item, Menu } from '../ui-elements/dropdown-elems';

import { Ban, Woman, Check, Fire } from '../../assets/icons';

class Dropdown extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
        };
        this.setToggle = this.setToggle.bind(this);
    }

    setToggle(value) {
        this.setState({
            toggle: value,
        });
    }

    render() {
        const { toggle } = this.state;

        return (
            <Menu>
                <Subheader label="Label" />
                <Item
                    label="Woman"
                    icon={Woman}
                    onClick={() => alert('You pushed a woman')} //eslint-disable-line
                />
                <Item
                    label="Fire"
                    icon={Fire}
                    onClick={() => alert('Australia say ouch')} //eslint-disable-line
                />
                <Divider />
                <Subheader label="Second label" />
                <Item
                    label="Review done"
                    icon={Check}
                    toggle
                    toggleValue={toggle}
                    setToggleValue={this.setToggle}
                />
                <Item disabled label="Disabled item" icon={Ban} />
            </Menu>
        );
    }
}
export default Dropdown;
