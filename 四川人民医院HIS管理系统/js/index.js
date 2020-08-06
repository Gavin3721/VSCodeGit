$(document).ready(function () {
    setInterval("showTime()", 1000);
    initUserData();

    $("#signOutSys").click(signOutSysOperate);
});

//初始化并显示数据
function initUserData() {
    var currentUser = localStorage.getItem("currentUser");
    var loginDate = localStorage.getItem("loginDate");
    if (loginDate != "") {
        var currentDate = new Date().getTime();
        var time = currentDate - loginDate;
        //登录过期时间为30分钟
        if (time > 30 * 60 * 1000) {
            //登录状态已过期
            localStorage.removeItem("loginState");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("loginDate");
            window.location.href = "login.html";
        } else {
            //正常登录状态
            currentUser = JSON.parse(currentUser);
            $("#userName").html(currentUser.userNm);
            var img = currentUser.picture;
            if (!img) {
                if (currentUser.userSex == "男") {
                    img = "man.jpg";
                } else {
                    img = "woman.jpg";
                }
            }
            $("#userImg").attr("src", "img/user/" + img);
        }
    } else {
        window.location.href = "login.html";
    }
}

//退出系统，跳转到登录页
function signOutSysOperate() {
    fyAlert.alert({
        title: "提 示",
        drag: true,
        shadowClose: false,  //是否点击遮罩关闭
        content: '是否确认退出系统？',
        btns: {
            '确 定': function (obj) {
                localStorage.removeItem("loginState");
                localStorage.removeItem("currentUser");
                localStorage.removeItem("loginDate");
                window.location.href = "login.html";
                obj.destory();
            },
            '取 消': function (obj) {
                obj.destory();//销毁
            }
        },
    });
}

function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    //var xingQi = date.getDay();
    var hour = date.getHours();
    var min2 = date.getMinutes();
    var sec = date.getSeconds();
    $("#showTime").html(year + "-" + month + "-" + day + "  星期" + ("天一二三四五六".charAt(date.getDay())) + "  " + hour + ":" + min2 + ":" + sec);
}


