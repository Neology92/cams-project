import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Grid, Container, Paper } from '@material-ui/core';
import { ShoppingList } from '../components';

const Home = ({ switchColorsMode }) => (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <StyledPaper>
                    <Title>Hello world!</Title>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            switchColorsMode();
                        }}
                    >
                        Click me!
                    </Button>
                </StyledPaper>
            </Grid>

            <Grid item xs={6}>
                <StyledPaper>a</StyledPaper>
            </Grid>
            <Grid item xs={6}>
                <StyledPaper>b</StyledPaper>
            </Grid>
            <Grid item xs={12}>
                <StyledPaper>
                    <ShoppingList />
                </StyledPaper>
            </Grid>
        </Grid>
    </Container>
);

const Title = styled.h1`
    color: ${({ theme }) => theme.palette.secondary.contrastText};
`;

const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.secondary};
`;

Home.propTypes = {
    switchColorsMode: PropTypes.func.isRequired,
};

export default Home;
