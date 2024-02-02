import PropTypes from "prop-types"; // ES6
import { Friend } from "./Friend/Friend";
import { List } from "./FriendList.styled";

export const FriedList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Friend
                    id={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
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
    )
};
