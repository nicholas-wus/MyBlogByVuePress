# 聚合(aggregation)


## 定义：
- 一种弱的‘拥有’关系，体现的是 A 对象可以包含 B 对象，但 B 对象不是 A 对象的一部分
- 整体与部分的关系，如文学俱乐部全体成员与文学俱乐部成员

**代码体现：成员变量**

**注意关联关系和聚合关系的不同点:**

- 关联关系所涉及的两个类处于同一个层次上；
- 聚合关系所涉及的两个类处于不平等的层次上(一个代表整体，一个代表部分)

## 表示方式：
带空心菱形的实心线，菱形指向整体
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_computerbase_uml_aggregation_1.png"/>
</div> 


## 示例：
- 例子1：文学俱乐部全体成员与文学俱乐部成员
<div align=center>
    <img src="/MyBlogByVuePress/assets/img/coding_computerbase_uml_aggregation_2.png"/>
</div> 
