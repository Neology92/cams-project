import propTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';
import Input from './Input';

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
        const { setTagArr, tagArray } = this.props;
        const newArray = tagArray.filter(item => item.value !== tag.value);
        setTagArr(newArray);
    }

    // 13 keyCode is Enter
    handleAdd(e) {
        if (e.keyCode === 13) {
            const { setTagArr, tagArray } = this.props;
            const { inputValue } = this.state;

            if (inputValue !== '') {
                if (inputValue.length < 15) {
                    if (tagArray.length < 3) {
                        const value = inputValue
                            .replace(/\s+/g, '-')
                            .toLowerCase();

                        // Checks if tag with the same value exists
                        if (!tagArray.some(tag => tag.value === value)) {
                            const newArray = tagArray;
                            newArray.push({ value, label: inputValue });
                            setTagArr(newArray);
                            this.setState({
                                inputValue: '',
                                inputState: 'default',
                            });
                        } else {
                            this.setState({
                                inputValue: '',
                                inputState: 'error',
                                errorMessage: 'Tagi muszą być unikalne.',
                            });
                        }
                    } else {
                        this.setState({
                            inputValue: '',
                            inputState: 'error',
                            errorMessage: 'Zbyt wiele tagów.',
                        });
                    }
                } else {
                    this.setState({
                        inputValue: '',
                        inputState: 'error',
                        errorMessage: 'Tag może mieć maksymalnie 15 znaków.',
                    });
                }
            } else {
                this.setState({
                    inputValue: '',
                    inputState: 'error',
                    errorMessage: 'Nie można dodać pustego tagu.',
                });
            }
        }
    }

    render() {
        const { tagArray } = this.props;
        const { inputValue, inputState, errorMessage } = this.state;
        return (
            <div>
                <Input
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
                    {tagArray.map(tag => {
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

const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.palette.error.main};
    font-size: 12px;
`;

TagsBoard.propTypes = {
    tagArray: propTypes.arrayOf(propTypes.object).isRequired,
    setTagArr: propTypes.func.isRequired,
};

export default TagsBoard;
