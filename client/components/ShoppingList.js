import { List, ListItem, IconButton, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
// import styled from 'styled-components';
import uuid from 'uuid';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: uuid(), name: 'Eggs' },
                { id: uuid(), name: 'Milk' },
                { id: uuid(), name: 'Steak' },
                { id: uuid(), name: 'Water' },
                { id: uuid(), name: 'Cheese' },
            ],
        };
    }

    render() {
        const { items } = this.state;

        return (
            <div>
                <h2>Yeah, that&apos;s list of items</h2>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        const name = prompt('Enter Item'); // eslint-disable-line no-alert
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }],
                            }));
                        }
                    }}
                >
                    Add Item
                </Button>
                <List>
                    {items.map(({ id, name }) => (
                        <ListItem key={id}>
                            <IconButton
                                style={{ margin: '0 5px', color: 'red' }}
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(
                                            item => item.id !== id
                                        ),
                                    }));
                                }}
                            >
                                <Delete />
                            </IconButton>
                            {name}
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default ShoppingList;
