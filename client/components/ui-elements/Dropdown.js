import { useState } from 'react';

import { Divider, Subheader, Item, Menu } from './dropdown-elems';
import { Woman, Check, Fire } from '../../assets/icons';

const Dropdown = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <Menu>
            <Subheader label="Label" />
            <Item label="Woman" icon={Woman} />
            <Item
                label="BUmp value"
                icon={Fire}
                onClick={() => alert('clicked')}
            />
            <Divider />
            <Subheader label="Second label" />
            <Item
                disabled
                label="Review done"
                icon={Check}
                toggleValue={toggle}
                setToggleValue={setToggle}
            />
        </Menu>
    );
};

export default Dropdown;
