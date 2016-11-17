# webpack创建环境

## 我们通过 npm 全局安装 webpack：

npm install webpack -g

安装完成后，我们可以使用 webpack 命令，执行

webpack --help
能够查看 webpack 提供的所有命令。

## 不过，通常建议在项目目录中安装一份本地的 webpack：

npm install webpack --save-dev

如果觉得 npm 安装太慢，可以尝试 npm 的替代工具 ied – 我的使用经历，它的速度比 npm 快太多了。

# 初始化项目


## 安装好 webpack 后，我们要怎么开始一个项目？

如果你用过 grunt.js、gulpjs 一类工具，它们可以借助 yeoman 来初始化项目。webpack 的情况不太一样，我们可以把它当作 node.js 项目来初始化。当然，借用一些模板会更省事，比如 react transform boilerplate。

但这里还是聊聊如何手动初始化一个 webpack 项目。

- 创建一个 package.json 文件，   用于保存项目版本、依赖关系等

   - npm init

- 在当前目录下安装 webpack
  - npm install webpack --save-dev

-之后，我们的项目下有两个内容：

package.json 文件

node_modules 文件夹

我们还需要一个 index.html 文件


# webpack配置

在单页面应用里，项目通常会有一个入口（entry）文件，假设是 main.js，我们通过配置 webpack 来指明它的位置。

首先，在项目根目录新建一个 webpack.config.js，这是 webpack 默认的配置文件名称，添加以下内容：

module.exports = {

  entry: './main.js'

};

这时在项目根目录执行 webpack，会提示我们，

Output filename not configured.

因为我们只是设定了入口（entry），还没有设定一个输出文件的路径与名称。

在 webpack.config.js 中添加一个 output：

module.exports = {

    entry: './main.js',

    output: {

        path: __dirname, // 输出文件的保存路径

        filename: 'bundle.js' // 输出文件的名称

    }

}


现在在项目里执行 webpack 命令，我们的根目录下会多出一个 bundle.js 文件

接下来，在 index.html 中引用 bundle.js 文件



# 实时刷新

在 html 文件中引用 bundle.js 文件后，我们有几个问题需要解决。

- main.js 或它所引用的模块的变化 如何通知 webpack，重新生成 bundle.js，
非常简单，在根目录下执行 webpack --watch 就可以监控目录下的文件变化并实时重新构建。

- 上面只是实时构建，我们该如何把结果通知给浏览器页面，让 HTML 页面上的 bundle.js 内容保持最新？
webpack 提供了 webpack-dev-server 解决实时刷新页面的问题，同时解决实时构建的问题。

# 安装 webpack-dev-server
