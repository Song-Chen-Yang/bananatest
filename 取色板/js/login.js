var userCount = document.querySelector('#userCount');
var pwd = document.getElementById('password');
var warns = document.querySelectorAll('.warning');
var submit = document.querySelector('.submit');
var test1 = false,test2 = false;


var regexp = /^\d{6-16}$/;


userCount.onfocus = function(){
    warns[0].innerHTML = "6-30位字母、数字或' _ '";
    warns[0].style.color = "green";
}
userCount.onblur = function(){
    var reg = /^\w{6,30}$/;
    if(this.value == ""){
    warns[0].innerHTML = "请输入用户名或者手机号";
    warns[0].style.color = "red";
    }else{
        if(!reg.exec(userCount.value)){
            warns[0].innerHTML = "格式为6-30位字母、数字或'_'";
            warns[0].style.color = "red";
        }else{
            warns[0].innerHTML = "格式正确";
            warns[0].style.color = "green";
            test1 = true;
        }
    }
}
pwd.onfocus = function(){
    warns[1].innerHTML = '请输入密码';
    warns[1].style.color = 'green';
}
pwd.onblur = function(){
    var reg = /^\w{6,20}$/;
    if(this.value == ""){
        warns[1].innerHTML = "请输入6-20位字母或数字密码"
        warns[1].style.color = "red";
    }else{
        if(!reg.exec(pwd.value)){
            warns[1].innerHTML = "请输入6-20位字母或数字密码"
            warns[1].style.color = "red";
        }else{
            warns[1].innerHTML = "格式正确";
            warns[1].style.color = "green"; 
            test2 = true;
        }
    }
}