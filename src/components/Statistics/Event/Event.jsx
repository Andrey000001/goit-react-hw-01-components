import {
    Title,
    Statistics,
    StatList,
    Item,
    Label,
    Percentage,
} from "./Event.styled";
import PropTypes from "prop-types";

export const Event = ({ data, text }) => {
    return (
        <Statistics>
            {text && <Title>{text}</Title>}
            <StatList class="stat-list">
                {data.map(({ id, label, percentage }) => {
                    const randomColor = Math.floor(
                        Math.random() * 16777215
                    ).toString(16);
                    return (
                        <Item key={id} colorBackground={randomColor}>
                            <Label>{label}</Label>
                            <Percentage>{percentage}%</Percentage>
                        </Item>
                    );
                })}
            </StatList>
        </Statistics>
    );
};

Event.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
    test: PropTypes.string,
};
