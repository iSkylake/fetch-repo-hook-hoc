import { useState } from 'react';

import RepoForm from './RepoForm';
import RepoList from './RepoList';
import withFetch from '../hocs/withFetch';

const ListWithData = withFetch(RepoList);

function FetchRepoHoc() {
	const [repoName, setRepoName] = useState('javascript');

	return (
		<div className='repo-ctn'>
			<h1 className='title'>Fetch Repo Hoc</h1>
			<RepoForm onSetRepoName={setRepoName}/>
			<ListWithData
				apiUrl={`https://api.github.com/search/repositories?q=${repoName}&per_page=10`}
			/>
		</div>
	)
}

export default FetchRepoHoc;
