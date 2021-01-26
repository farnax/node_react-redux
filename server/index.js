'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs');

const dataCards = require('./lib/data/dataCards.js');
global.memory = new Map();
memory.set('cards', dataCards);

const api = new Map();
const apiPath = './lib/api/';

const cacheFile = name => {
	const filePath = apiPath + name;
	const key = path.basename(filePath, '.js');
	try {
		const libPath = require.resolve(filePath);
		delete require.cache[libPath];
	} catch (e) {
		console.trace(e);
		return;
	}

	try {
		const method = require(filePath);
		api.set(key, method);
		
	} catch (e) {
		api.delete(key);
	}
};

const cacheFolder = async path => {
	const files = await fs.promises.readdir(path);
	files.forEach(cacheFile);
};

const watchFolder = path => {
	fs.watch(path, (event, file) => {
		cacheFile(file);
	});
};

cacheFolder(apiPath).catch(console.error);
watchFolder(apiPath);

const receiveArgs = async req => new Promise((resolve, reject) => {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', async () => {
    const data = body.join('');
    try {
    	const args = JSON.parse(data);
    	resolve(args);
    } catch (e) {
    	reject(new Error('Can not get args  from client'));
    }
  });
});

const errorHttp = (res, status, message) => {
	res.statusCode = status;
	res.end(`"${message}"`);
};

http.createServer(async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept'); 

  console.log(req.url);
  const [reqApi, reqData, reqMethod] = req.url.substring(1).split('/');

  if (reqApi === 'api') {
		const method = api.get(reqMethod);
		const args = await receiveArgs(req).catch(err => {
			console.log(err);
			errorHttp(res, 500, 'Server error');
			return;
		});
		const result = await method(reqData, args).catch(err => {
			console.trace(err);
			errorHttp(res, 500, 'Server error');
			return;
		});
			
		res.end(JSON.stringify(result));
  } else {
  	res.end('Can not get access');
  }
}).listen(3000);