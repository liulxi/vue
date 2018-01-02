module.exports={
	//配置入口文件
	entry:'./main.js',
	//配置入口输出位置
	output:{
		path:__dirname, //项目根目录
		filename:'build.js'
	},
	//配置模块加载器
	module:{
		loaders:[
			{test:/\.vue$/,loader:'vue-loader'}, //所有.vue文件由vue-loader加载
			{test:/\.js$/,loader:'babel',exclude:/node_modules/} //所有.js文件由babel加载编译，除了node_modules
		]
	},
	//配置babel选项
	babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	}
};