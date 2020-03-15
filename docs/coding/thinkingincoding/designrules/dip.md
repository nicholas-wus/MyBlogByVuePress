# 依赖倒置原则


## 依赖倒置原则（Dependence Inversion Principle，DIP）
### 定义
- 是 Object Mentor 公司总裁罗伯特·马丁（Robert C.Martin）于 1996 年在 C++ Report 
上发表的文章。
- 依赖倒置原则的原始定义为：高层模块不应该依赖低层模块，两者都应该依赖其抽象；
抽象不应该依赖细节，细节应该依赖抽象。
  
### 核心思想
- 其核心思想是：要面向接口编程，不要面向实现编程。 
- 依赖倒置原则是实现开闭原则的重要途径之一，它降低了客户与实现模块之间的耦合。
- 由于在软件设计中，细节具有多变性，而抽象层则相对稳定，因此以抽象为基础搭建起来的
架构要比以细节为基础搭建起来的架构要稳定得多。
这里的抽象指的是接口或者抽象类，而细节是指具体的实现类。
- 使用接口或者抽象类的目的是制定好规范和契约，而不去涉及任何具体的操作，
把展现细节的任务交给它们的实现类去完成。
- 通过依赖倒置，可以减少类与类之间的耦合性，提高系统的稳定性，
提高代码的可读性和可维护性，并且能够降低修改程序所造成的风险。
- 以抽象为基准比以细节为基准搭建起来的架构要稳定得多，因此在拿到需求之后，要
面向接口编程，先顶层再细节的设计代码结构。

### 作用
- 依赖倒置原则可以降低类间的耦合性。
- 依赖倒置原则可以提高系统的稳定性。
- 依赖倒置原则可以减少并行开发引起的风险。
- 依赖倒置原则可以提高代码的可读性和可维护性。

### 应用示例
- 案例：
```java
public class TomOld {

    public void studyJava(){
        System.out.println("studyJava");
    }

    public void studyPython(){
        System.out.println("studyPython");
    }

    public static void main(String[] args){

        TomOld tomOld = new TomOld();
        tomOld.studyJava();
        tomOld.studyPython();
    }
}
```
Tom如果还想学AI、大数据等课程。这时候，随着业务的扩展，要从底层到高层（调用层）
依次修改代码。在Tom类中增加studyAI()方法，在高层也要追加调用。如此一来，系统发布
以后，实际上是非常不稳定的，在修改代码的同时也会带来意想不到的风险。
</br>接下来我们优化一下代码：
创建课程的抽象接口
```java
public interface ICourse {

    void study();
}
```
然后编写JavaCourse
```java
public class JavaCourse implements ICourse {

    @Override
    public void study() {
        System.out.println("studyJava");
    }
}
```
再编写PythonCourse
```java
public class PythonCourse implements ICourse {

    @Override
    public void study() {
        System.out.println("studyPython");
    }
}
```
再修改Tom类
```java
public class Tom {

    public void study(ICourse course){
        course.study();
    }

    public static void main(String[] args){
        Tom tom = new Tom();
        tom.study(new JavaCourse());
        tom.study(new PythonCourse());
    }
}
```
这时候，Tom兴趣无论怎么暴涨，对于新的课程，只需要新建一个类，通过传参的方式告诉
Tom，而不需要修改底层代码。实际上这是一种大家非常熟悉的方式，叫依赖注入。
</br>
注入的方式还有**构造器注入**和**Setter注入**
 - 构造器注入
```java
public class TomCon {

    private ICourse course;

    public TomCon(ICourse course) {
        this.course = course;
    }

    public void study(){
        course.study();
    }

    public static void main(String[] args){
        TomCon tomCon = new TomCon(new JavaCourse());
        tomCon.study();
    }
}
```
但是构造器注入，调用时，每次都要创建实例。如果Tom是全局单例，则我们就只能
选择Setter方式来注入。
 - Setter注入
```java
public class TomSetter {

    private ICourse course;

    public void setCourse(ICourse course) {
        this.course = course;
    }

    public void study(){
        course.study();
    }

    public static void main(String[] args){
        TomSetter tomSetter = new TomSetter();
        tomSetter.setCourse(new JavaCourse());
        tomSetter.study();

        tomSetter.setCourse(new PythonCourse());
        tomSetter.study();
    }
}
```
最终的类图如下：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_dip_1.png"/>
</div> 