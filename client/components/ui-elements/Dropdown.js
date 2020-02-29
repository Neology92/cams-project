import { Divider, Subheader, Item, Menu } from './dropdown-elems';
import { Woman, Check, Fire } from '../../assets/icons';

const Dropdown = () => {
    return (
        <Menu>
            <Subheader label="Label" />
            <Item label="Woman" icon={Woman} />
            <Item label="BUmp value" icon={Fire} />
            <Divider />
            <Subheader label="Second label" />
            <Item
                label="Rewiev done"
                icon={Check}
                toggleValue={false}
                setToggleValue={() => {
                    alert('clicked'); //eslint-disable-line
                }}
            />
        </Menu>
    );
};

export default Dropdown;
