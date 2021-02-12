import { useState } from 'react';

import RepoForm from './RepoForm';
import RepoList from './RepoList';
import useFetch from '../hooks/useFetch';

function FetchRepoHook() {
	const [repoName, setRepoName] = useState('javascript');
	const {
		data: repos,
		isLoading,
		error
	} = useFetch(`https://api.github.com/search/repositories?q=${repoName}&per_page=10`);

	return (
		<div className='repo-ctn'>
			<h1 className='title'>Fetch Repo Hook</h1>
			<RepoForm onSetRepoName={setRepoName}/>
			<RepoList isLoading={isLoading} data={repos} error={error}/>
		</div>
	)
}

export default FetchRepoHook;
