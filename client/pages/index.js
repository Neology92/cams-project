import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Container, Paper } from '@material-ui/core';
import { ShoppingList, Button } from '../components';

const Home = ({ switchColorsMode }) => (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
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
                    <ShoppingList />
                </StyledPaper>
            </Grid>
        </Grid>
    </Container>
);

const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const Space = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

Home.propTypes = {
    switchColorsMode: PropTypes.func.isRequired,
};

export default Home;
