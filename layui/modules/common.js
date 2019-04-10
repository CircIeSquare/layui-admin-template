/**
 * Created by Sherlock on 2018/7/5.
 */

//定义自定义的模块(依赖layui的jquery模块)
layui.define(["jquery","element"],function(exports){
    var $=layui.jquery;
    var element=layui.element;

    //组件内置对象
    var obj={
        hello:function(){
            console.log("hello layui");
        },
        init:function() {
            //折叠导航栏
            $(".layui-header .toggle-nav").click(function(){
                var w_side=$(".layui-side").width();
                var win_width=$(window).width();
                if(w_side==200){
                    $('.layui-body').stop().animate({
                       width:win_width,left:"0"},300,"swing");
                    $('.layui-footer').stop().animate({
                        width:win_width,left:"0"},300,"swing");
                    $(".layui-side").stop().animate({
                        width:"0",left:"0"},300,"swing");
                }else {
                    $('.layui-body').stop().animate({
                        width:win_width-200,left:"200"
                    },300,"swing");
                    $('.layui-footer').stop().animate({
                        width:win_width-200,left:"200"
                    },300,"swing");
                    $(".layui-side").stop().animate({
                        width:"200",left:"0"},300,"swing");
                };
            });

            //设置主体内容区高度自适应
            function setHeight(){
                var lay_body_title_height=$(".layui-body .layui-tab .layui-tab-title").height();
                var win_height=$(window).height();
                var header_height=$(".layui-header").height();
                var footer_height=$(".layui-footer").height();
                $(".layui-body .layui-tab .layui-tab-content").height(win_height-header_height-footer_height-lay_body_title_height);
                $(".layui-body .layui-tab .layui-tab-item iframe").height(win_height-header_height-footer_height-lay_body_title_height);
            };
            setHeight();
            $(window).resize(function(){
                setHeight();
            });

            //选项卡首页移除选项
            $(".layui-body .layui-tab .layui-tab-title li:first").find("i").hide();
            //$(".layui-body .layui-tab .layui-tab-title li:first>i[class='layui-tab-close']").find("i").hide();
        },
        //在这里给active绑定几项事件，后面可通过active调用这些事件
        tabAdd:function(url,id,name) {
            //新增一个Tab项 传入三个参数，分别对应其标题，tab页面的地址，还有一个规定的id，是标签中data-id的属性值
            //关于tabAdd的方法所传入的参数可看layui的开发文档中基础方法部分
            element.tabAdd('demo',{
                title: name,
                content: '<iframe data-frameid="'+id+'" src='+'"'+url+'"'+'></iframe>',
                id: id     //规定好的id
            });
            $(this).init();
        },
        tabChange:function(id) {
            //切换到指定Tab项
            element.tabChange('demo',id); //根据传入的id传入到指定的tab项
            $(this).init();
        },
        tabDelete:function (id){
            element.tabDelete("demo",id);//删除
            $(this).init();
        },
        tabDeleteAll:function (ids) {//删除所有
            $.each(ids,function (i,item) {
                element.tabDelete("demo", item); //ids是一个数组，里面存放了多个id，调用tabDelete方法分别删除
            });
            $(this).init();
        }
    };

    //输出组件名称
    exports("common",obj);
});