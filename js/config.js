/**
 * Created by Sherlock on 2018/7/5.
 */

//配置自定义的模块
layui.config({
    //配置自定义模块的文件目录
    base:"layui/modules/"
    ,debug:true
}).extend({
    //扩展模块名和对应模块文件(冒号前模块名,冒号后文件名)
    common:"common",
    checkForm:"{/}../layui/modules/checkForm",
    validate:"{/}../layui/modules/validate"
});

