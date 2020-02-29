import { useState } from 'react';

import { Divider, Subheader, Item, Menu } from '../ui-elements/dropdown-elems';
import { Woman, Check, Fire, Ban } from '../../assets/icons';

const Dropdown = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <Menu>
            <Subheader label="Label" />
            <Item label="Woman" icon={Woman} />
            <Item
                label="BUmp value"
                icon={Fire}
                onClick={() => alert('clicked')} //eslint-disable-line
            />
            <Divider />
            <Subheader label="Second label" />
            <Item
                label="Review done"
                icon={Check}
                toggleValue={toggle}
                setToggleValue={setToggle}
            />
            <Item
                disabled
                label="Disabled item"
                icon={Ban}
                toggleValue={toggle}
                setToggleValue={setToggle}
            />
        </Menu>
    );
};

export default Dropdown;
