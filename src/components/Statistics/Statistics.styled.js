import styled from "@emotion/styled";

export const Contant = styled.div`
    background-color: ${(props) => props.theme.colors.grey};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
`;

export const Title = styled.h2`
    font-size: 18px;
    margin: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${(props) => props.theme.colors.white};
`;
export const StatisticsCase = styled.section`
    max-width: 303px;
    width: 100%;
    text-align: center;
`;

export const StatList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;
export const Item = styled.li`
    padding: 10px;
    background-color: ${({ colorBackground }) => "#" + colorBackground};
`;
export const Label = styled.span`
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 3px;
`;
export const Percentage = styled.span`
    color: ${(props) => props.theme.colors.white};
`;
