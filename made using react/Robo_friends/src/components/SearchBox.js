import React from 'react';

function SearchBox({ searchfield, searchChange }) {
	return (
		<div className="pa2">
			<input
				type="Search"
				className="pa3 ba b--green bg-lightest-blue"
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
}
export default SearchBox;
