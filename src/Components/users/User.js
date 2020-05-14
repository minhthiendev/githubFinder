import React, { useEffect, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { user, loading, getUser } = githubContext
    useEffect(() => {
        getUser(match.params.login)
    }, [])


    return (
        <div>
            <h1> {user.login}</h1>
            <img src={user.avatar_url} />
        </div>
    )

}

export default User
