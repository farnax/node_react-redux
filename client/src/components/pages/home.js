'use strict';

import React, { useState, Suspense } from 'react';

import Button from '../button/Button.js';
import Pagination from '../pagination/Pagination.js';
import { useVisibility } from '../../hooks/context/context.js';
import { toggleVisibility } from '../../hooks/reducer/reducer.js';

const Article = React.lazy(() => import('../article/Article.js')); 

const HomePage = () => {
	const { state, dispatch } = useVisibility();

	return (
		<div className="container">
		  <h2>This is HomePage</h2>
		  <p>Welcome!</p>
		  <Button />
		  <Suspense fallback={<div>Загрузка...</div>}>
        {state.visible && <Article />}
      </Suspense>
      <Pagination />
		</div>
	);
};

export default HomePage;