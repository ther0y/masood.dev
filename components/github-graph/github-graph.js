import React from 'react';

import classes from './github-graph.module.css';

function GithubGraph() {
  return (
    <div className="mx-8 sm:mx-auto">
      <img
        className={classes.wrapper + ' '}
        src="https://ghchart.rshah.org/ther0y"
        height={120}
        width={700}
        alt="Masood's Github chart"
      />
    </div>
  );
}

export default GithubGraph;
