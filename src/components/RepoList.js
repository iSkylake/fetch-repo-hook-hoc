function RepoList(props) {
	const { data: repos, isLoading, error } = props;

	if(error) return <h3>{error}</h3>

	if(isLoading) return <h3>Fetching Data...</h3>

	return (
		<ul>
			{
				repos.map(repo => (
					<li key={repo.id}>{repo.full_name}</li>
				))
			}
		</ul>
	)
}

export default RepoList;
