import styled from "@emotion/styled";

export const Profile = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    overflow: hidden;
    padding-top: 40px;
    img {
        display: block;
        border-radius: 50%;
        padding: 20px;
        margin-bottom: 20px;
        background-color: ${(props) => props.theme.colors.grey};
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
`;

export const Tag = styled.p`
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.greyText};
    font-weight: 500;
    font-size: 14px;
`;
export const Location = styled.p`
    color: ${(props) => props.theme.colors.greyText};
    font-weight: 500;
    font-size: 14px;
`;
export const Stats = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.li`
    background-color: ${(props) => props.theme.colors.greyLight};
    padding: 20px 20px;
    border-top: 1px solid ${(props) => props.theme.colors.grey};

    :not(:last-child) {
        border-right: 1px solid ${(props) => props.theme.colors.grey};
    }
`;

export const Label = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.greyText};
    margin-bottom: 5px;
`;
export const Quantity = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
`;
