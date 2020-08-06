var currentPageIndex = 1;//当前显示的页数
var pageCountNum = 1;//默认总页数
var showNum = 8;//一页显示的数据量
var queryStr = "";//查询条件
var tips;//用于显示提示相关信息

window.onload = function () {
    tips = document.getElementById("tips");
    funYeOperate(queryStr, currentPageIndex);

    //首页
    document.getElementById("firstPage").onclick = function () { funYeOperate(queryStr, 1); }

    //末页
    document.getElementById("lastPage").onclick = function () { funYeOperate(queryStr, pageCountNum); }

    //上一页
    document.getElementById("prevPage").onclick = function () {
        if (currentPageIndex > 1) {
            funYeOperate(queryStr, currentPageIndex - 1);
        }
    }

    //下一页
    document.getElementById("nextPage").onclick = function () {
        if (currentPageIndex < pageCountNum) {
            funYeOperate(queryStr, currentPageIndex + 1);
        }
    }

    //搜索
    document.getElementById("searchBtn").onclick = function () {
        queryStr = document.getElementById("searchStr").value.trim();
        funYeOperate(queryStr, 1);
    }

    //跳转页
    document.getElementById("jumpBtn").onclick = function () {
        tips.innerText = "";
        jumpPage = document.getElementById("jumpPage").value.trim();
        if (Number(jumpPage) != parseInt(jumpPage)) {
            tips.innerText = "~您输入的页数不规范，必须为整数~";
            return false;
        }
        if (jumpPage > pageCountNum || jumpPage < 1) {
            tips.innerText = "~您输入的页数不规范，页数必须在总页数范围内~";
            return false;
        }
        else funYeOperate(queryStr, jumpPage);
    }
};

/**
 * funYeOperate分页的具体方法
 * @param {*} searchStr 当前的额查询条件
 * @param {*} pageNum 要跳转的目标页
 */
function funYeOperate(searchStr, pageNum) {
    var tempArr = [];
    if (searchStr != "") {
        //如果条件不为空，则先找出符合要求的数据
        for (var i = 0; i < dataArr.length; i++) {
            var data = dataArr[i];
            if (data.cols1.indexOf(searchStr) != -1) {
                tempArr.push(data);
            }
        }
    } else {
        tempArr = dataArr;
    }
    //总页数
    pageCountNum = Math.ceil(tempArr.length / showNum);
    //确保删除了最后一页的最后一条数据，页面显示到最后一页
    if (pageNum > pageCountNum) {
        pageNum = pageCountNum;
    }
    currentPageIndex = pageNum;

    //从数组当中取值的起始索引值
    var beginIndex = (currentPageIndex - 1) * showNum;
    //取出当页实际需要显示的数据
    var resultArr = tempArr.slice(beginIndex, beginIndex + showNum);
    if (resultArr.length == 0) {
        tips.innerText = "~没有找到相关消息哟~";
    } else {
        tips.innerText = "";
    }

    //下边开始展示向前端展示分页的数据信息
    document.getElementById("currentPageIndex").innerText = currentPageIndex;
    document.getElementById("pageCount").innerText = pageCountNum;
    var showTable = document.getElementById("showTable");
    showTable.innerHTML = "<tr><th>序&nbsp;号</th><th>列名1</th><th>列名2</th><th>列名3</th><th>列名4</th><th>列名5</th><th>操&nbsp;作</th></tr>";
    for (var j = 0; j < resultArr.length; j++) {
        var trStr = "<tr><td>" + ((currentPageIndex - 1) * showNum + (j + 1)) + "</td><td>" + resultArr[j].cols1 + "</td><td>" + resultArr[j].cols2 + "</td><td>" + resultArr[j].cols3 + "</td><td>" + resultArr[j].cols4 + "</td><td>" + resultArr[j].cols5 + "</td><td><a onclick='deleteData(" + resultArr[j].id + ")'>删&nbsp;除</a></td></tr>";
        showTable.innerHTML += trStr;
    }
}

//删除数据
function deleteData(dataId) {
    var result = confirm("是否确认删除该条数据？");
    if (result) {
        for (var i = 0; i < dataArr.length; i++) {
            if (dataArr[i].id == dataId) {
                dataArr.splice(i, 1);
                break;
            }
        }
    }
    funYeOperate(queryStr, currentPageIndex);
    return true;
}


//模拟远程数据
var dataArr = [
    {
        "id": "1111111",
        "cols1": "这是数据1",
        "cols2": "111数据2",
        "cols3": "111数据3",
        "cols4": "111数据4",
        "cols5": "111数据5"
    },
    {
        "id": "1111112",
        "cols1": "这是数据2",
        "cols2": "112数据2",
        "cols3": "112数据3",
        "cols4": "112数据4",
        "cols5": "112数据5"
    },
    {
        "id": "1111113",
        "cols1": "这是数据3",
        "cols2": "113数据2",
        "cols3": "113数据3",
        "cols4": "113数据4",
        "cols5": "113数据5"
    },
    {
        "id": "1111114",
        "cols1": "这是数据4",
        "cols2": "114数据2",
        "cols3": "114数据3",
        "cols4": "114数据4",
        "cols5": "114数据5"
    },
    {
        "id": "1111116",
        "cols1": "这是数据5",
        "cols2": "116数据2",
        "cols3": "116数据3",
        "cols4": "116数据4",
        "cols5": "116数据5"
    },
    {
        "id": "1111118",
        "cols1": "这是数据6",
        "cols2": "118数据2",
        "cols3": "118数据3",
        "cols4": "118数据4",
        "cols5": "118数据5"
    },
    {
        "id": "1111119",
        "cols1": "这是数据7",
        "cols2": "119数据2",
        "cols3": "119数据3",
        "cols4": "119数据4",
        "cols5": "119数据5"
    },
    {
        "id": "1111120",
        "cols1": "这是数据8",
        "cols2": "120数据2",
        "cols3": "120数据3",
        "cols4": "120数据4",
        "cols5": "120数据5"
    },
    {
        "id": "1111121",
        "cols1": "这是数据9",
        "cols2": "121数据2",
        "cols3": "121数据3",
        "cols4": "121数据4",
        "cols5": "121数据5"
    },
    {
        "id": "1111122",
        "cols1": "这是数据10",
        "cols2": "122数据2",
        "cols3": "122数据3",
        "cols4": "122数据4",
        "cols5": "122数据5"
    },
    {
        "id": "1111123",
        "cols1": "这是数据11",
        "cols2": "123数据2",
        "cols3": "123数据3",
        "cols4": "123数据4",
        "cols5": "123数据5"
    },
    {
        "id": "1111124",
        "cols1": "这是数据12",
        "cols2": "124数据2",
        "cols3": "124数据3",
        "cols4": "124数据4",
        "cols5": "124数据5"
    },
    {
        "id": "1111125",
        "cols1": "这是数据13",
        "cols2": "125数据2",
        "cols3": "125数据3",
        "cols4": "125数据4",
        "cols5": "125数据5"
    },
    {
        "id": "1111126",
        "cols1": "这是数据14",
        "cols2": "126数据2",
        "cols3": "126数据3",
        "cols4": "126数据4",
        "cols5": "126数据5"
    },
    {
        "id": "1111127",
        "cols1": "这是数据15",
        "cols2": "127数据2",
        "cols3": "127数据3",
        "cols4": "127数据4",
        "cols5": "127数据5"
    },
    {
        "id": "1111128",
        "cols1": "这是数据16",
        "cols2": "128数据2",
        "cols3": "128数据3",
        "cols4": "128数据4",
        "cols5": "128数据5"
    },
    {
        "id": "1111129",
        "cols1": "这是数据17",
        "cols2": "129数据2",
        "cols3": "129数据3",
        "cols4": "129数据4",
        "cols5": "129数据5"
    },
    {
        "id": "1111130",
        "cols1": "这是数据18",
        "cols2": "130数据2",
        "cols3": "130数据3",
        "cols4": "130数据4",
        "cols5": "130数据5"
    },

];