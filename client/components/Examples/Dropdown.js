import { useState } from 'react';

import { Divider, Subheader, Item, Menu } from '../ui-elements/dropdown-elems';
import { Woman, Check, Fire, Ban } from '../../assets/icons';

const Dropdown = () => {
    const [toggle, setToggle] = useState(false);

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
                setToggleValue={setToggle}
            />
            <Item disabled label="Disabled item" icon={Ban} />
        </Menu>
    );
};

export default Dropdown;
