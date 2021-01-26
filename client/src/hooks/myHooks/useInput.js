'use strict';

import React, { useState } from 'react';

const useInput = (initial = '') => {
	const [value, setValue] = useState(initial);
	const onChange = event => setValue(event.target.value);
  const clear = () => setValue('');

	return {
		bind: { value, onChange }, 
		value,
		clear
	};
};

export default useInput;