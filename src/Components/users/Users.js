import React, { useContext } from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';


const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="row">
                {users.map(x => (
                    <UserItem key={x.id} user={x}></UserItem>
                ))}
            </div>

        )
    }
}
// Users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// }
export default Users
