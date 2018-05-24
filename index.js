var table = document.getElementById('table');
var data = [{
    id:0,
    name:'log0',
    type:'warning',
    time:'2018-05-24 08:00:00',
}, {
    id:1,
    name:'log1',
    type:'normal',
    time:'2018-05-24 08:01:00',
}, {
    id:2,
    name:'log2',
    type:'warning',
    time:'2018-05-24 08:02:00',
}, {
    id:3,
    name:'log3',
    type:'error',
    time:'2018-05-24 08:03:00',
}, {
    id:4,
    name:'log4',
    type:'failed',
    time:'2018-05-24 08:04:00',
}, {
    id:5,
    name:'log5',
    type:'normal',
    time:'2018-05-24 08:05:00',
}, {
    id:6,
    name:'log6',
    type:'warning',
    time:'2018-05-24 08:06:00',
}, {
    id:7,
    name:'log7',
    type:'normal',
    time:'2018-05-24 08:07:00',
}, {
    id:8,
    name:'log8',
    type:'normal',
    time:'2018-05-24 08:08:00',
}, {
    id:9,
    name:'log9',
    type:'error',
    time:'2018-05-24 08:09:00',
}];
var str = '<tr><th>名称</th><th>类型</th><th>时间</th></tr>';
data.forEach(item=>{
    var currentClass = '';
    switch(item.type){
        case 'warning':
            currentClass = 'yellow'
            break;
        case 'error':
        case 'failed':
            currentClass = 'red'
            break;
        default:
            break;
    }
    str += `<tr><td>${item.name}</td><td class="${currentClass}">${item.type}</td><td>${item.time}</td></tr>`;
})
table.innerHTML = str;
