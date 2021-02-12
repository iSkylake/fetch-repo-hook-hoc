import { useState } from 'react';

function RepoForm(props) {
	const [value, setValue] = useState('');
	const { onSetRepoName } = props;

	const handleSubmit = e => {
		e.preventDefault();
		if(value && value.length) {
			onSetRepoName(value);
			setValue('');
		}
	}

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<label className='search-label' htmlFor='repo'>Repository Name</label>
			<input
				className='search-input'
				id='repo'
				type='text'
				autoComplete='off'
				placeholder='Name'
				value={value}
				onChange={e => setValue(e.target.value)}/>
			<button className='btn'>Search</button>
		</form>
	)
}

export default RepoForm;
