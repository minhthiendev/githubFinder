import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = ({ setAlerts }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {

    e.preventDefault();
    if (text === '') {
      alertContext.setAlerts("please enter something", "dark");
    } else {
      githubContext.searchUsers(text);
      setText('')
    }
  };
  const onchange = (e) => setText(e.target.value);
  ;

  return (

    <div>
      <form onSubmit={onSubmit} className="form-inline my-2 my-lg-0">
        <input
          name="text"
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={text}
          onChange={onchange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
          </button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className=" form-control btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
}

Search.propTypes = {

  onSubmit: PropTypes.func,
  onchange: PropTypes.func,
};
export default Search;
