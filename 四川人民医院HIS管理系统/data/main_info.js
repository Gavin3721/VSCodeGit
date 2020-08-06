//所有部门信息
var deptInfoArr = [];

//--这是临时的假数据--
var deptInfoArrData = [
    {
        "deptId": "010",//部门id
        "deptNm": "行政部",//部门名称
        "abbreviation": "XZ",//英文简称
        "deptGrade": "1",//部门等级，数字越小等级越高
        "zhiNeng": "管理层",//部门职能
        "details": "企业领导，董事会成员",//备注信息
        "createDate": "2001-02-03"//创建时间
    },
    {
        "deptId": "011",
        "deptNm": "挂号部",
        "abbreviation": "GH",
        "deptGrade": "2",
        "zhiNeng": "挂号业务",
        "details": "",
        "createDate": "2001-02-03"
    },
    {
        "deptId": "012",
        "deptNm": "门诊部",
        "abbreviation": "MZ",
        "deptGrade": "3",
        "zhiNeng": "为患者提供就诊",
        "details": "所有医生均属该部",
        "createDate": "2001-02-03"
    },
    {
        "deptId": "013",
        "deptNm": "后勤部",
        "abbreviation": "HQ",
        "deptGrade": "4",
        "zhiNeng": "管理医院后勤",
        "details": "药物及医疗器械的后勤购入",
        "createDate": "2001-02-03"
    },
    {
        "deptId": "014",
        "deptNm": "财务部",
        "abbreviation": "CW",
        "deptGrade": "5",
        "zhiNeng": "核算财务",
        "details": "负责企业的各项收入支出",
        "createDate": "2001-02-03"
    }

];



//所有员工信息（包括在职和离职员工）
var userInfoArr = [];

//--这是临时的假数据--
var userInfoArrData = [
    {
        "userId": "000111",//员工编号
        "account": "admin",//登录账户名，唯一
        "password": "123123",//登录密码
        "picture": "25.png",//员工头像
        "userNm": "超级管理员",//员工姓名
        "userSex": "男",//性别
        "userAge": "26",//年龄
        "userPhone": "13000122313",//手机号
        "email": "11112222@163.com",//邮箱地址
        "deptIds": ["010"],//所属部门id，一个人可分属多个部门
        "userGrade": "1",//在部门的等级，数字越小职称越高
        "entryDate": "2002-05-14",//入职日期
        "quitDate": "",//离职日期
        "workState": "1",//在职状态，1为在职，0为离职
        "details": "这个是超级管理员"//备注
    },
    {
        "userId": "111111",
        "account": "zhangsan",
        "password": "123123",
        "picture": "408.png",
        "userNm": "张三",
        "userSex": "男",
        "userAge": "25",
        "userPhone": "13000122313",
        "email": "234234@163.com",
        "deptIds": ["011", "012"],
        "deptGrade": "5",
        "entryDate": "2008-08-08",
        "quitDate": "",
        "workState": "1",
        "details": "XXXXXXXX"
    },
    {
        "userId": "111112",
        "account": "lisi",
        "password": "123123",
        "picture": "409.png",
        "userNm": "李四",
        "userSex": "女",
        "userAge": "28",
        "userPhone": "15803428801",
        "email": "234134345@qq.com",
        "deptIds": ["011"],
        "deptGrade": "6",
        "entryDate": "2009-05-12",
        "quitDate": "",
        "workState": "1",
        "details": ""
    }
];