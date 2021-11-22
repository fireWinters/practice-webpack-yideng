import {list} from './list'
import img from './src/assets/img/112.png'
import './src/assets/css/test.less'
// import './src/assets/css/index.css'
console.log(img,'img')
console.log("111img");
console.log("222img");
console.log("23332img");   
    // "serve": "webpack serve",
// list();
// 这些写法技术栈都做处理了，所以在我们自己的代码层面么有看到对应的配置
// // 热更新某个模块
// if (module.hot) {
//     module.hot.accept('./list',()=>{
//         console.log('热更新模块')
//         list();
//     })
// // 热更新取消对应模块的写法
// module.hot.decline('./list')
// }

const arr1=[1,2,3,4]
let arr2=[...arr1]
console.log(arr2,'arr2')