<<<<<<< HEAD
import propTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';
import Input from './Input';
import { Crosshair } from '../../assets/icons';

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
            const value = inputValue.replace(/\s+/g, '-').toLowerCase();

            if (tagArray.length >= 3) {
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
            } else if (tagArray.some(tag => tag.value === value)) {
                this.setState({
                    inputValue: '',
                    inputState: 'error',
                    errorMessage: 'Tagi muszą być unikalne.',
                });
            } else {
                const newArray = tagArray;
                newArray.push({ value, label: inputValue });
                setTagArr(newArray);
                this.setState({
                    inputValue: '',
                    inputState: 'default',
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
