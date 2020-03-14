import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';
import Input from './Input';
import { Crosshair } from '../../assets/icons';
import ErrorMessage from '../Text/ErrorMessage';

class TagsBoard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            inputState: 'default',
            errorMessage: '',
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(tag) {
        const { setTagsArray, tagsArray } = this.props;
        const newArray = tagsArray.filter(item => item.value !== tag.value);
        setTagsArray(newArray);
    }

    // 13 keyCode is Enter
    handleAdd(e) {
        if (e.keyCode === 13) {
            const { setTagsArray, tagsArray } = this.props;
            const { inputValue } = this.state;
            const value = inputValue.replace(/\s+/g, '-').toLowerCase();

            if (tagsArray.length >= 3) {
                this.setState({
                    inputValue: '',
                    inputState: 'error',
                    errorMessage: 'Zbyt wiele tagów.',
                });
            } else if (inputValue === '') {
                this.setState({
                    inputValue: '',
                    inputState: 'error',
                    errorMessage: 'Nie można dodać pustego tagu.',
                });
            } else if (inputValue.length >= 15) {
                this.setState({
                    inputValue: '',
                    inputState: 'error',
                    errorMessage: 'Tag może mieć maksymalnie 15 znaków.',
                });
            } else if (tagsArray.some(tag => tag.value === value)) {
                this.setState({
                    inputValue: '',
                    inputState: 'error',
                    errorMessage: 'Tagi muszą być unikalne.',
                });
            } else {
                const newArray = tagsArray;
                newArray.push({ value, label: inputValue });
                setTagsArray(newArray);
                this.setState({
                    inputValue: '',
                    inputState: 'default',
                });
            }
        }
    }

    render() {
        const { tagsArray } = this.props;
        const { inputValue, inputState, errorMessage } = this.state;
        return (
            <div>
                <Input
                    icon={Crosshair}
                    label="Tags"
                    value={inputValue}
                    onKeyDown={this.handleAdd}
                    // Replace blocks using special characters
                    setValue={value =>
                        this.setState({
                            inputValue: value.replace(/[^\w\s]/gi, ''),
                        })
                    }
                    state={inputState}
                />
                {inputState === 'error' && (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                )}
                <TagContainer>
                    {tagsArray.map(tag => {
                        return (
                            <Tag
                                key={tag.value}
                                value={tag.value}
                                label={tag.label}
                                onDelete={() => this.handleDelete(tag)}
                            />
                        );
                    })}
                </TagContainer>
            </div>
        );
    }
}

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 256px;
    padding-top: 7px;
`;

TagsBoard.propTypes = {
    tagsArray: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ).isRequired,
    setTagsArray: PropTypes.func.isRequired,
};

export default TagsBoard;
