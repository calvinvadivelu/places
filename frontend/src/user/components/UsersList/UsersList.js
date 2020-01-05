import React from './node_modules/react';

import './UsersList.scss'
import UserItem from '../UserItem/UserItem';

const UsersList = props => {
    if (props.items.length === 0){
        return (
            <div className="center">
                <h2>No Users Found.</h2>
            </div>
        )
    }

    return (
        <ul>
            {props.items.map(item => 
                <UserItem key={user.id} id={user.id} name={user.name} placeCount = {user.places} />
            )}
        </ul>
    )
};

export default UsersList;