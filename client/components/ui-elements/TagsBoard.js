<<<<<<< HEAD
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

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleDelete(tagValue) {
        const { setTagArr, tagArray } = this.props;
        const newArray = tagArray.filter(tag => tag.value !== tagValue);
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
                            inputValue: value.replace(/[\W\d]/gi, ''),
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
                                onDelete={this.handleDelete}
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
=======
import Tag from "./Tag";
import propTypes from 'prop-types';
import Input from './Input';


class TagsBoard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tagsArray: [],
            inputValue: '',
        };
        
        this.keyPress = this.keyPress.bind(this)
        this.createTagsArray = this.createTagsArray.bind(this)
    };
    
    componentDidMount() {
        this.createTagsArray(this.props.labelArray);
    };

    createTagsArray = (labelArray) => {
        const newTagsArray = [];
        labelArray.map(label => {
            let value = label.replace(/\s+/g, '-').toLowerCase();
            newTagsArray.push({'value': value, 'label': label})
        });
        this.setState({tagsArray: newTagsArray})
    }

    handleDelete = tagValue => {
        const newArray = this.state.tagsArray.filter(tag => tag.value !== tagValue);
        this.setState({tagsArray: newArray});
    };

    keyPress(e){
        if(e.keyCode == 13){
           const { setLabelArr, labelArray } = this.props;
           const newArray = labelArray;
           newArray.push(this.state.inputValue);
           setLabelArr(newArray);
           this.setState({inputValue: ''});
           this.createTagsArray(newArray);
        }
     }
    
    render () {
        return(<div>
            <Input onKeyDown={this.keyPress} label='Tags' value={this.state.inputValue} setValue={(value) => this.setState({inputValue: value})}></Input>
            {this.state.tagsArray.map(tag => {
                return (
                    <Tag 
                        value={tag.value} 
                        label={tag.label} 
                        onDelete={this.handleDelete}>
                    </Tag>
                );
            })}
        </div>)
    }
}

Tag.propTypes = {
    labelArray: propTypes.array,
};

Tag.defaultProps = {
    labelArray: [],
};

export default TagsBoard;
>>>>>>> add funtion to create tags from input
