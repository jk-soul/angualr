主要按照这个教程来看,重点看下1-8章
http://zouyesheng.com/angular.html

ng的官方API,不明白的可以去官网看demo
http://docs.angularjs.org/api

AngularJS的$resource
http://blog.csdn.net/violet_day/article/details/17403207

AngularJS的$resource

AngularUI
http://angular-ui.github.io/

http://lodash.com/


实现一个表格
1.数据通过http请求获取          自定义json文件，http请求json
2.表格实现点击表头排序
3.分页，一页显示10行数据，表格下要有分页导航
4.表格奇偶行需要有css变化
5.对表格的2列数据实现客户端筛选

重点
    模型的绑定
    指示器
    表单验证




2014/3/25
===========

了解下ng/api中的各种指示器
------------------------

*   Request URL:http://12.12.12.81:81/api/examination/exam/generate/532fd362354964140f4dfeb9
*   Request Method:GET
*   返回数据库的参数说明:
    *   exam:考试信息
        *   single.score:单选题分值
        *   single.quantity:单选题数量
        *   multi.score:单选题分值
        *   multi.quantity:单选题数量
        *   fullScore:总分
        *   title:标题
        *   duration:考试时常
        passLine:及格线
    *   questions:考题
        *   title:考题标题
        *   selections:考题的选项
            *   content:选项的内容
        *   multi:是否多选

*   TODO
    *   切换左侧的单选题和多选题，下面的panel出现对应的标题序号，点击标题序号，右侧出现相应的题目内容
    *   已未看的题目、看过并且已经标记了答案的题目、看了但是未标记答案的题目需要用不同的class体现
    *   右下角上一题目、下一题点击时实现题目切换，并且在第一题和最后一题时，对应的按钮需要用disable效果
    *   考试标题，单选题标题，考题标题，选项内容，已经下面的单选框及复选框的绑定(提示:选项中的A、B可以通过自定义过滤器实现，数字=>字母)
    *   单选题出现单选框，多选题出现多选框，并且需要将用户选择的答案记录与question.choose=[]中
    *   右上角实现倒计时的效果
*   ng的路由
    可以参考以下地址：http://write.blog.csdn.net/postlist/1762233/all

