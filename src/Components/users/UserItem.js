import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class UserItem extends Component {

    render() {
        const { login, avatar_url } = this.props.user;
        return (

            <div className="card text-center col-md-2">
                <img src={avatar_url} alt="github icon " className="rounded-circle my-2" width="100%" height="150" />
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm "> See more</Link>
            </div>
        )
    }
}

export default UserItem
