'use strict';

const buildApi = (data, methods) => {
	const api = {};
	for (const method of methods) {
		api[method] = (...args) => new Promise((resolve, reject) => {
			const url = `/api/${data}/${method}`;

			fetch(url, {
				method: 'POST',
				headers: {
        	'Content-Type': 'application/json',
        	Accept: 'application/json',
      	},
        body: JSON.stringify(...args),
			}).then(res => {
				const { status } = res;
				if (status !== 200) {
          reject(new Error(`Status Code: ${status}`));
          return;
        }
        resolve(res.json());
			});
		});
	}

	return api;
}

export const api = buildApi('cards', ['get', 'add', 'remove']);