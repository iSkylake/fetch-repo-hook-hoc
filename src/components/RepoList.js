function RepoList(props) {
	const { data: repos, isLoading, error } = props;

	if(error) return <h3 className='message'>{error}</h3>

	if(isLoading) return <h3 className='message'>Fetching Data...</h3>

	return (
		<ul>
			{
				repos.map(repo => (
					<li className='content list-item' key={repo.id}>
						<a href={repo.html_url} target='_blank' rel='noreferrer'>
							{repo.full_name}
						</a>
					</li>
				))
			}
		</ul>
	)
}

export default RepoList;
