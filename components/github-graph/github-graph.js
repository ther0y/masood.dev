import classes from './github-graph.module.scss';

function GithubGraph() {
  return (
    <div className="sm:mx-auto">
      <img
        className={classes.wrapper + ' '}
        src="https://ghchart.rshah.org/1DA1F2/ther0y"
        height={120}
        width={700}
        alt="Masood's Github chart"
        loading="lazy"
        draggable={false}
      />
      <h4 className="mt-1 text-sm text-gray-400">
        Github activity graph |{' '}
        <a href="https://github.com/ther0y" target="_blank" rel="noreferrer">
          <span className="hover:underline cursor-pointer">@ther0y</span>
        </a>
      </h4>
    </div>
  );
}

export default GithubGraph;
