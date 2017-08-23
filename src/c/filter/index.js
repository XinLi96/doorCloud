import Vue from 'vue';

Vue.filter('timeFormat', function (ms,type) {
    var dateTime = '';
    if (ms != null && ms != 0) {
        var date = new Date(parseInt(parseInt(ms)));
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());

        var h = (date.getHours() < 10 ? ('0' + date.getHours()) :  date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? ('0' + date.getMinutes()) :  date.getMinutes());
        var s = ':'+ (date.getSeconds() < 10 ? ('0' + date.getSeconds()) :  date.getSeconds());

        if(type == "datetime"){
            dateTime = Y + M + D + ' ' + h + m + s;
        }else if(type == 'time'){
            dateTime = h + m + s;
        }else if(type == 'dateHM'){
            dateTime = Y + M + D + ' ' + h + m;
        }else if(type == 'dateM'){
            dateTime = Y + M;
        }else if(type == 'dateD'){
            dateTime = D;
        }else{
            dateTime = Y + M + D;
        }
        return dateTime;
    };
});