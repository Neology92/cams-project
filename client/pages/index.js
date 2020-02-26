import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Container, Paper } from '@material-ui/core';
import { Button, Select, Radio, CheckboxGroup, Input } from '../components';

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
    const [values6, setValues6] = useState({
        '1': true,
        '2': false,
        '3': false,
        '4': false,
    });

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Space>
                        <Button
                            type="default"
                            color="primary"
                            onClick={() => {
                                switchColorsMode();
                            }}
                        >
                            Primary Button
                        </Button>
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
                        <CheckboxGroup
                            items={selectItems}
                            values={values5}
                            setValues={setValues5}
                            color="primary"
                        />
                        <CheckboxGroup
                            items={selectItems}
                            values={values6}
                            setValues={setValues6}
                            color="secondary"
                        />
                    </Space>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper>
                        <Space>
                            <Input label="Label" placeholder="Placeholder" />
                        </Space>
                    </StyledPaper>
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
