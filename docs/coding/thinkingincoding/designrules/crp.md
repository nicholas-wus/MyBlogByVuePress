# 合成复用原则


## 合成复用原则（Composite Reuse Principle，CRP）
### 定义
- 又叫组合/聚合复用原则（Composition/Aggregate Reuse Principle，CARP）。
指尽量使用对象组合（has-a）/聚合（contanis-a）而不是继承关系达到软件复用的目的。
  
### 核心思想
- 如果要使用继承关系，则必须严格遵循里氏替换原则。
合成复用原则同里氏替换原则相辅相成的，两者都是开闭原则的具体实现规范。
- 继承叫作白箱复用，相当于把所有的实现细节暴露给子类。组合/聚合称为黑箱复用，
我们是无法获取到类以外的对象的实现细节的。

### 作用
- 可以使系统更加灵活，降低类与类之间的耦合度，一个类的变化对其他类造成的影响
相对较少。


### 应用示例
- 示例
看一个典型的合成复用原则的应用场景
```java
public class DBConnection1 {

    public String getConnection(){
        return "MySql connection！";
    }
}
```
```java
public class ProductDao {

    private DBConnection1 dbConnection1;

    public void setDbConnection(DBConnection1 dbConnection1){
        this.dbConnection1 = dbConnection1;
    }

    public void addProduct(){
        String conn = dbConnection1.getConnection();
        System.out.println("use " + conn + " to Add Product");
    }
}
```
目前DBConnection1还不是一种抽象，不便于系统扩展，比如假设需要支持DB2、Oracle数据库。
我们可以不改ProductDao，而把DBConnection1改为abstract。
```java
public abstract class DBConnection {

    public abstract String getConnection();
}
```
```java
public class MySqlConnection extends DBConnection {

    @Override
    public String getConnection() {
        return "MySql connection！";
    }
}
```
```java
public class OraclelConnection extends DBConnection {

    @Override
    public String getConnection() {
        return "Oracle connection！";
    }
}
```
最后类图：
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_thinkingincoding_designrules_crp_1.png"/>
</div> 