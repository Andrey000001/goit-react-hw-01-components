import PropTypes from "prop-types"; // ES6
import { List, ChoiceGreen, ChoiceRed, Item } from "./FriendList.styled";

export const FriedList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Item key={id}>
                    {isOnline ? <ChoiceGreen /> : <ChoiceRed />}
                    <span>{isOnline}</span>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                </Item>
            ))}
        </List>
    );
};

FriedList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};
