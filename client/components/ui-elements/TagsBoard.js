import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';
import Input from './Input';
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
            const { setTagsArray, tagsArray, maxTags } = this.props;
            const { inputValue } = this.state;
            const value = inputValue.replace(/\s+/g, '-').toLowerCase();

            if (tagsArray.length >= maxTags) {
                this.setState({
                    inputState: 'error',
                    errorMessage: `Limit tagów: ${maxTags}`,
                });
            } else if (inputValue === '') {
                this.setState({
                    inputState: 'error',
                    errorMessage: 'Nie można dodać pustego tagu.',
                });
            } else if (inputValue.length > 15) {
                this.setState({
                    inputState: 'error',
                    errorMessage: 'Tag może mieć maksymalnie 15 znaków.',
                });
            } else if (tagsArray.some(tag => tag.value === value)) {
                this.setState({
                    inputState: 'error',
                    errorMessage: 'Taki tag już istnieje ',
                });
            } else {
                const newArray = tagsArray;
                newArray.push({ value, label: inputValue });
                setTagsArray(newArray);
                this.setState({
                    inputState: 'default',
                });
            }
            this.setState({
                inputValue: '',
            });
        }
    }

    render() {
        const { tagsArray, width, icon, ...props } = this.props;
        const { inputValue, inputState, errorMessage } = this.state;
        return (
            <Wrapper width={width}>
                <Input
                    icon={icon}
                    label="Tags"
                    width="100%"
                    {...props}
                    value={inputValue}
                    onKeyDown={this.handleAdd}
                    setValue={value =>
                        this.setState({
                            // Block using special characters
                            inputValue: value.replace(/[^\w\s]/gi, ''),
                        })
                    }
                    state={inputState}
                    onBlur={() => this.setState({ inputState: 'default' })}
                />
                {inputState === 'error' && (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                )}
                <TagsContainer>
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
                </TagsContainer>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: ${({ width }) => width};
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
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
    maxTags: PropTypes.number,
    width: PropTypes.string,
    icon: PropTypes.func,
};

TagsBoard.defaultProps = {
    maxTags: 3,
    width: '256px',
    icon: null,
};

export default TagsBoard;
