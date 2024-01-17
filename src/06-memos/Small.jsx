import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/display-name
export const Small = React.memo(({ value }) => {
	console.log('Me volvi a dibujar :(');
	return <small>{value}</small>;
});

Small.propTypes = {
	value: PropTypes.number
};
