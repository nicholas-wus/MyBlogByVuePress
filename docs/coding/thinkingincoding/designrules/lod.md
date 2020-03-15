# 迪米特原则


## 迪米特法则（Law of Demeter，LoD）
### 定义
- 又叫作最少知道原则（Least Knowledge Principle，LKP)，产生于 1987 年
美国东北大学（Northeastern University）的一个名为迪米特（Demeter）的研究项目，
由伊恩·荷兰（Ian Holland）提出，被 UML 创始者之一的布奇（Booch）普及，
后来又因为在经典著作《程序员修炼之道》（The Pragmatic Programmer）提及而广为人知。
- 指一个对象应该对其他对象保持最少的了解，尽量降低类与类之间的耦合度。
- 迪米特法则主要强调：只与你的直接朋友交谈，不跟“陌生人”说话。
其含义是：如果两个软件实体无须直接通信，那么就不应当发生直接的相互调用，
可以通过第三方转发该调用。其目的是降低类之间的耦合度，提高模块的相对独立性。
- 出现在成员变量、方法的输入、输出参数中的类都可以称为成员朋友类，而出现在
方法体内部的类不属于朋友类。
  
### 核心思想


### 作用
迪米特法则要求限制软件实体之间通信的宽度和深度，正确使用迪米特法则将有以下两个优点。
- 降低了类之间的耦合度，提高了模块的相对独立性。
- 由于亲合度降低，从而提高了类的可复用率和系统的扩展性。
但是，过度使用迪米特法则会使系统产生大量的中介类，从而增加系统的复杂性，
使模块之间的通信效率降低。所以，在釆用迪米特法则时需要反复权衡，
确保高内聚和低耦合的同时，保证系统的结构清晰。

### 应用示例
- 示例
设计一个权限系统，Boss需要查看目前发布到线上的课程数量，Boss找Teamleader进行统计，
Teamleade把统计结果告知Boss。
```java
public class Course {
}
```
```java
public class Teamleader1 {

    public void checkNumOfCourse(List<Course> courseList){
        System.out.println("Course num is：" + courseList.size());
    }
}
```
```java
public class Boss1 {

    public void cmdCheckNum(Teamleader1 teamleader1){
        //下列代码模拟这样一个过程，Boss一页页往下翻，Boss实时统计
        List<Course> courseList = new ArrayList<Course>();
        for (int i = 0;i < 20; i ++){
            courseList.add(new Course());
        }
        teamleader1.checkNumOfCourse(courseList);
    }

    public static void main(String[] args){
        Boss1 boss1 = new Boss1();
        Teamleader1 teamleader1 = new Teamleader1();
        boss1.cmdCheckNum(teamleader1);
    }
}
```
根据迪米特原则，Boss只想知道结果，不需要和Course直接交流，而Teamleader的统计才需要
应用Course对象，Boss和Course并不是朋友，如下类图：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_lod_1.png"/>
</div> 

应进行改造:
```java
public class Teamleader2 {

    public void checkNumOfCourse(){
        List<Course> courseList = new ArrayList<Course>();
        for (int i = 0;i < 20; i ++){
            courseList.add(new Course());
        }
        System.out.println("Course num is：" + courseList.size());
    }
}
```
```java
public class Boss2 {

    public void cmdCheckNum(Teamleader2 teamleader2){
        teamleader2.checkNumOfCourse();
    }

    public static void main(String[] args){
        Boss2 boss2 = new Boss2();
        Teamleader2 teamleader2 = new Teamleader2();
        boss2.cmdCheckNum(teamleader2);
    }
}
```
再看最后的类图：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_lod_2.png"/>
</div> 

