//Konfiguracja Webpack
const	path	=	require("path");
module.exports	=	{
		entry:
		"./js/main.jsx",
		output:	{	path:	path.resolve("dist"),		filename:	"out.js"	},
		watch:	true,
		module:	{
				loaders:	[	{
								test:	/\.jsx$/,		exclude:	/node_modules/,
								loader:	'babel-loader',
								query:	{	presets:	['env', 'stage-2',	'react']	}
						},
										{
								test: /\.css$/,
								loader: 'css-loader' 
						}
				]
		}
  };
