const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin()
	]
}