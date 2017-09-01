import React from 'react';
import PropTypes from 'prop-types';
import "./index.css";

const HelloWorld = ({onClick}) => <div>
	<h1>Hello world</h1>
	<a onClick={
		() => onClick('You clicked on the link, dude!')
	}>Action test</a>
</div>;

HelloWorld.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default HelloWorld;