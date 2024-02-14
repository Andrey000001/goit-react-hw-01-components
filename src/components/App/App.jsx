import user from "../../logs_json/user.json";
import data from "../../logs_json/data.json";
import friends from "../../logs_json/friends.json";
import transactions from "../../logs_json/transactions.json";

import { Container } from "./App.styled";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { FriedList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

export const App = () => {
    return (
        <Container>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics data={data} text="Upload stats" />
            <FriedList friends={friends} />
            <TransactionHistory transactions={transactions} />
        </Container>
    );
};
