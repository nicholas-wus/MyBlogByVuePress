# 接口隔离原则


## 接口隔离原则（Interface Segregation Principle，ISP）
### 定义
- 2002 年罗伯特·C.马丁给“接口隔离原则”的定义是：客户端不应该被迫依赖于它不使用
的方法。该原则还有另外一个定义：一个类对另一个类的依赖应该建立在最小的接口上。
- 指多个专门的接口，而不使用单一的总接口，客户端不应该依赖它不需要的接口。


### 核心思想
- 要求程序员尽量将臃肿庞大的接口拆分成更小的和更具体的接口，
让接口中只包含客户感兴趣的方法。
- 要为各个类建立它们需要的专用接口，而不要试图去建立一个很庞大的接口
供所有依赖它的类去调用。
- 这个原则指导我们在设计接口时应当注意以下几点：
  - 一个类对另一个类的依赖应该建立在最小的接口之上。
  - 建立单一接口，不要建立庞大臃肿的接口。
  - 尽量细化接口，接口中的方法尽量少（不是越少越好，一定适度）。
- 接口隔离原则符合我们常说的高内聚、低耦合的设计思想，可以使类具有很好的
可读性、可扩展性和可维护性。我们在设计接口的时候，要多花时间去思考，要考虑
业务模型，包括对以后有可能发生变更的地方还要做一些预判。所以，对于抽象、
对于业务模型的理解是非常重要的。
 

### 作用
接口隔离原则是为了约束接口、降低类对接口的依赖性，
遵循接口隔离原则有以下 5 个优点：

- 将臃肿庞大的接口分解为多个粒度小的接口，可以预防外来变更的扩散，
提高系统的灵活性和可维护性。
- 接口隔离提高了系统的内聚性，减少了对外交互，降低了系统的耦合性。
- 如果接口的粒度大小定义合理，能够保证系统的稳定性；但是，如果定义过小，
则会造成接口数量过多，使设计复杂化；
如果定义太大，灵活性降低，无法提供定制服务，给整体项目带来无法预料的风险。
- 使用多个专门的接口还能够体现对象的层次，因为可以通过接口的继承，实现对总接口的定义。
- 能减少项目工程中的代码冗余。过大的大接口里面通常放置许多不用的方法，
当实现这个接口的时候，被迫设计冗余的代码。

### 应用示例
- 示例
```java
public interface IAnimal1 {

    void eat();
    void fly();
    void swim();
}
```
```java
public class Bird1 implements IAnimal1{
    @Override
    public void eat() {
    }

    @Override
    public void fly() {
    }

    @Override
    public void swim() {
    }
}
```
```java
public class Dog1 implements IAnimal1{
    @Override
    public void eat() {
    }

    @Override
    public void fly() {
    }

    @Override
    public void swim() {
    }
}
```
可以看出bird的swim方法只能空着，dog的fly方法显示是不可能的。这时候，我们应该
针对不同的动物行为来设计不同的接口。
```java
public interface IEatAnimal {

    void eat();
}
```
```java
public interface ISwimAnimal {

    void swim();
}
```
```java
public interface IFlyAnimal {

    void fly();
}
```
```java
public class Dog implements IEatAnimal,ISwimAnimal {

    @Override
    public void eat() {
    }

    @Override
    public void swim() {
    }
}
```
最后类图：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_isp_1.png"/>
</div> 