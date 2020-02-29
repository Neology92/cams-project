import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Container, Paper } from '@material-ui/core';
import {
    Button,
    Select,
    Radio,
    CheckboxGroup,
    Input,
    Toggle,
    SegmentedButtons,
    Icon,
    Tooltip,
} from '../components';
import {
    Ban,
    CheckCopy,
    AngleDown,
    Woman,
    Clock,
    Check,
    Fire,
    Lgbt,
    DarkMode,
} from '../assets/icons';

const selectItems = [
    { value: '1', label: 'First' },
    { value: '2', label: 'Second' },
    { value: '3', label: 'Very long thrid label' },
    { value: '4', label: 'Next one' },
];

const Home = ({ switchColorsMode }) => {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');
    const [value3, setValue3] = useState('1');
    const [value4, setValue4] = useState('1');
    const [values5, setValues5] = useState({
        '1': true,
        '2': false,
        '3': true,
        '4': true,
    });
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState(false);
    const [value9, setValue9] = useState(true);
    const [value10, setValue10] = useState('2');
    const [value11, setValue11] = useState('');

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Space />
                </Grid>

                <Grid item xs={12}>
                    <Space>
                        <Icon component={Ban} />
                        <Icon component={CheckCopy} size="8px" />
                        <Icon component={AngleDown} size="100px" />
                        <Icon component={Woman} size="50px" />
                        <Icon component={Clock} />
                        <Icon component={Check} />
                        <Icon component={Fire} />
                        <Icon component={Lgbt} />
                        <Icon component={DarkMode} />
                    </Space>
                </Grid>

                <Grid item xs={12}>
                    <StyledPaper>
                        <Input
                            multiline
                            placeholder="Placeholder"
                            label="Text Area"
                            value={value11}
                            setValue={setValue11}
                        />
                        <Input
                            multiline
                            rows={1}
                            rowsMax={2}
                            placeholder="Placeholder"
                            label="Wide Text Area"
                            width="40vw"
                            value={value11}
                            setValue={setValue11}
                        />
                    </StyledPaper>
                </Grid>

                <Grid item xs={12}>
                    <Space>
                        <Toggle value={value8} setValue={setValue8} />
                        <Toggle value={value9} setValue={setValue9} />
                    </Space>
                </Grid>

                <Grid item xs={12}>
                    <StyledPaper>
                        <SegmentedButtons
                            value={value10}
                            setValue={setValue10}
                            label="Segmented Buttons"
                            items={selectItems}
                        />
                    </StyledPaper>
                </Grid>

                <Grid item xs={12}>
                    <Space>
                        <CheckboxGroup
                            items={selectItems}
                            values={values5}
                            setValues={setValues5}
                            color="primary"
                        />
                    </Space>
                </Grid>

                <Grid item xs={12}>
                    <StyledPaper>
                        <Radio
                            items={selectItems}
                            value={value3}
                            setValue={setValue3}
                            label="Radio label"
                        />
                        <Radio
                            items={selectItems}
                            value={value4}
                            setValue={setValue4}
                        />
                    </StyledPaper>
                </Grid>

                <Grid item xs={12}>
                    <Space>
                        <Tooltip title="This will change your colors mode">
                            <Button
                                type="default"
                                color="primary"
                                onClick={() => {
                                    switchColorsMode();
                                }}
                            >
                                Primary Button
                            </Button>
                        </Tooltip>
                        <Button
                            color="secondary"
                            onClick={() => {
                                switchColorsMode();
                            }}
                        >
                            Secondary Button
                        </Button>
                    </Space>
                </Grid>

                <Grid item xs={12}>
                    <StyledPaper>
                        <Button
                            color="primary"
                            type="text"
                            onClick={() => {
                                switchColorsMode();
                            }}
                        >
                            Primary Button
                        </Button>

                        <Button
                            color="secondary"
                            type="text"
                            onClick={() => {
                                switchColorsMode();
                            }}
                        >
                            Secondary Button
                        </Button>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12}>
                    <Space>
                        <Select
                            items={selectItems}
                            value={value1}
                            setValue={setValue1}
                            label="Primary"
                        />
                        <Select
                            label="Secondary"
                            items={selectItems}
                            value={value2}
                            setValue={setValue2}
                        />
                    </Space>
                </Grid>

                <Grid item xs={12}>
                    <StyledPaper>
                        <Space>
                            <Tooltip title="You can write something here">
                                <Input
                                    value={value6}
                                    setValue={setValue6}
                                    label="Label"
                                    placeholder="Placeholder"
                                />
                            </Tooltip>
                        </Space>
                        <Space>
                            <Input
                                value={value7}
                                setValue={setValue7}
                                label="Search Label"
                                placeholder="Search"
                                type="search"
                            />
                        </Space>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12}>
                    <Space />
                </Grid>
            </Grid>
        </Container>
    );
};

const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const Space = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

Home.propTypes = {
    switchColorsMode: PropTypes.func.isRequired,
};

export default Home;
