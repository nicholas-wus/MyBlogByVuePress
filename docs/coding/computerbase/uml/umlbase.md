# UML基础


<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_computerbase_uml_umlbase_1.png"/>
</div> 


## 修饰符
- public：+
- private：-
- protected：#


## 字段
- 表示方式：**修饰符 字段名:字段类型**
- 示例：
  - \+ sex:String
  - \- name:String  
  - \# age:int

  
## 方法
- 表示方式：**修饰符 方法名(参数类型 参数)：返回值类型**
- 示例：
  - \+ playGame(int type): String
  - \- think():void
  - \# work(int type): void


## 类
- 单个类图，一般分三层：
  - 第一层表示类的名称
  - 第二层表示类的特性，通常就是字段和属性
  - 第三层是类的操作，通常是方法或行为。
- 示例：
  - 如图中Animal类
  - 如图中People类


## 接口
- 接口类似单个类图也分三层：
  - 第一层表示接口的名称
  - 第二层表示接口的特性，通常就是字段
  - 第三层是接口的操作，通常是方法或行为
- 表示方式有两种：
  - 顶部有 <>显示：如IFly接口
  - 棒棒糖表示法：如Swim接口


## 相互关系（6种，具体见详细说明）
- 继承(extends)
- 实现(implement)
- 关联(Association)
- 聚合（Aggregation）
- 合成(Composition)
- 依赖(Dependency)

### 各关系的强弱顺序
继承=实现>组合>聚合>关联>依赖
