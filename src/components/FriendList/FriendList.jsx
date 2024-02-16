import PropTypes from "prop-types"; // ES6
import { List } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";
export const FriedList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ id, ...friendsInfo }) => (
                <FriendListItem key={id} friendsInfo={friendsInfo} />
            ))}
        </List>
    );
};
FriedList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
