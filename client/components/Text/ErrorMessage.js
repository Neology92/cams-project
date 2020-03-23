import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.palette.error.main};
    font-size: 12px;
    margin: -5px 0 5px;

    &::first-letter {
        text-transform: uppercase;
    }
`;

export default ErrorMessage;
