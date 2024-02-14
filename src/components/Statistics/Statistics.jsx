import PropTypes from "prop-types";
import {
    Contant,
    Title,
    StatisticsCase,
    Percentage,
    Label,
    Item,
    StatList,
} from "./Statistics.styled";
export const Statistics = ({ data, text }) => {
    return (
        <Contant>
            <StatisticsCase>
                {text && <Title>{text}</Title>}

                <StatList class="stat-list">
                    {data.map(({ percentage, label, id }) => {
                        const randomColor = Math.floor(
                            Math.random() * 16777215
                        ).toString(16);
                        return (
                            <Item key={id} colorBackground={randomColor}>
                                <Label class="label">{label}</Label>
                                <Percentage class="percentage">
                                    {percentage}%
                                </Percentage>
                            </Item>
                        );
                    })}
                </StatList>
            </StatisticsCase>
        </Contant>
    );
};
Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};
