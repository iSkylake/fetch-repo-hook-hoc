function RepoList(props) {
	const { data: repos, isLoading, error } = props;

	if(error) return <h3 className='message'>{error}</h3>

	if(isLoading) return <h3 className='message'>Fetching Data...</h3>

	return (
		<ul>
			{
				repos.map(repo => (
					<li className='content list-item' key={repo.id}>{repo.full_name}</li>
				))
			}
		</ul>
	)
}

export default RepoList;
