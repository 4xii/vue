/*
 * Author: 朱世新
 * Date: 2021-03-26 18:03:41
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-26 19:01:57
 * Description: 
*/


//用proxy监听一个对象，数据的获取，会触发get函数
//Obj.name 收集依赖

//Obj.name = xx 出发set，执行收集到的effect
//用map收集所有依赖
// {
//   target:{
//     key:[effect1,effect2]
//   }
// }
let targetMap = new WeakMap()
let effectStack = []//存储effect
//收集完成
function track(target,key){
  //初始化
  const effect = effectStack[effectStack.length -1]
  if(effect){
    //需要收集
    let depMap = targetMap.get(target)
    if(depMap === undefined){
      depMap = new Map();
      targetMap.set(target,depMap)
    }

    let dep = depMap.get(key)
    if(dep === undefined){
      dep = new Set()
      depMap.set(key,dep)
    }
    //完成初始化
    //进行收集
    //双向缓存
    if(!dep.has(effect)){
      dep.add(effect)//把effect放在dep
      effect.deps.push(dep)
    }
  }
}
function trigger(target,key,info){
  let depMap = targetMap.get(target)
  if(depMap === undefined){
    return //没有effect副作用
  }
  const effects = new Set();
  const computed = new Set(); //computed是一个特殊的effect

  if(key){
    let deps = depMap.get(key)
    deps.forEach(effect => {
      if(effect.computed){
        computed.add(effect)
      } else {
        effects.add(effect)
      }
    })
  }
  effects.forEach(effect => effect())
  computed.forEach(computed => computed())
}
const baseHandler = {
  //get 和 set 还有delete 已经是否存在
  get(target, key) {
    const ret = target[key] //实际中用Reflect.get(target,key)
    //@todo 收集依赖到全局的map
    track(target,key)
    return ret // typeof ret == 'object'?reactive(ret):ret
  },
  set(target, key,val) {
    const info = { oldValue: target[key], newValue: val }
    target[key] = val //Reflect.set

    //@todo 拿到收集的effect，执行
    //执行effect
    trigger(target,key,info)
  }
}
function reactive(target) {
  //Object.defineProperty vue2
  const observed = new Proxy(target, baseHandler)
  return observed
}


function effect(fn,options={}) {
  let e = createReactiveEffect(fn,options)
  if(!options.lazy){
    e()
  }
  return e
}

function createReactiveEffect(fn,options){
  const effect = function effect(...args){
    return run(effect,fn,args)
  }
  effect.deps=[]
  effect.computed = options.computed
  effect.lazy = options.lazy
  return effect
}

//调度
function run(effect,fn,args){
  if(effectStack.indexOf(effect) === -1){
    try{
      effectStack.push(effect)
      return fn(...args)
    } finally {
      effectStack.pop()
    }
  }
}

function computed(fn) {
  const runner = effect(fn,{computed:true,lazy:true})
  return {
    effect:runner,
    get value(){
      return runner()
    }
  }
}