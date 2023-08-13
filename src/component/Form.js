import React from "react";

const Form = (props) => {
	return (
		<form className='mt-3 mb-3'>
			<input
				className='input input-bordered w-full max-w-xs'
				type='text'
				placeholder='Wpisz miasto'
				value={props.value}
				onChange={props.change}
			></input>
		</form>
	);
};

export default Form;
