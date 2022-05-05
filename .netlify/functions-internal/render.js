const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-9768f17b.js","js":["start-9768f17b.js","chunks/index-c0831284.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "html5scanner",
				pattern: /^\/html5scanner\/?$/,
				names: [],
				types: [],
				path: "/html5scanner",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/scan/[isbn]",
				pattern: /^\/api\/scan\/([^/]+?)\/?$/,
				names: ["isbn"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/scan/_isbn_.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
