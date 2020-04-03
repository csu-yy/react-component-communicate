# React 组件通讯
[参考链接](https://www.jianshu.com/p/fb915d9c99c4)

## 1、父组件向子组件通信 - pages/category1
这是最简单也是最常用的一种通信方式：父组件通过向子组件传递 props，子组件得到 props 后进行相应的处理。

## 2、子组件向父组件通信 - pages/category2
利用回调函数，可以实现子组件向父组件通信：
父组件将一个函数作为 props 传递给子组件，子组件调用该回调函数，便可以向父组件通信。

## 3、跨级组件通信 - pages/category3
所谓跨级组件通信，就是父组件向子组件的子组件通信，向更深层的子组件通信。跨级组件通信可以采用下面两种方式：
- 中间组件层层传递 props
这种方式，如果父组件结构较深，那么中间的每一层组件都要去传递 props，增加了复杂度，并且这些 props 并不是这些中间组件自己所需要的。不过这种方式也是可行的，当组件层次在三层以内可以采用这种方式，当组件嵌套过深时，采用这种方式就需要斟酌了。
- 使用 context 对象
这种方式，context相当于一个全局变量，是一个大容器，我们可以把要通信的内容放在这个容器中，这样一来，不管嵌套有多深，都可以随意取用。
使用 context 也很简单，需要满足两个条件：

- 上级组件要声明自己支持 context，并提供一个函数来返回相应的 context 对象
- 子组件要声明自己需要使用 context

如果是父组件向子组件单向通信，可以使用变量，如果子组件想向父组件通信，同样可以由父组件提供一个回调函数，供子组件调用，回传参数。
在使用 context 时，有两点需要注意：

- 父组件需要声明自己支持 context，并提供 context 中属性的 PropTypes
- 子组件需要声明自己需要使用 context，并提供其需要使用的 context 属性的 PropTypes

注意：父组件需提供一个 getChildContext 函数，以返回一个初始的 context 对象
如果组件中使用构造函数（constructor），还需要在构造函数中传入第二个参数 context，并在 super 调用父类构造函数是传入 context，否则会造成组件中无法使用 context。

````
...
constructor(props,context){
  super(props,context);
}
...
````
 - 如果一个组件内定义了```contextTypes```，下面的生命周期方法会接收一个额外参数，就是```context```对象：
1. ```constructor(props, context)```
2. ```componentWillReceiveProps(nextProps, nextContext)```
3. ```shouldComponentUpdate(nextProps, nextState, nextContext)```
4. ```componentWillUpdate(nextProps, nextState, nextContext)```   

简单来说就是：
1. 通过给父组件（context的生产者）添加```childContextTypes```和```getChildContext```，React自动向下传递信息，子树上的所有组件可以通过定义```contextTypes```来访问context。
2. 如果 contextTypes 没有被定义，context 就会是个空对象。


### 改变context对象
我们不应该也不能直接改变 context 对象中的属性，要想改变 context 对象，只有让其和父组件的 state 或者 props 进行关联，在父组件的 state 或 props 变化时，会自动调用 getChildContext 方法，返回新的 context 对象，而后子组件进行相应的渲染。

## 4、非嵌套组件间通信 - pages/category4
非嵌套组件，就是没有任何包含关系的组件，包括兄弟组件以及不在同一个父级中的非兄弟组件。
对于非嵌套组件，可以采用下面两种方式：

- 利用二者共同父组件的 context 对象进行通信
- 使用自定义事件的方式

如果采用组件间共同的父级来进行中转，会增加子组件和父组件之间的耦合度，如果组件层次较深的话，找到二者公共的父组件不是一件容易的事，当然还是那句话，也不是不可以...
建议采用自定义事件的方式来实现非嵌套组件间的通信。

例子中我们需要使用一个 events 包：
```
npm install events --save
```
新建一个 ev.js，引入 events 包，并向外提供一个事件对象，供通信时使用：
```
import { EventEmitter } from "events";
export default new EventEmitter();
```




