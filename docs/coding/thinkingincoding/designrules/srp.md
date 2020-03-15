# 单一职责原则


## 单一职责原则（Single Responsibility Principle，SRP）
### 定义
- 又称单一功能原则，由罗伯特·C.马丁（Robert C. Martin）于《敏捷软件开发：原则、
模式和实践》一书中提出的。这里的职责是指类变化的原因，
- 单一职责原则规定一个类应该有且仅有一个引起它变化的原因，否则类应该被拆分。
  
### 核心思想
- 该原则提出对象不应该承担太多职责，如果一个对象承担了太多的职责，
至少存在以下两个缺点：
  - 一个职责的变化可能会削弱或者抑制这个类实现其他职责的能力；
  - 当客户端需要该对象的某一个职责时，不得不将其他不需要的职责全都包含进来，
 从而造成冗余代码或代码的浪费。
- 这样的设计，可以降低类的复杂度，提高类的可读性，提高系统的可维护性，降低变更
引起的风险。
- 总体来说，就是一个类、接口或方法只负责一项职责。
- 我们在实际开发中会有项目依赖、组合、聚合这些关系，有项目的规模、周期、技术人员
的水平、对进度的把控，其实很多类不符合单一职责原则。但是我们应尽量让接口和方法保持
单一职责，对项目后期维护是有很大帮助的。

### 作用
- 单一职责原则的核心就是控制类的粒度大小、将对象解耦、提高其内聚性。
如果遵循单一职责原则将有以下优点。
  - 降低类的复杂度。一个类只负责一项职责，其逻辑肯定要比负责多项职责简单得多。
  - 提高类的可读性。复杂性降低，自然其可读性会提高。
  - 提高系统的可维护性。可读性提高，那自然更容易维护了。
  - 变更引起的风险降低。变更是必然的，如果单一职责原则遵守得好，
  当修改一个功能时，可以显著降低对其他功能的影响。

### 应用示例
- 案例：

还是用课程举例，我们课程有直播课可录播课。直播课不能快进和快退，录播课可以，
功能职责不一样。先创建一个CourseOld类：
```java
public class CourseOld {

    public void study(String courseName){
        if ("直播课".equals(courseName))
            System.out.println(courseName + "不能快进快退");
        else {
            System.out.println(courseName + "可以来回反复回看");
        }
    }

    public static void main(String[] args){
        CourseOld courseOld = new CourseOld();
        courseOld.study("直播课");
        courseOld.study("录播课");
    }
}
```
从代码看，CourseOld类承担了两种处理逻辑（两种职责）。假如现在要对课程进行加密，
直播课程和录播课程的加密逻辑不一样，必须修改代码。而修改代码的逻辑势必会互相
影响，可能带来不可控的风险。需要进行解耦：创建两个类LiveCourse、ReplayCourse
```java
public class LiveCourse {

    public void study(String courseName){
        System.out.println(courseName + "不能快进快退");
    }
}
```
```java
public class ReplayCourse {

    public void study(String courseName){
        System.out.println(courseName + "可以来回反复回看");
    }
}
```
调用代码变更为：
```java
public class Course {

    public static void main(String[] args){
        LiveCourse liveCourse = new LiveCourse();
        liveCourse.study("直播课");

        ReplayCourse replayCourse = new ReplayCourse();
        replayCourse.study("录播课");
    }
}
```
业务继续发展，课程需要做权限。没有付费的学员可以获取课程基本信息，已经付费的学员
可以获得视频流，即学习权限。那么在控制课程层面至少有两个职责。我们可以把展示职责
和管理职责分离开来，都实现同一个抽象依赖。设计一个顶层接口-ICourse
```java
public interface ICourse {

    //获得基本信息
    String getCourseName();
    //获得视频流
    byte[] getCourseVIdeo();
    //学习课程
    void studyCourse();
    //退款
    void refundCourse();
}
```
可以把这个接口拆成两个接口：ICourseInfo、ICourseManager
```java
public interface ICourseInfo {

    String getCourseName();
    byte[] getCourseVIdeo();
}
```
```java
public interface ICourseManager {

    void studyCourse();
    void refundCourse();
}
```
最后类图：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_srp_1.png"/>
</div> 
