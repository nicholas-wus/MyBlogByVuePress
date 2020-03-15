# 开闭原则


## 开闭原则（Open-Closed Principle，OCP）
### 定义
- 由勃兰特·梅耶（Bertrand Meyer）提出，他在 1988 年的著作《面向对象软件构造》
（Object Oriented Software Construction）中提出：软件实体
应当对扩展开放，对修改关闭。
- 这里的软件实体包括以下几个部分：
  - 项目中划分出的模块
  - 类与接口
  - 方法（函数）
  
### 核心思想
- 开闭原则的含义是：当应用的需求改变时，在不修改软件实体的源代码或者二进制代码
的前提下，可以扩展模块的功能，使其满足新的需求。
- 强调的是用抽象构建框架，用实现扩展细节，可以提高软件系统的可复用性及可维护性。
- 开闭原则是面向对象设计中最基础的设计原则，它指导我们如何建立稳定、灵活的系统。
- 开闭原则的核心思想就是面向抽象编程。

### 作用
开闭原则是面向对象程序设计的终极目标，它使软件实体拥有一定的适应性和灵活性的
同时具备稳定性和延续性。具体来说，其作用如下：

1. 对软件测试的影响
    </br> 软件遵守开闭原则的话，软件测试时只需要对扩展的代码进行测试就可以了，
    因为原有的测试代码仍然能够正常运行。
2. 可以提高代码的可复用性
    </br> 粒度越小，被复用的可能性就越大；在面向对象的程序设计中，根据原子和
    抽象编程可以提高代码的可复用性。
3. 可以提高软件的可维护性
     </br> 遵守开闭原则的软件，其稳定性高和延续性强，从而易于扩展和维护。

### 应用示例
- 版本更新：尽可能不修改原有代码，但是可以增加新功能。
- 弹性工作制：每天工作8小时是关闭的，但是什么时候来、什么时候走是开放的。
- 课程体系的例子：
 
 首先创建一个课程接口ICourse
```java
public interface ICourse {

    Integer getId();
    String getName();
    Integer getPrice();
}
```
整个课程生态有Java架构、大数据、人工智能、前端、软件测试等，我们创建一个Java架构
课程的类JavaCourse：
```java
public class JavaCourse implements ICourse {

    private Integer id;
    private String name;
    private Integer price;

    public JavaCourse(Integer id, String name, Integer price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    @Override
    public Integer getId() {
        return null;
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public Integer getPrice() {
        return null;
    }
}
```
现在我们要给Java架构课程做活动，价格优惠。如果修改JavaCourse中的getPrice()方法，
则存在一定的风险，可能影响其他地方的调用结果。如果想不修改原有代码的前提下，实现
价格优惠这个功能。我们再写一个处理优惠逻辑的类 JavaDiscountCourse：
```java
public class JavaDiscountCourse extends JavaCourse {

    public JavaDiscountCourse(Integer id, String name, Integer price) {
        super(id, name, price);
    }

    public Double getOriginPrice(){
        return super.getPrice();
    }

    public Double getPrice(){
        return super.getPrice() * 0.61;
    }
}
```
类图如下：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_ocp_1.png"/>
</div> 