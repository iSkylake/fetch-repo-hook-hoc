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
		<form onSubmit={handleSubmit}>
			<label htmlFor='repo'>Repository Name</label>
			<input
				id='repo'
				type='text'
				autoComplete='off'
				value={value}
				onChange={e => setValue(e.target.value)}/>
			<button>Search</button>
		</form>
	)
}

export default RepoForm;
