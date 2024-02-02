import PropTypes from "prop-types"; // ES6
import { Case } from "./Case/Case";
import { Content } from "./Profile.styled";
export const Profile = ({ user }) => {
    const { avatar, tag, location, stats, username } = user;
    return (
        <Content>
            <Case
                username={username}
                avatar={avatar}
                tag={tag}
                location={location}
                followers={stats.followers}
                views={stats.views}
                likes={stats.likes}
            />
        </Content>
    );
};

Profile.propTypes = {
    user: PropTypes.arrayOf(
        PropTypes.exact({
            username: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    ),
};
