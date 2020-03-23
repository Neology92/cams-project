import styled from 'styled-components';

const Description = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.text.secondary};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.primary.main};
        :hover {
            color: ${({ theme }) => theme.palette.primary.dark};
        }
    }
`;

export default Description;
