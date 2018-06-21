/**
 * @author:瞿龙俊
 * @timer:2018-06-14
 * @version:1.0
 * @title:常用的工具类js
 * @note:
 */
;
(function(window, document, $) {
    window.utils = {
        /////////////////////////////关于数组操作js开始/////////////////////////////////////
        tmArray: {
            /*each和map的功能是一样的*/
            each: function(arr, fn) {
                fn = fn || Function;
                let a = [];
                let args = Array.prototype.slice.call(arguments, 1);
                for(let i = 0; i < arr.length; i++) {
                    let res = fn.apply(arr, [arr[i], i].concat(args));
                    if(res != null) a.push(res);
                }
                return a;
            },
            /*each和map的功能是一样的*/
            map: function(arr, fn, thisObj) {
                let scope = thisObj || window;
                let a = [];
                for(let i = 0, j = arr.length; i < j; ++i) {
                    let res = fn.call(scope, arr[i], i, this);
                    if(res != null) a.push(res);
                }
                return a;
            },
            /**
             * 数组的排序
             * @param array
             * @param sortFlag
             * @returns {*}
             */
            orderBy: function(array, sortFlag) {
                let $arr = array;
                if(sortFlag == 'asc') {
                    $arr.sort(this._numAscSort);
                } else if(sortFlag == 'desc') {
                    $arr.sort(this._numDescSort);
                } else {
                    $arr.sort(this._numAscSort);
                }
                return $arr;
            },
            // 求两个集合的并集
            union: function(a, b) {
                let newArr = a.concat(b);
                return this.unique2(newArr);
            },
            // 求两个集合的补集
            complement: function(a, b) {
                return this.minus(this.union(a, b), this.intersect(a, b));
            },
            // 求两个集合的交集
            intersect: function(a, b) {
                a = this.unique(a);
                return this.each(a, function(o) {
                    return b.contains(o) ? o : null;
                });
            },
            //求两个集合的差集
            minus: function(a, b) {
                a = this.unique(a);
                return this.each(a, function(o) {
                    return b.contains(o) ? null : o;
                });
            },
            /**
             * 数组的去重
             * @param arr
             * @returns {Array}
             */
            unique: function(arr) {
                let ra = new Array();
                for(let i = 0; i < arr.length; i++) {
                    if(!ra.contains(arr[i])) {
                        //if(this.contains(ra,arr[i])){
                        ra.push(arr[i]);
                    }
                }
                return ra;
            },
            /**
             * 数组的去重复
             * @param arr
             * @returns {*}
             */
            unique2: function(arr) {
                for(let i = 0; i < arr.length; i++) {
                    for(let j = i + 1; j < arr.length;) {
                        if(arr[j] == arr[i]) {
                            arr.splice(j, 1);
                        } else {
                            j++;
                        }
                    }
                }
                return arr;
            },
            /**
             * 数组去除重复的(根据对象来)
             * @param {Object} ary
             */
            unique3: function(ary) {
                let result = [],
                    hash = {};
                for(let i = 0, elem;
                    (elem = arr[i]) != null; i++) {
                    if(!hash[elem]) {
                        result.push(elem);
                        hash[elem] = true;
                    }
                }
                return result;
            },
            /**
             * 获取数组的下标
             * @param arr
             * @param val
             * @returns {number}
             */
            indexOf: function(arr, val) {
                for(let i = 0; i < arr.length; i++) {
                    if(arr[i] == val) {
                        return i;
                    }
                }
                return -1;
            },
            /**
             * 判断一个元素是否在一个数组中
             * @param arr
             * @param val
             * @returns {boolean}
             */
            contains: function(arr, val) {
                return this.indexOf(arr, val) != -1 ? true : false;
            },
            /**
             * 数组中删除一个元素
             * @param arr
             * @param indexs
             * @returns {*}
             */
            remove: function(arr, indexs) {
                let index = this.indexOf(arr, indexs);
                if(index > -1) {
                    arr.splice(index, 1);
                }
                return arr;
            },
            removeObject: function(arr, item) {
                for(let i = 0; i < arr.length; i++) {
                    let jsonData = arr[i];
                    for(let key in jsonData) {
                        if(jsonData[key] == item) {
                            arr.splice(i, 1);
                        }
                    }
                }
                return arr;
            },
            /**
             * 求数组中最大值
             * @param arr
             * @returns {number|Number}
             */
            arrMax: function(arr) {
                return Math.max.apply(null, arr);
            },
            /**
             * 求数组中最小值
             * @param arr
             * @returns {number|Number}
             */
            arrMin: function(arr) {
                return Math.min.apply(null, arr);
            },
            /**
             * 删除数组元素的方法
             */
            removeAry: function(ary, ele) {
                ary.splice(ary.indexOf(ele), 1);
            },
            /**
             * 将类数组转换为数组的方法
             * @param ary
             * @returns {Array}
             */
            formArray: function(ary) {
                let arr = [];
                if(Array.isArray(ary)) {
                    arr = ary;
                } else {
                    arr = Array.prototype.slice.call(ary);
                };
                return arr;
            },
            /**
             * 定义一个数组排序的方法
             * 默认为升序排序asc,
             * 如果传递是参数是一个的话，那么就是是升序，如果传递的参数是两个的话，如果第一个参数不能转换为数组的话，也直接退出
             * 参数:acs:表示升序
             * 参数:desc:表示降序
             * @returns {*}
             */
            arrySort: function() {
                let arg = arguments;
                let len = arg.length;
                let ary = this.arryList(arg[0]);
                //如果没传递参数，或者传递的不能转换为数组的话就直接返回
                if(!len || Array.isArray(ary) == false) {
                    return false;
                };
                if(len == 1) {
                    return ary.sort(function(a, b) {
                        return a - b;
                    });
                } else {
                    return ary.sort(function(a, b) {
                        if(arg[1] == "desc") {
                            return b - a;
                        } else if(arg[1] == "asc") {
                            return a - b;
                        } else {
                            return a - b;
                        };
                    });
                };
            },
            /**
             * 求和函数
             * @param arr
             * @returns {number}
             */
            arySum: function(arr) {
                let ary = [];
                let result = 0;
                if(arr instanceof Array) {
                    ary = arr;
                } else {
                    ary = this.formArray(arr);
                };
                for(let i = 0; i < ary.length; i++) {
                    result += parseFloat(ary[i]);
                };
                return result;
            },

            /**
             * 数组随机排列
             * @param {Object} ary
             */
            shuffle: function(ary) {
                let input = this;
                for(let i = input.length - 1; i >= 0; i--) {
                    let randomIndex = Math.floor(Math.random() * (i + 1));
                    let itemAtIndex = input[randomIndex];
                    input[randomIndex] = input[i];
                    input[i] = itemAtIndex;
                }
                return input;
            },
            /**
             * 数组随机排序
             * @param {Object} target
             */
            shuffle1: function(target) {
                function randomsort(a, b) {
                    return Math.random() > .5 ? -1 : 1;
                    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
                }

                return target.sort(randomsort);
            },
            /**
             * 判断是不是数组
             * @param {Object} ary
             */
            isArray: function(ary) {
                let objectToStringFn = Object.prototype.toString;
                let arrayToStringResult = objectToStringFn.call([]);
                return function(subject) {
                    return objectToStringFn.call(subject) === arrayToStringResult;
                };
            },
            /**
             * 随机返回数组中一个元素
             * @param {Object} ary
             */
            randomItem: function(ary) {
                return ary[Math.ceil(Math.random() * ary.length)];
            },
            /**
             * 判断数组中是否包含某一项
             * @param arr
             * @returns {number|Number}
             * 调用方法：let max = utils.arrContains([],"",false)  flag 如果为true，则判断字符串    false则判断字符
             */
            arrContains: function(arr, str, flag) {
                if(flag) {
                    if(arr.length > 0 && this.isNotEmpty(str)) {
                        for(let i = 0; i < arr.length; i++) {
                            if(arr[i] == str) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                } else {
                    for(let i = 0; i < arr.length; i++) {
                        for(let j = 0; j < arr[i].length; j++) {
                            if(arr[i].charAt(j) == str) {
                                return true;
                            } else {
                                false;
                            }
                        }
                    }
                }
            },
            /**
             * 判断数组是否有重复的项
             * @param {Object} arr
             */
            isRepeat: function(arr) { //arr是否有重复元素
                let hash = {};
                for(let i in arr) {
                    if(hash[arr[i]]) return true;
                    hash[arr[i]] = true;
                }
                return false;
            },

            _numAscSort: function(a, b) {
                return a - b;
            },
            _numDescSort: function(a, b) {
                return b - a;
            },
            _sortAsc: function(x, y) {
                if(x > y) {
                    return 1;
                } else {
                    return -1;
                }
            },
            _sortDesc: function(x, y) {
                if(x > y) {
                    return -1;
                } else {
                    return 1;
                }
            }
        },
        /////////////////////////////关于数组操作js结束/////////////////////////////////////

        /////////////////////////////关于日期操作js开始/////////////////////////////////////
        tmDate: {
            /*转换日期*/
            _transferDate: function(date) {
                if(typeof date == "string") {
                    return new Date(date.replace(/-/ig, "/"));
                } else {
                    return date;
                }
            },
            /*格式化日期*/
            _toString: function(date, pattern) {
                let d = this._transferDate(date);
                return d.format(pattern);
            },

            /*获取两个时间相减的时间*/
            _Date: function(date1, date2) {
                let dateTime = this._numMillSecond(date1, date2);
                return new Date(dateTime).format("yyyy-MM-dd");
            },

            //间隔年份
            _numYear: function(date1, date2) {
                let times = this._numDay(date1, date2);
                return Math.floor(times / 365);
            },

            //间隔月份
            _numMonth: function(date1, date2) {
                let times = this._numDay(date1, date2);
                return Math.floor(times / 30);
            },

            //间隔天数
            _numDay: function(date1, date2) {
                let times = this._numSecond(date1, date2);
                let hour = this._let().hour;
                let mills = this._let().mills;
                return Math.ceil(times / (mills * hour));
            },

            //间隔时
            _numHour: function(date1, date2) {
                return Math.floor(this._numMillSecond(date1, date2) / (1000 * 60 * 60));
            },

            //间隔分
            _numMinute: function(date1, date2) {
                return Math.floor(this._numMillSecond(date1, date2) / (1000 * 60));
            },

            //间隔秒数
            _numSecond: function(date1, date2) {
                return Math.floor(this._numMillSecond(date1, date2) / 1000);
            },

            //间隔毫秒
            _numMillSecond: function(date1, date2) {
                let stimes = this._getTime(this._transferDate(date1));
                let etimes = this._getTime(this._transferDate(date2));
                return etimes - stimes;
            },

            _let: function() {
                return {
                    hour: 24,
                    second: 60,
                    mills: 3600,
                    format: "yyyy-MM-dd",
                    dateFormat: "yyyy-MM-dd HH:mm:ss"
                };
            },

            /*某个日期加上多少毫秒*/
            _plusMillisSeconds: function(date, millisSeconds) {
                let dateTime = this._getTime(date);
                let mintimes = millisSeconds;
                let rdate = dateTime * 1 + mintimes * 1;
                return this._format(new Date(rdate));
            },
            /*某个日期加上多少秒*/
            _plusSeconds: function(date, seconds) {
                let dateTime = this._getTime(date);
                let mintimes = seconds * 1000;
                let rdate = dateTime * 1 + mintimes * 1;
                return this._format(new Date(rdate));
            },
            /*某个日期加上多少分钟*/
            _plusMinutes: function(date, minutes) {
                let dateTime = this._getTime(date);
                let mintimes = minutes * 60 * 1000;
                let rdate = dateTime * 1 + mintimes * 1;
                return this._format(new Date(rdate));
            },
            /*某个日期加上小时数*/
            _plusHours: function(date, hours) {
                let dateTime = this._getTime(date);
                let mintimes = hours * 60 * 60 * 1000;
                let rdate = dateTime + mintimes;
                return this._format(new Date(rdate));
            },
            /*某个日期加上天数*/
            _plusDays: function(date, days) {
                let dateTime = this._getTime(date);
                let mintimes = days * 60 * 60 * 1000 * 24;
                let rdate = dateTime * 1 + mintimes * 1;
                return this._format(new Date(rdate));
            },

            /*某个日期加上多少个月,这里是按照一个月30天来计算天数的*/
            _plusMonths: function(date, months) {
                let dateTime = this._getTime(date);
                let mintimes = months * 30 * 60 * 60 * 1000 * 24;
                let rdate = dateTime + mintimes * 1;
                return this._format(new Date(rdate));
            },

            /*某个日期加上多少个年,这里是按照一个月365天来计算天数的，如果loop为true则按闰年计算*/
            _plusYears: function(date, years, isLoop) {
                let dateTime = this._getTime(date);
                let day = 365;
                if(isLoop) day = 366;
                let mintimes = years * day * 60 * 60 * 1000 * 24;
                let rdate = dateTime + mintimes;
                return this._format(new Date(rdate));
            },

            /*某个日期加上某个日期，这样的操作视乎没什么意义*/
            _plusDate: function(date1, date2) {
                let dateTime = this._getTime(date1);
                let dateTime2 = this._getTime(date2);;
                let rdate = dateTime + dateTime2;
                return this._format(new Date(rdate));
            },

            /*某个日期减去多少毫秒秒*/
            _minusMillisSeconds: function(date, millisSeconds) {
                let dateTime = this._getTime(date);
                let mintimes = millisSeconds * 1;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },
            /*某个日期减去多少秒*/
            _minusSeconds: function(date, seconds) {
                let dateTime = this._getTime(date);
                let mintimes = seconds * 1000;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },
            /*某个日期减去多少分钟*/
            _minusMinutes: function(date, minutes) {
                let dateTime = this._getTime(date);
                let mintimes = minutes * 60 * 1000;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },
            /*某个日期减去小时数*/
            _minusHours: function(date, hours) {
                let dateTime = this._getTime(date);
                let mintimes = hours * 60 * 60 * 1000;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },
            /*某个日期减去天数*/
            _minusDays: function(date, days) {
                let dateTime = this._getTime(date);
                let mintimes = days * 60 * 60 * 1000 * 24;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },

            /*某个日期减去多少个月,这里是按照一个月30天来计算天数的*/
            _minusMonths: function(date, months) {
                let dateTime = this._getTime(date);
                let mintimes = months * 30 * 60 * 60 * 1000 * 24;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },

            /*某个日期减去多少个年,这里是按照一个月365天来计算天数的*/
            _minusYears: function(date, years, isLoop) {
                let dateTime = this._getTime(date);
                let day = 365;
                if(isLoop) day = 366;
                let mintimes = years * day * 60 * 60 * 1000 * 24;
                let rdate = dateTime - mintimes;
                return this._format(new Date(rdate));
            },

            /*某个日期减去某个日期，这样的操作视乎没什么意义*/
            _minusDate: function(date1, date2) {
                let dateTime = this._getTime(date1);
                let dateTime2 = this._getTime(date2);;
                let rdate = dateTime - dateTime2;
                return this._format(new Date(rdate));
            },

            /*获取一个月有多少天*/
            _getMonthOfDay: function(date1) {
                let currentMonth = this._getFirstDayOfMonth(date1);
                let nextMonth = this._getNextDayOfMonth(date1);
                return this._numDay(currentMonth, nextMonth);
            },

            /*获取一年又多少天*/
            _getYearOfDay: function(date) {
                let firstDayYear = this._getFirstDayOfYear(date);
                let lastDayYear = this._getLastDayOfYear(date);
                return Math.ceil(this._numDay(firstDayYear, lastDayYear));
            },

            /*某个日期是当年中的第几天*/
            _getDayOfYear: function(date1) {
                return Math.ceil(this._numDay(this._getFirstDayOfYear(date1), date1));
            },

            /*某个日期是在当月中的第几天*/
            _getDayOfMonth: function(date1) {
                return Math.ceil(this._numDay(this._getFirstDayOfMonth(date1), date1));
            },

            /*获取某个日期在这一年的第几周*/
            _getDayOfYearWeek: function(date) {
                let numdays = this._getDayOfYear(date);
                return Math.ceil(numdays / 7);
            },

            /*某个日期是在当月中的星期几*/
            _getDayOfWeek: function(date1) {
                return this._getWeek(date1);
            },

            /*获取在当前日期中的时间*/
            _getHourOfDay: function(date) {
                return this._getHour(date);
            },
            _eq: function(date1, date2) {
                let stime = this._getTime(this._transferDate(date1));
                let etime = this._getTime(this._transferDate(date2));
                return stime == etime ? true : false;
            },
            /*某个日期是否晚于某个日期*/
            _after: function(date1, date2) {
                let stime = this._getTime(this._transferDate(date1));
                let etime = this._getTime(this._transferDate(date2));
                return stime < etime ? true : false;
            },

            /*某个日期是否早于某个日期*/
            _before: function(date1, date2) {
                let stime = this._getTime(this._transferDate(date1));
                let etime = this._getTime(this._transferDate(date2));
                return stime > etime ? true : false;
            },

            /*获取某年的第一天*/
            _getFirstDayOfYear: function(date) {
                let year = this._getYear(date);
                let dateString = year + "-01-01 00:00:00";
                return dateString;
            },

            /*获取某年的最后一天*/
            _getLastDayOfYear: function(date) {
                let year = this._getYear(date);
                let dateString = year + "-12-01 00:00:00";
                let endDay = this._getMonthOfDay(dateString);
                return year + "-12-" + endDay + " 23:59:59";
            },

            /*获取某月的第一天*/
            _getFirstDayOfMonth: function(date) {
                let year = this._getYear(date);
                let month = this._getMonth(date);
                let dateString = year + "-" + month + "-01 00:00:00";
                return dateString;
            },

            /*获取某月最后一天*/
            _getLastDayOfMonth: function(date) {
                let endDay = this._getMonthOfDay(date);
                let year = this._getYear(date);
                let month = this._getMonth(date);
                return year + "-" + month + "-" + endDay + " 23:59:59";
            },
            /*一天的开始时间*/
            _getFirstOfDay: function(date) {
                let year = this._getYear(date);
                let month = this._getMonth(date);
                let dates = this._getDay(date);
                return year + "-" + month + "-" + dates + " 00:00:00";
            },

            /*一天的结束时间*/
            _getLastOfDay: function(date) {
                let year = this._getYear(date);
                let month = this._getMonth(date);
                let dates = this._getDay(date);
                return year + "-" + month + "-" + dates + " 23:59:59";
            },

            /*获取下个月的第一天*/
            _getNextDayOfMonth: function(date) {
                let year = this._getYear(date);
                let month = this._getMonth(date);
                month = month * 1 + 1;
                if(month > 12) {
                    year = year + 1;
                    month = month - 12;
                }
                month = month > 9 ? month : "0" + month;
                let dateString = year + "-" + month + "-01 00:00:00";
                return dateString;
            },

            _getFirstOfWeek: function(date1) {
                let week = this._getWeek(date1);
                let date = this._minusDays(date1, week);
                let year = this._getYear(date);
                let month = this._getMonth(date);
                let dates = this._getDay(date);
                return year + "-" + month + "-" + dates + " 00:00:00";
            },

            _getLastOfWeek: function(date1) {
                let week = 6 - this._getWeek(date1);
                let date = this._minusDays(date1, week);
                let year = this._getYear(date);
                let month = this._getMonth(date);
                let dates = this._getDay(date);
                return year + "-" + month + "-" + dates + " 23:59:59";
            },

            _getNow: function() {
                return new Date();
            },
            _format: function(date) {
                return this._getYear(date) + "-" + this._getMonth(date) + "-" + this._getDay(date) + " " + this._getHour(date) + ":" + this._getMinute(date) + ":" + this._getSecond(date);
            },
            _getDate: function() {
                return this._getNow();
            },
            /*年*/
            _getYear: function(date) {
                return this._transferDate(date).getFullYear();
            },

            /*月*/
            _getMonth: function(date) {
                let month = this._transferDate(date).getMonth() + 1;
                return month > 9 ? month : "0" + month;
            },

            /*日*/
            _getDay: function(date) {
                let day = this._transferDate(date).getDate();
                return day > 9 ? day : "0" + day;
            },

            /*获取今天星期几,如果为0代表星期日*/
            _getWeek: function(date) {
                return this._transferDate(date).getDay();
            },

            /*时*/
            _getHour: function(date) {
                let hour = this._transferDate(date).getHours();
                return hour > 9 ? hour : "0" + hour;
            },

            /*12小时制时*/
            _getHour12: function(date) {
                let hour = this._transferDate(date).getHours();
                return hour % 12 == 0 ? 12 : hour % 12;
            },

            /*分*/
            _getMinute: function(date) {
                let minutes = this._transferDate(date).getMinutes();
                return minutes > 9 ? minutes : "0" + minutes;
            },

            /*秒*/
            _getSecond: function(date) {
                let seconds = this._transferDate(date).getSeconds();
                return seconds > 9 ? seconds : "0" + seconds;
            },

            /*毫秒*/
            _getMillisecond: function(date) {
                return this._transferDate(date).getMilliseconds();
            },

            /*获取今天在当年是第几季度*/
            _getPeriod: function(date) {
                let month = this._getMonth(date) * 1;
                return Math.floor((month + 3) / 3);
            },

            /*星期*/
            _nowWeekChinies: function(date) {
                let nowWeek = this._getWeek(date);
                let day = "";
                switch(nowWeek) {
                    case 0:
                        day = "日";
                        break;
                        break;
                    case 1:
                        day = "一";
                        break;
                        break;
                    case 2:
                        day = "二";
                        break;
                        break;
                    case 3:
                        day = "三";
                        break;
                        break;
                    case 4:
                        day = "四";
                        break;
                        break;
                    case 5:
                        day = "五";
                        break;
                        break;
                    case 6:
                        day = "六";
                        break;
                }
                return day;
            },

            /*返回 1970 年 1 月 1 日至今的毫秒数。*/
            _getTime: function(date) {
                return this._transferDate(date).getTime();
            },

            /**
             * 转换long值为日期字符串
             * @param longtime 时间
             * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
             * @return 符合要求的日期字符串
             */
            getFormatDateByLong: function(longTime, pattern) {
                return this.getFormatDate(new Date(longTime), pattern);
            },
            /**
             * 转换日期对象为日期字符串
             * @param l long值
             * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
             * @return 符合要求的日期字符串
             */
            getFormatDate: function(date, pattern) {
                if(date == undefined) {
                    date = new Date();
                }
                if(pattern == undefined) {
                    pattern = "yyyy-MM-dd hh:mm:ss";
                }

                let o = {
                    "M+": date.getMonth() + 1,
                    "d+": date.getDate(),
                    "h+": date.getHours(),
                    "m+": date.getMinutes(),
                    "s+": date.getSeconds(),
                    "q+": Math.floor((date.getMonth() + 3) / 3),
                    "S": date.getMilliseconds()
                };
                if(/(y+)/.test(pattern)) {
                    pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                }

                for(let k in o) {
                    if(new RegExp("(" + k + ")").test(pattern)) {
                        pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                    }
                }
                return pattern;
            },
            /**
             * 获取时间戳
             * @param obj
             * @returns {number|Number}
             */
            timeStamp: function() {
                return new Date().getTime();
            },
            /**
             * 返回一个时间格式
             * dateformat(new Data(),"y-M-d")   "y-M-d"  "y年M月d日"  "y/M/d"
             * dateformat(new Data(),"H-m-s")   "H-m-s"  "H时m分s秒"  "H/m/s" "H:m:s"
             * dateformat(new Data(),"y-M-d H:m:s")      "y年M月d日 H时m分s秒"  "y/M/d H/m/s"  "y-M-d H:m:s"
             * dateformat(new Date(),"MX"))    返回一天中的某个时刻 早晨  中午  下午  晚上  凌晨
             * dateformat(new Date(),"yyyy") 获取年份
             * dateformat(new Date(),"MM")    获取月份
             * dateformat(new Date(),"dd")   获取日
             * dateformat(new Date(),"HH")   获取小时
             * dateformat(new Date(),"mm")   获取分
             * dateformat(new Date(),"ss")  获取秒
             * dateformat(new Date(),"WD")   获取星期
             * dateformat(new Date(),"SMX") 获取几个月以前，几年以前
             * @param obj
             * @returns {number|Number}
             * 调用方法：let str = utils.dateformat(new Data(),"y-M-d")
             * @param {Object} data
             * @param {Object} pattern
             */
            dateformat: function(data, pattern) {
                let month_day = data.getDate();
                let week_day = data.getDay();
                let year_month = data.getMonth() + 1;
                let year_full = data.getFullYear();
                let day_hour = data.getHours();
                let hour_minute = data.getMinutes();
                let minute_seconds = data.getSeconds();
                let minute_Millisecond = data.getMilliseconds();
                let time_Millisecond = data.getTime();
                if(year_full < 10) {
                    year_full = "0" + year_full
                };
                if(month_day < 10) {
                    month_day = "0" + month_day
                };
                if(day_hour < 10) {
                    day_hour = "0" + day_hour
                };
                if(hour_minute < 10) {
                    hour_minute = "0" + hour_minute
                };
                if(minute_seconds < 10) {
                    minute_seconds = "0" + minute_seconds
                };

                if(pattern == "yyyy" && pattern.length == 4) {
                    return year_full;
                };
                if(pattern == "MM" && pattern.length == 2) {
                    return year_month;
                };
                if(pattern == "dd" && pattern.length == 2) {
                    return month_day;
                };
                if(pattern == "HH" && pattern.length == 2) {
                    return day_hour;
                };
                if(pattern == "mm" && pattern.length == 2) {
                    return hour_minute;
                };
                if(pattern == "ss" && pattern.length == 2) {
                    return minute_seconds;
                };

                if(pattern == "SMX" && pattern.length == 3) {
                    data.setFullYear(2015)
                    data.setMonth(11)
                    data.setMinutes(8)
                    let new_time = new Date();
                    let new_year_month = new_time.getMonth() + 1;
                    let new_day_hour_mnuite = new_time.getMinutes();
                    let new_year = new_time.getFullYear();
                    if((new_year - data.getFullYear()) >= 1 && (new_year - data.getFullYear() <= 2)) {
                        return "一年以前";
                    }
                    if((new_year - data.getFullYear()) >= 3 && (new_year - data.getFullYear() <= 5)) {
                        return "三年以前";
                    }
                    if((new_year - data.getFullYear()) >= 5 && (new_year - data.getFullYear() <= 8)) {
                        return "五年以前";
                    }
                    if((new_year - data.getFullYear()) >= 10) {
                        return "十年以前";
                    }
                    if(new_day_hour_mnuite - data.getMinutes() >= 3 && new_day_hour_mnuite - data.getMinutes() < 10) {
                        return "刚刚";
                    }
                    if(new_day_hour_mnuite - data.getMinutes() >= 10 && new_day_hour_mnuite - data.getMinutes() < 20) {
                        return "十分钟以前";
                    }
                    if(new_day_hour_mnuite - data.getMinutes() >= 380 && new_day_hour_mnuite - data.getMinutes() < 60) {
                        return "四十分钟以前";
                    }
                    if((new_year_month - data.getMonth() + 1) >= 1 && (new_year_month - data.getMonth() + 1) < 3) {
                        return "一个月以前";
                    }
                    if((new_year_month - data.getMonth() + 1) > 3 && (new_year_month - data.getMonth() + 1) < 6) {
                        return "三个月以前";
                    }
                    if((new_year_month - data.getMonth() + 1) > 6 && (new_year_month - data.getMonth() + 1) < 11) {
                        return "半年以前";
                    }
                }

                /*-------------------------------WD  返回星期----------start---------*/
                if(pattern == "WD" && pattern.length == 2) {
                    let w_d;
                    switch(data.getUTCDay()) {
                        case 0:
                            w_d = "星期天";
                            break;
                        case 1:
                            w_d = "星期一";
                            break;
                        case 2:
                            w_d = "星期二";
                            break;
                        case 3:
                            w_d = "星期三";
                            break;
                        case 4:
                            w_d = "星期四";
                            break;
                        case 5:
                            w_d = "星期五";
                            break;
                        case 6:
                            w_d = "星期六";
                            break;
                    }
                    return w_d;
                }
                /*-------------------------------WD  返回星期----------end---------*/

                /*-------------------------------MX 返回一天中的某个时刻--start-------------------*/
                if(pattern == "MX" && pattern.length == 2) {
                    if(day_hour < 11 && day_hour > 6) {
                        return "早晨";
                    }
                    if(day_hour <= 14 && day_hour >= 11) {
                        return "中午";
                    }
                    if(day_hour > 14 && day_hour < 19) {
                        return "下午";
                    }
                    if(day_hour >= 19 && day_hour <= 23) {
                        return "晚上";
                    }
                    if(day_hour < 6 && day_hour >= 0) {
                        return "凌晨";
                    }
                }
                /*-------------------------------MX 返回一天中的某个时刻--end------------------*/

                /*-------------------------------y-M-d H-m-s-------------start---------------------*/
                //"y年M月d日 H时m分s秒"
                let reg = /^(y{1,4}).?(M{1,2}).?(d{1,2})(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)?\s?(H{1,2}).?(m{1,2}).?(s{1,2})(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)?/;
                let yMdHms_separator_reg = /([-+])|(\/+)|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)(\s?)([-+])|(\/+)|([:+])|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g;
                let yMdHms_separator = pattern.match(yMdHms_separator_reg);
                let yMdHms = pattern.match(reg);
                if(reg.test(pattern)) {
                    if(pattern.length == 13) {
                        return year_full + yMdHms_separator[0] + year_month + yMdHms_separator[1] + month_day + yMdHms_separator[2] + " " + day_hour + yMdHms_separator[3] + hour_minute + yMdHms_separator[4] + minute_seconds + yMdHms_separator[5];
                    } else {
                        return year_full + yMdHms_separator[0] + year_month + yMdHms_separator[1] + month_day + " " + day_hour + yMdHms_separator[2] + hour_minute + yMdHms_separator[3] + minute_seconds
                    }
                }
                /*-------------------------------y-M-d H-m-s-------------end---------------------*/

                /*-------------------------------y-M-d -------------start-----------------------*/
                if(pattern.length >= 5) {
                    let yMd_separator = pattern.match(/([-+])|(\/+)|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g);
                    let yMd = pattern.match(/^((y{1,4})-(M{1,2})-(d{1,2}))|((y{1,4})\/(M{1,2})\/(d{1,2}))|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g);
                    if(utils.tmArray.arrContains(pattern, "M", false) || utils.tmArray.arrContains(pattern, "年", false)) {
                        if("y/M/d" === yMd[0] || "y-M-d" === yMd[0] || "y年M月d".indexOf("年") != -1 && "y年M月d".indexOf("月") != -1 && "y年M月d日".indexOf("日") != -1) {
                            if(yMd_separator.length == 3) {
                                return year_full + yMd_separator[0] + year_month + yMd_separator[1] + month_day + yMd_separator[2]
                            };
                            return year_full + yMd_separator[0] + year_month + yMd_separator[1] + month_day
                        };

                    };
                    /*-------------------------------y-M-d -------------end-----------------------*/

                    /*-------------------------------H-m-s -------------start-----------------------*/
                    let Hsm_separator = pattern.match(/([-+])|(\/+)|(:+)|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g);
                    let Hsm = pattern.match(/^((H{1,4})-(m{1,2})-(s{1,2}))|((H{1,4})\/(m{1,2})\/(s{1,2}))|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)|((H{1,4}):(m{1,2}):(s{1,2}))/g);
                    if(utils.tmArray.arrContains(pattern, "H", false) || utils.tmArray.arrContains(pattern, "分", false)) {
                        if("H/m/s" === Hsm[0] || "H-m-s" === Hsm[0] || "H时m分s秒".indexOf("时") != -1 && "H时m分s秒".indexOf("秒") != -1 && "H时m分s秒".indexOf("分") != -1) {
                            if(Hsm_separator.length == 3) {
                                return day_hour + Hsm_separator[0] + hour_minute + Hsm_separator[1] + minute_seconds + Hsm_separator[2]
                            };
                            return day_hour + Hsm_separator[0] + hour_minute + Hsm_separator[1] + minute_seconds;
                        };
                    };
                };
            }
        },
        /////////////////////////////关于日期操作js结束/////////////////////////////////////

        /////////////////////////////关于文件及字符操作js开始/////////////////////////////////////
        tmFile: {
            /**
             * 文件大小转换为MB GB KB格式
             * @param {Object} size
             */
            tm_countFileSize: function(size) {
                let fsize = parseFloat(size, 2);
                let fileSizeString;
                if(fsize < 1024) {
                    fileSizeString = fsize.toFixed(2) + "B";
                } else if(fsize < 1048576) {
                    fileSizeString = (fsize / 1024).toFixed(2) + "KB";
                } else if(fsize < 1073741824) {
                    fileSizeString = (fsize / 1024 / 1024).toFixed(2) + "MB";
                } else if(fsize < 1024 * 1024 * 1024) {
                    fileSizeString = (fsize / 1024 / 1024 / 1024).toFixed(2) + "GB";
                } else {
                    fileSizeString = "0B";
                }
                return fileSizeString;
            },

            /**
             * 获取文件的后缀名
             * @param {Object} fileName
             */
            tm_getExt: function(fileName) {
                if(fileName.lastIndexOf(".") == -1)
                    return fileName;
                let pos = fileName.lastIndexOf(".") + 1;
                return fileName.substring(pos, fileName.length).toLowerCase();
            },

            /**
             * 获取文件名称
             * @param {Object} fileName
             */
            tm_getFileName: function(fileName) {
                let pos = fileName.lastIndexOf(".");
                if(pos == -1) {
                    return fileName;
                } else {
                    return fileName.substring(pos, fileName.length);
                }
            },

            /**
             * 生成一个随机数
             */
            random: 0,
            tm_Random: function() {
                this.random++;
                return new Date().getTime() + "" + random;
            },

            /**
             * 过滤html代码(把<>转换)
             * @param {Object} str
             */
            filterTag: function(str) {
                str = str.replace(/&/ig, "&amp;");
                str = str.replace(/</ig, "&lt;");
                str = str.replace(/>/ig, "&gt;");
                str = str.replace(" ", "&nbsp;");
                return str;
            },

            /**
             * 过滤<script></script>转换
             * @param {Object} str
             */
            filterScript: function(str) {
                return str.replace(/(<script)/ig, "&lt;script").replace(/(<script>)/ig, "&lt;script&gt;").replace(/(<\/script>)/ig, "&lt;/script&gt;");
            },

            /**
             * 判断非空
             * @param val
             * @returns {Boolean}
             */
            isEmpty: function(val) {
                val = $.trim(val);
                if(val == null)
                    return true;
                if(val == undefined || val == 'undefined')
                    return true;
                if(val == "")
                    return true;
                if(val.length == 0)
                    return true;
                if(!/[^(^\s*)|(\s*$)]/.test(val))
                    return true;
                return false;
            },
            /**
             * 判断一个非空
             * @param {Object} val
             */
            isNotEmpty: function(val) {
                return !isEmpty(val);
            },
            /*验证是否为图片*/
            tmCheckImage: function(fileName) {
                return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName);
            },

            /*验证是否为视频*/
            tmCheckVideo: function(fileName) {
                return /(mp4|mp3|flv|wav)$/ig.test(fileName);
            },

            /*验证是否为文档*/
            tmCheckDocument: function(fileName) {
                return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml)$/ig.test(fileName);
            },

            /*验证是否为文档*/
            tmCheckOffice: function(fileName) {
                return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig.test(fileName);
            },
            /**
             * 本函数用于统计字符串的长度，有两种模式切换。
             * “En”英文主计算模式，将每个中文算作1个字符；“Ch”中文主计算模式，将每个中文算作2个字符长度
             */
            strLen: (function() {
                let trim = function(chars) {
                    return(chars || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
                }

                return function(_str, _model) {
                    _str = trim(_str),
                        _model = _model || "Ch"; //默认是中文
                    let _strLen = _str.length; //获取字符长度
                    if(_strLen == 0) { //如果字符为0直接返回
                        return 0;
                    } else {
                        let chinese = _str.match(/[\u4e00-\u9fa5]/g); //匹配中文
                        //判断是什么模式
                        return _strLen + (chinese && _model == "Ch" ? chinese.length : 0);
                    }
                };
            })(),
            /**
             * 去除字符串两边的空格
             * @param str
             * @returns {number|Number}
             * 调用方法：let str = utils.trim("abcd")
             */
            trim: function(str) {
                String.prototype.trim = function() {
                    return str.replace(/(^\s*)|(\s*$)/g, "");
                }
            },
            /**
             * 判断字符串是否是汉字，字段中有空格返回false
             * @param obj
             * @returns {number|Number}
             */
            isChinese: function(str) {
                if(/^([\u4e00-\u9fa5]|[\ufe30-\uffA0])*$/.test(this.trim(str)))
                    return true;
            }
        },
        /////////////////////////////关于文件及字符操作js结束/////////////////////////////////////

        /////////////////////////////关于数字操作js开始/////////////////////////////////////
        tmNumber: {
            /**
             * 数字千分位分开
             * @param {Object} str
             */
            formatNum: function(str) {
                let newStr = "";
                let count = 0;

                if(str.indexOf(".") == -1) {
                    for(let i = str.length - 1; i >= 0; i--) {
                        if(count % 3 == 0 && count != 0) {
                            newStr = str.charAt(i) + "," + newStr;
                        } else {
                            newStr = str.charAt(i) + newStr;
                        }
                        count++;
                    }
                    str = newStr + ".00"; //自动补小数点后两位
                    console.log(str)
                } else {
                    for(let i = str.indexOf(".") - 1; i >= 0; i--) {
                        if(count % 3 == 0 && count != 0) {
                            newStr = str.charAt(i) + "," + newStr; //碰到3的倍数则加上“,”号
                        } else {
                            newStr = str.charAt(i) + newStr; //逐个字符相接起来
                        }
                        count++;
                    }
                    str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
                    console.log(str)
                }
            },
            /**
             * 判断身份证号码的方法
             * @param {Object} code
             */
            IdentityCodeValid: function(code) {
                let alert_tip = ""; // 用于提示
                let city = {
                    11: "北京",
                    12: "天津",
                    13: "河北",
                    14: "山西",
                    15: "内蒙古",
                    21: "辽宁",
                    22: "吉林",
                    23: "黑龙江 ",
                    31: "上海",
                    32: "江苏",
                    33: "浙江",
                    34: "安徽",
                    35: "福建",
                    36: "江西",
                    37: "山东",
                    41: "河南",
                    42: "湖北 ",
                    43: "湖南",
                    44: "广东",
                    45: "广西",
                    46: "海南",
                    50: "重庆",
                    51: "四川",
                    52: "贵州",
                    53: "云南",
                    54: "西藏 ",
                    61: "陕西",
                    62: "甘肃",
                    63: "青海",
                    64: "宁夏",
                    65: "新疆",
                    71: "台湾",
                    81: "香港",
                    82: "澳门",
                    91: "国外 "
                };
                let pass = true;
                if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
                    alert_tip = "身份证号格式错误";
                    pass = false;
                } else if(!city[code.substr(0, 2)]) {
                    alert_tip = "地址编码错误";
                    pass = false;
                } else {
                    //18位身份证需要验证最后一位校验位
                    if(code.length == 18) {
                        code = code.split('');
                        //∑(ai×Wi)(mod 11)
                        //加权因子
                        let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                        //校验位
                        let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                        let sum = 0;
                        let ai = 0;
                        let wi = 0;
                        for(let i = 0; i < 17; i++) {
                            ai = code[i];
                            wi = factor[i];
                            sum += ai * wi;
                        }
                        let last = parity[sum % 11];
                        if(parity[sum % 11] != code[17]) {
                            alert_tip = "校验位错误(X需大写)";
                            pass = false;
                        }
                    }
                }
                if(!pass) {
                    alert(alert_tip);
                }
                return pass;
            },
            /**
             * 将数字转换成对应的中文 将阿拉伯数字翻译成中文的大写数字
             *
             * @param {Object}
             *            num 比如:1对应一 11：十一 101:一百零一
             * @return {TypeName}
             */
            tm_NumberToChinese: function(num) {
                let AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
                let BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
                let a = ("" + num).replace(/(^0*)/g, "").split("."),
                    k = 0,
                    re = "";
                for(let i = a[0].length - 1; i >= 0; i--) {
                    switch(k) {
                        case 0:
                            re = BB[7] + re;
                            break;
                        case 4:
                            if(!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                                    .test(a[0]))
                                re = BB[4] + re;
                            break;
                        case 8:
                            re = BB[5] + re;
                            BB[7] = BB[5];
                            k = 0;
                            break;
                    }
                    if(k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
                        re = AA[0] + re;
                    if(a[0].charAt(i) != 0)
                        re = AA[a[0].charAt(i)] + BB[k % 4] + re;
                    k++;
                }

                if(a.length > 1) // 加上小数部分(如果有小数部分)
                {
                    re += BB[6];
                    for(let i = 0; i < a[1].length; i++)
                        re += AA[a[1].charAt(i)];
                }
                if(re == '一十')
                    re = "十";
                if(re.match(/^一/) && re.length == 3)
                    re = re.replace("一", "");
                return re;
            },
            /**
             * 将数字转换为大写金额
             * @param {Object} Num
             */
            change_to_Chinese: function(Num) {
                //判断如果传递进来的不是字符的话转换为字符
                if(typeof Num == "number") {
                    Num = new String(Num);
                };
                Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
                Num = Num.replace(/ /g, "") //替换tomoney()中的空格
                Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
                if(isNaN(Num)) { //验证输入的字符是否为数字
                    //alert("请检查小写金额是否正确");
                    return "";
                };
                //字符处理完毕后开始转换，采用前后两部分分别转换
                let part = String(Num).split(".");
                let newchar = "";
                //小数点前进行转化
                for(i = part[0].length - 1; i >= 0; i--) {
                    if(part[0].length > 10) {
                        return "";
                        //若数量超过拾亿单位，提示
                    }
                    let tmpnewchar = ""
                    let perchar = part[0].charAt(i);
                    switch(perchar) {
                        case "0":
                            tmpnewchar = "零" + tmpnewchar;
                            break;
                        case "1":
                            tmpnewchar = "壹" + tmpnewchar;
                            break;
                        case "2":
                            tmpnewchar = "贰" + tmpnewchar;
                            break;
                        case "3":
                            tmpnewchar = "叁" + tmpnewchar;
                            break;
                        case "4":
                            tmpnewchar = "肆" + tmpnewchar;
                            break;
                        case "5":
                            tmpnewchar = "伍" + tmpnewchar;
                            break;
                        case "6":
                            tmpnewchar = "陆" + tmpnewchar;
                            break;
                        case "7":
                            tmpnewchar = "柒" + tmpnewchar;
                            break;
                        case "8":
                            tmpnewchar = "捌" + tmpnewchar;
                            break;
                        case "9":
                            tmpnewchar = "玖" + tmpnewchar;
                            break;
                    }
                    switch(part[0].length - i - 1) {
                        case 0:
                            tmpnewchar = tmpnewchar + "元";
                            break;
                        case 1:
                            if(perchar != 0) tmpnewchar = tmpnewchar + "拾";
                            break;
                        case 2:
                            if(perchar != 0) tmpnewchar = tmpnewchar + "佰";
                            break;
                        case 3:
                            if(perchar != 0) tmpnewchar = tmpnewchar + "仟";
                            break;
                        case 4:
                            tmpnewchar = tmpnewchar + "万";
                            break;
                        case 5:
                            if(perchar != 0) tmpnewchar = tmpnewchar + "拾";
                            break;
                        case 6:
                            if(perchar != 0) tmpnewchar = tmpnewchar + "佰";
                            break;
                        case 7:
                            if(perchar != 0) tmpnewchar = tmpnewchar + "仟";
                            break;
                        case 8:
                            tmpnewchar = tmpnewchar + "亿";
                            break;
                        case 9:
                            tmpnewchar = tmpnewchar + "拾";
                            break;
                    }
                    let newchar = tmpnewchar + newchar;
                }
                //小数点之后进行转化
                if(Num.indexOf(".") != -1) {
                    if(part[1].length > 2) {
                        // alert("小数点之后只能保留两位,系统将自动截断");
                        part[1] = part[1].substr(0, 2)
                    }
                    for(i = 0; i < part[1].length; i++) {
                        tmpnewchar = ""
                        perchar = part[1].charAt(i)
                        switch(perchar) {
                            case "0":
                                tmpnewchar = "零" + tmpnewchar;
                                break;
                            case "1":
                                tmpnewchar = "壹" + tmpnewchar;
                                break;
                            case "2":
                                tmpnewchar = "贰" + tmpnewchar;
                                break;
                            case "3":
                                tmpnewchar = "叁" + tmpnewchar;
                                break;
                            case "4":
                                tmpnewchar = "肆" + tmpnewchar;
                                break;
                            case "5":
                                tmpnewchar = "伍" + tmpnewchar;
                                break;
                            case "6":
                                tmpnewchar = "陆" + tmpnewchar;
                                break;
                            case "7":
                                tmpnewchar = "柒" + tmpnewchar;
                                break;
                            case "8":
                                tmpnewchar = "捌" + tmpnewchar;
                                break;
                            case "9":
                                tmpnewchar = "玖" + tmpnewchar;
                                break;
                        }
                        if(i == 0) tmpnewchar = tmpnewchar + "角";
                        if(i == 1) tmpnewchar = tmpnewchar + "分";
                        newchar = newchar + tmpnewchar;
                    }
                }
                //替换所有无用汉字
                while(newchar.search("零零") != -1)
                    newchar = newchar.replace("零零", "零");
                newchar = newchar.replace("零亿", "亿");
                newchar = newchar.replace("亿万", "亿");
                newchar = newchar.replace("零万", "万");
                newchar = newchar.replace("零元", "元");
                newchar = newchar.replace("零角", "");
                newchar = newchar.replace("零分", "");
                if(newchar.charAt(newchar.length - 1) == "元") {
                    newchar = newchar + "整"
                }
                return newchar;
            }
        },
        /////////////////////////////关于数字操作js结束/////////////////////////////////////

        /////////////////////////////关于窗体的操作js开始/////////////////////////////////////
        /**
         *窗体不允许选中
         */
        tm_forbiddenSelect: function() {
            $(document).bind("selectstart", function() {
                return false;
            });
            document.onselectstart = new Function("event.returnValue=false;");
            $("*").css({
                "-moz-user-select": "none"
            });
        },
        /**
         * 窗体允许选中
         */
        tm_autoSelect: function() {
            $(document).bind("selectstart", function() {
                return true;
            });
            document.onselectstart = new Function("event.returnValue=true;");
            $("*").css({
                "-moz-user-select": ""
            });
        },
        /////////////////////////////关于窗体的操作js结束/////////////////////////////////////

        /////////////////////////////关于剪切板js开始/////////////////////////////////////
        /* 获取剪切板中的内容 */
        tm_GetClipboard: function() {
            if(window.clipboardData) {
                return(window.clipboardData.getData('text'));
            } else {
                if(window.netscape) {
                    try {
                        netscape.security.PrivilegeManager
                            .enablePrivilege("UniversalXPConnect");
                        let clip = Components.classes["@mozilla.org/widget/clipboard;1"]
                            .createInstance(Components.interfaces.nsIClipboard);
                        if(!clip) {
                            return;
                        }
                        let trans = Components.classes["@mozilla.org/widget/transferable;1"]
                            .createInstance(Components.interfaces.nsITransferable);
                        if(!trans) {
                            return;
                        }
                        trans.addDataFlavor("text/unicode");
                        clip.getData(trans, clip.kGlobalClipboard);
                        let str = new Object();
                        let len = new Object();
                        trans.getTransferData("text/unicode", str, len);
                    } catch(e) {
                        alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                        return null;
                    }
                    if(str) {
                        if(Components.interfaces.nsISupportsWString) {
                            str = str.value
                                .QueryInterface(Components.interfaces.nsISupportsWString);
                        } else {
                            if(Components.interfaces.nsISupportsString) {
                                str = str.value
                                    .QueryInterface(Components.interfaces.nsISupportsString);
                            } else {
                                str = null;
                            }
                        }
                    }
                    if(str) {
                        return(str.data.substring(0, len.value / 2));
                    }
                }
            }
            return null;
        },
        /**
         * 往剪切板里赋值
         * @param txt
         * @returns {Boolean}
         */
        tmSetClipboard: function(txt) {
            if(window.clipboardData) {
                window.clipboardData.clearData();
                window.clipboardData.setData("Text", txt);
            } else if(navigator.userAgent.indexOf("Opera") != -1) {
                window.location = txt;
            } else if(window.netscape) {
                try {
                    netscape.security.PrivilegeManager
                        .enablePrivilege("UniversalXPConnect");
                } catch(e) {
                    alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                    return false;
                }
                let clip = Components.classes['@mozilla.org/widget/clipboard;1']
                    .createInstance(Components.interfaces.nsIClipboard);
                if(!clip)
                    return;
                let trans = Components.classes['@mozilla.org/widget/transferable;1']
                    .createInstance(Components.interfaces.nsITransferable);
                if(!trans)
                    return;
                trans.addDataFlavor('text/unicode');
                let str = Components.classes["@mozilla.org/supports-string;1"]
                    .createInstance(Components.interfaces.nsISupportsString);
                let copytext = txt;
                str.data = copytext;
                trans.setTransferData("text/unicode", str, copytext.length * 2);
                let clipid = Components.interfaces.nsIClipboard;
                if(!clip)
                    return false;
                clip.setData(trans, null, clipid.kGlobalClipboard);
            }
        },
        /////////////////////////////关于剪切板js结束/////////////////////////////////////

        ///////////////////////////关于光标操作的js开始///////////////////////
        /**
         * 设置光标的处的值
         * @param ctrl
         * @returns {number}
         */
        getCursortPosition: function(ctrl) {
            let CaretPos = 0; // IE Support
            if(document.selection) {
                ctrl.focus();
                let Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }
            // Firefox support
            else if(ctrl.selectionStart || ctrl.selectionStart == '0') {
                CaretPos = ctrl.selectionStart;
            }
            return(CaretPos);
        },

        /**
         * 获取光标处内容
         * @param inputDom
         * @param startIndex
         * @param endIndex
         */
        setCaretPosition: function(inputDom, startIndex, endIndex) {
            if(inputDom.setSelectionRange) {
                inputDom.setSelectionRange(startIndex, endIndex);
            } else if(inputDom.createTextRange) // IE
            {
                let range = inputDom.createTextRange();
                range.collapse(true);
                range.moveStart('character', startIndex);
                range.moveEnd('character', endIndex - startIndex - 1);
                range.select();
            }
            inputDom.focus();
        },

        /**
         * 获取选中文本
         * @param inputDom
         * @returns {string}
         */
        getSelectedText: function(inputDom) {
            if(document.selection) // IE
            {
                return document.selection.createRange().text;
            } else {
                return inputDom.value.substring(inputDom.selectionStart,
                    inputDom.selectionEnd);
            }
        },
        /**
         * 在光标处插入字符串
         * @param myField:文本框对象
         * @param myValue：要插入的值
         */
        tm_insertAtCursorxxx: function(myField, myValue) {
            // IE support
            if(document.selection) {
                myField.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
                sel.select();
            }
            // MOZILLA/NETSCAPE support
            else if(myField.selectionStart || myField.selectionStart == '0') {
                let startPos = myField.selectionStart;
                let endPos = myField.selectionEnd;
                // save scrollTop before insert
                let restoreTop = myField.scrollTop;
                myField.value = myField.value.substring(0, startPos) + myValue +
                    myField.value.substring(endPos, myField.value.length);
                if(restoreTop > 0) {
                    // restore previous scrollTop
                    myField.scrollTop = restoreTop;
                }
                myField.focus();
                myField.selectionStart = startPos + myValue.length;
                myField.selectionEnd = startPos + myValue.length;
            } else {
                myField.value += myValue;
                myField.focus();
            }
        },

        /**
         * 在光标处插入内容
         * @param tc
         * @param str
         */
        tm_insertAtCursor: function(tc, str) {
            let tclen = tc.value.length;
            tc.focus();
            if(typeof document.selection != "undefined") {
                document.selection.createRange().text = str;
            } else {
                tc.value = tc.value.substring(0, tc.selectionStart) + str + tc.value.substring(tc.selectionStart, tclen);
            }
        },
        ///////////////////////////关于光标操作的js结束///////////////////////

        /**
         * 阻止冒泡事件
         * @param e
         */
        stopBubble: function(e) {
            // 如果提供了事件对象，则这是一个非IE浏览器
            if(e && e.stopPropagation) {
                // 因此它支持W3C的stopPropagation()方法
                e.stopPropagation();
            } else {
                // 否则，我们需要使用IE的方式来取消事件冒泡
                window.event.cancelBubble = true;
            }
        },
        /**
         * 刷新当前页面
         */
        tm_refreash: function() {
            window.location.href = window.location.href;
        },
        /**
         * json对象转换为json字符串
         * @param obj
         * @returns {*}
         */
        jsonToString: function(obj) {
            let THIS = this;
            switch(typeof(obj)) {
                case 'string':
                    return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';
                case 'array':
                    return '[' + obj.map(THIS.jsonToString).join(',') + ']';
                case 'object':
                    if(obj instanceof Array) {
                        let strArr = [];
                        let len = obj.length;
                        for(let i = 0; i < len; i++) {
                            strArr.push(THIS.jsonToString(obj[i]));
                        }
                        return '[' + strArr.join(',') + ']';
                    } else if(obj == null) {
                        return 'null';

                    } else {
                        let string = [];
                        for(let property in obj)
                            string.push(THIS.jsonToString(property) + ':' +
                                THIS.jsonToString(obj[property]));
                        return '{' + string.join(',') + '}';
                    }
                case 'number':
                    return obj;
                case false:
                    return obj;
            }
        },

        /**
         * 获取浏览器url中的参数值
         * @param {Object} name
         */
        getURLParam: function(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
        },
        /**
         * 图片等比例缩放
         * @param ImgD 图片对象
         * @param iwidth ：最大宽度
         * @param iheight ：最大高度
         * @constructor
         */
        DrawImage: function(ImgD, iwidth, iheight) {
            //参数(图片,允许的宽度,允许的高度)
            let image = new Image();
            image.src = ImgD.src;
            if(image.width > 0 && image.height > 0) {
                if(image.width / image.height >= iwidth / iheight) {
                    if(image.width > iwidth) {
                        ImgD.width = iwidth;
                        ImgD.height = (image.height * iwidth) / image.width;
                    } else {
                        ImgD.width = image.width;
                        ImgD.height = image.height;
                    }
                    ImgD.alt = image.width + "×" + image.height;
                } else {
                    if(image.height > iheight) {
                        ImgD.height = iheight;
                        ImgD.width = (image.width * iheight) / image.height;
                    } else {
                        ImgD.width = image.width;
                        ImgD.height = image.height;
                    }
                    ImgD.alt = image.width + "×" + image.height;
                }
            }
        },
        /**
         * 加密算法
         * @param str
         * @param k
         * @returns {string}
         */
        fencryption: function(str, k) {
            let string = "";
            for(let i = 0; i < str.length; i++) {
                let c = str.charCodeAt(i);
                if(c >= 97 && c <= 122) {
                    c += k % 26;
                    if(c < 97) {
                        c += 26;
                    }
                    if(c > 122) {
                        c -= 26;
                    }
                } else if(c >= 65 && c <= 90) {
                    c += k % 26;
                    if(c < 65) {
                        c += 26;
                    }
                    if(c > 122) {
                        c -= 26;
                    }
                }
                string += String.fromCharCode(c);
            }
            return string;
        },

        /**
         * 解密算法
         * @param str
         * @param n
         * @returns {string}
         */
        dencryption: function(str, n) {
            let string = "";
            let k = parseInt("-" + n);
            for(let i = 0; i < str.length; i++) {
                let c = str.charCodeAt(i);
                if(c >= 97 && c <= 122) {
                    c += k % 26;
                    if(c < 97) {
                        c += 26;
                    }
                    if(c > 122) {
                        c -= 26;
                    }
                } else if(c >= 65 && c <= 90) {
                    c += k % 26;
                    if(c < 65) {
                        c += 26;
                    }
                    if(c > 122) {
                        c -= 26;
                    }
                }
                string += String.fromCharCode(c);
            }
            return string;
        },
        /**
         * 获取十六进制随机颜色
         * @returns {string}
         */
        getRandomColor: function() {
            return '#' + (function(h) {
                    return new Array(7 - h.length).join("0") + h;
                })((Math.random() * 0x1000000 << 0).toString(16));
        },
        /**
         * 判断浏览器类型
         * @returns {*}
         */
        tmGetBrowse: function() {
            let sUA = navigator.userAgent;
            //检测IE浏览器
            if((navigator.appName == "Microsoft Internet Explorer")) {
                //检测模拟IE浏览的OPERA。edit at 2006-11-08(ver 0.1.2)
                if(sUA.indexOf('Opera') != -1) {
                    this.browseKernel = 'Presto';
                    if(window.opera && document.childNodes) {
                        return 'Opera 7+';
                    } else {
                        return 'Opera 6-';
                    }
                }
                this.browseKernel = 'Trident';
                if(sUA.indexOf('Maxthon') != -1) {
                    return 'Maxthon';
                }
                if(sUA.indexOf('TencentTraveler') != -1) { //ver 0.1.3
                    return '腾迅TT';
                }
                if(document.getElementById) {
                    return "IE5+";
                } else {
                    return "IE4-";
                }
            }
            //检测Gecko浏览器
            if(sUA.indexOf('Gecko') != -1) {
                this.browseKernel = 'Gecko';
                if(navigator.vendor == "Mozilla") {
                    return "Mozilla";
                }
                if(navigator.vendor == "Firebird") {
                    return "Firebird";
                }
                if(navigator.vendor.indexOf('Google') != -1 || sUA.indexOf('Google') != -1) {
                    return 'Google';
                }
                if(sUA.indexOf('Firefox') != -1) {
                    return 'Firefox';
                }
                return "Gecko";
            }
            //Netscape浏览器
            if(sUA.indexOf('Netscape') != -1) {
                this.browseKernel = 'Gecko';
                if(document.getElementById) {
                    return "Netscape 6+";
                } else {
                    return 'Netscape 5-';
                }
            }
            //检测Safari浏览器
            if(sUA.indexOf('Safari') != -1) {
                this.browseKernel = 'KHTML';
                return 'Safari';
            }
            if(sUA.indexOf('konqueror') != -1) {
                this.browseKernel = 'KHTML';
                return 'Konqueror';
            }
            //目前世界公认浏览网页速度最快的浏览器，但它占用的系统资源也很大。
            if(sUA.indexOf('Opera') != -1) {
                this.browseKernel = 'Presto';
                if(window.opera && document.childNodes) {
                    return 'Opera 7+';
                } else {
                    return 'Opera 6-';
                }
                return 'Opera';
            }
            if((sUA.indexOf('hotjava') != -1) && typeof(navigator.accentColorName) == 'undefined') {
                return 'HotJava';
            }
            if(document.all && document.getElementById && navigator.savePreferences && (sUA.indexOf('netfront') < 0) && navigator.appName != 'Blazer') {
                return 'Escape 5';
            }
            //Konqueror / Safari / OmniWeb 4.5+
            if(navigator.vendor == 'KDE' || (document.childNodes && (!document.all || navigator.accentColorName) && !navigator.taintEnabled)) {
                this.browseKernel = 'KHTML';
                return 'KDE';
            }
            if(navigator.__ice_version) {
                return 'ICEbrowser';
            }
            if(window.ScriptEngine && ScriptEngine().indexOf('InScript') + 1) {
                if(document.createElement) {
                    return 'iCab 3+';
                } else {
                    return 'iCab 2-';
                }
            }
            if(document.layers && !document.classes) {
                return 'Omniweb 4.2-';
            }
            if(document.layers && !navigator.mimeTypes['*']) {
                return 'Escape 4';
            }
            if(navigator.appName.indexOf('WebTV') + 1) {
                return 'WebTV';
            }
            if(sUA.indexOf('netgem') != -1) {
                return 'Netgem NetBox';
            }
            if(sUA.indexOf('opentv') != -1) {
                return 'OpenTV';
            }
            if(sUA.indexOf('ipanel') != -1) {
                return 'iPanel MicroBrowser';
            }
            if(document.getElementById && !document.childNodes) {
                return 'Clue browser';
            }
            if(document.getElementById && ((sUA.indexOf('netfront') != -1) || navigator.appName == 'Blazer')) {
                return 'NetFront 3+';
            }
            if((sUA.indexOf('msie') + 1) && window.ActiveXObject) {
                return 'Pocket Internet Explorer';
            }
            return "Unknown";
        },
        /**
         * 判断浏览器类型及版本，如果是IE下面要转移到页面中
         */
        isBrowser: function() {
            return new BROWSER();
        },

        ///////////////////////////////常见的正则判断js开始///////////////////////////////////////////////
        //使用方法：regRule['email'].test(val) 返回true或false
        regRule: {
            email: function(email) {
                let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                return reg.test(email);
            },
            userName: function(str) {
                let reg = /^[a-z0-9_-]{3,16}$/; //用户名
                return reg.test(str);
            },
            chineseName: function(str) {
                let reg = /^[\u4E00-\u9FA5]{2,4}$/; //中文姓名
                return reg.test(str);
            },
            mobile: function(str) {
                let reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/; //手机
                return reg.test(str);
            },
            tel: function(str) {
                let reg = /^0[\d]{2,3}-[\d]{7,8}$/; //固话
                return reg.test(str);
            },
            idCard: function(str) {
                let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
                return reg.test(str);
            },
            amount: function(str) {
                let reg = /^([1-9][\d]{0,10}|0)(\.[\d]{1,2})?$/; //金额(10位整数2位小数)
                return reg.test(str);
            },
            positiveInt: function(str) {
                let reg = /^[1-9]*[1-9][0-9]*$/; //正整数
                return reg.test(str);
            },
            int: function(str) {
                let reg = /^-?\d+$/; //整数(不限位数)
                return reg.test(str);
            },
            bankCard: function(str) {
                let reg = /^\d{16}|\d{19}$/; //16位或19位银行卡或信用卡号(先把空格replace为空串)
                return reg.test(str);
            },
            chinese: function(str) {
                let reg = /[\u4e00-\u9fa5]/g; //判断是不是中文
                return reg.test(str);
            },
            noChinese: function(str) {
                let reg = /[^\u4e00-\u9fa5]/g; //判断不是中文
                return reg.test(str);
            },
            decimalNumber: function(str) {
                let reg = /^\d+(\.\d+)+$/; //判断带小数的数字
                return reg.test(new Number(str));
            },
            ip: function(str) {
                let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
                return reg.test(str);
            }
        }
        ///////////////////////////////常见的正则判断js结束///////////////////////////////////////////////
    }
    ///////////////////////////////////////判断浏览器类型构造函数开始/////////////////////////////////////
    /**
     * 浏览器类型判断
     */
    function BROWSER() {
        let Browser_Name = navigator.appName;
        let Browser_Version = parseFloat(navigator.appVersion);
        let Browser_Agent = navigator.userAgent;
        let Actual_Version, Actual_Name;
        let is_IE = (Browser_Name == "Microsoft Internet Explorer"); //判读是否为ie浏览器
        let is_NN = (Browser_Name == "Netscape"); //判断是否为netscape浏览器
        let is_op = (Browser_Name == "Opera"); //判断是否为Opera浏览器
        if(is_NN) {
            //upper 5.0 need to be process,lower 5.0 return directly
            if(Browser_Version >= 5.0) {
                if(Browser_Agent.indexOf("Netscape") != -1) {
                    let Split_Sign = Browser_Agent.lastIndexOf("/");
                    let Version = Browser_Agent.lastIndexOf(" ");
                    let Bname = Browser_Agent.substring(0, Split_Sign);
                    let Split_sign2 = Bname.lastIndexOf(" ");
                    Actual_Version = Browser_Agent.substring(Split_Sign + 1, Browser_Agent.length);
                    Actual_Name = Bname.substring(Split_sign2 + 1, Bname.length);
                }
                if(Browser_Agent.indexOf("Firefox") != -1) {
                    let Version = Browser_Agent.lastIndexOf("Firefox");
                    Actual_Version = Browser_Agent.substring(Version + 8, Browser_Agent.length);
                    Actual_Name = Browser_Agent.substring(Version, Version + 7);
                }
                if(Browser_Agent.indexOf("Safari") != -1) {
                    if(Browser_Agent.indexOf("Chrome") != -1) {
                        let Split_Sign = Browser_Agent.lastIndexOf(" ");
                        let Version = Browser_Agent.substring(0, Split_Sign);;
                        let Split_Sign2 = Version.lastIndexOf("/");
                        let Bname = Version.lastIndexOf(" ");
                        Actual_Version = Version.substring(Split_Sign2 + 1, Version.length);
                        Actual_Name = Version.substring(Bname + 1, Split_Sign2);
                    } else {
                        let Split_Sign = Browser_Agent.lastIndexOf("/");
                        let Version = Browser_Agent.substring(0, Split_Sign);;
                        let Split_Sign2 = Version.lastIndexOf("/");
                        let Bname = Browser_Agent.lastIndexOf(" ");
                        Actual_Version = Browser_Agent.substring(Split_Sign2 + 1, Bname);
                        Actual_Name = Browser_Agent.substring(Bname + 1, Split_Sign);
                    }
                }
                if(Browser_Agent.indexOf("Trident") != -1) {
                    Actual_Version = Browser_Version;
                    Actual_Name = Browser_Name;
                }
            } else {

                Actual_Version = Browser_Version;
                Actual_Name = Browser_Name;
            }
        } else if(is_IE) {
            let Version_Start = Browser_Agent.indexOf("MSIE");
            let Version_End = Browser_Agent.indexOf(";", Version_Start);
            Actual_Version = Browser_Agent.substring(Version_Start + 5, Version_End)
            Actual_Name = Browser_Name;

            if(Browser_Agent.indexOf("Maxthon") != -1 || Browser_Agent.indexOf("MAXTHON") != -1) {
                let mv = Browser_Agent.lastIndexOf(" ");
                let mv1 = Browser_Agent.substring(mv, Browser_Agent.length - 1);
                mv1 = "遨游版本:" + mv1;
                Actual_Name += "(Maxthon)";
                Actual_Version += mv1;
            }
        } else if(Browser_Agent.indexOf("Opera") != -1) {
            Actual_Name = "Opera";
            let tempstart = Browser_Agent.indexOf("Opera");
            let tempend = Browser_Agent.length;
            Actual_Version = Browser_Version;
        } else {
            Actual_Name = "Unknown Navigator"
            Actual_Version = "Unknown Version"
        }
        /*------------------------------------------------------------------------------
         --Your Can Create new properties of navigator(Acutal_Name and Actual_Version) --
         --Userage:                                                                     --
         --1,Call This Function.                                                        --
         --2,use the property Like This:navigator.Actual_Name/navigator.Actual_Version;--
         ------------------------------------------------------------------------------*/
        navigator.Actual_Name = Actual_Name;
        navigator.Actual_Version = Actual_Version;

        /*---------------------------------------------------------------------------
         --Or Made this a Class.                                                     --
         --Userage:                                                                  --
         --1,Create a instance of this object like this:let browser=new browserinfo;--
         --2,user this instance:browser.Version/browser.Name;                        --
         ---------------------------------------------------------------------------*/
        this.Name = Actual_Name;
        this.Version = Actual_Version;
        this.isFirefox = function() {
            if(Actual_Name.indexOf("Firefox") == -1)
                return false;
            else
                return true;
        }
        this.isSafari = function() {
            if(Actual_Name.indexOf("Safari") == -1)
                return false;
            else
                return true;
        }
        this.isChrome = function() {
            if(Actual_Name.indexOf("Chrome") == -1)
                return false;
            else
                return true;
        }
        //判读是否为ie浏览器
        this.isIE = function() {
            if(Browser_Name == "Microsoft Internet Explorer")
                return false;
            else
                return true;
        }
        //判读是否为ie6浏览器
        this.isCurrIE6 = function() {
            if(Browser_Agent.toLowerCase().indexOf("msie 6.0") != -1)
                return false;
            else
                return true;
        }
        //判读是否为ie7浏览器
        this.isCurrIE6 = function() {
            if(Browser_Agent.toLowerCase().indexOf("msie 7.0") != -1)
                return false;
            else
                return true;
        }
        //判读是否为ie8浏览器
        this.isCurrIE9 = function() {
            if(Browser_Agent.toLowerCase().indexOf("msie 8.0") != -1)
                return false;
            else
                return true;
        }
        //判读是否为ie9浏览器
        this.isCurrIE10 = function() {
            if(Browser_Agent.toLowerCase().indexOf("msie 9.0") != -1)
                return false;
            else
                return true;
        }
        //判读是否为ie11浏览器
        this.isCurrIE11 = function() {
            if((Browser_Name == "Netscape") && (parseFloat(Browser_Version) >= 5.0) && (Browser_Agent.indexOf("Trident") != -1))
                return false;
            else
                return true;
        }

    };
    ///////////////////////////////////////判断浏览器类型构造函数结束/////////////////////////////////////
    ///////////////////////////////////////部分原型的扩展js开始//////////////////////////////////////
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    String.prototype.ltrim = function() {
        return this.replace(/(^\s*)/g, "");
    }
    String.prototype.rtrim = function() {
        return this.replace(/(\s*$)/g, "");
    }
    /**
     * 对Date的扩展，将 Date 转化为指定格式的String 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
     * 可以用 1-2 个占位符 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) eg: (new
     * Date().format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 (new
     * Date().format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04 (new
     * Date().format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04 (new
     * Date().format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04 (new
     * Date().format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
     * 使用方式：(new Date()).format("yyyy-MM-dd);
     */
    Date.prototype.format = function(fmt) {
        let o = {
            "M+": this.getMonth() + 1,
            // 月份
            "d+": this.getDate(),
            // 日
            "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
            // 小时
            "H+": this.getHours(),
            // 小时
            "m+": this.getMinutes(),
            // 分
            "s+": this.getSeconds(),
            // 秒
            "q+": Math.floor((this.getMonth() + 3) / 3),
            // 季度
            "S": this.getMilliseconds()
            // 毫秒
        };
        let week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if(/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substring(4 - RegExp.$1.length));
        }
        if(/(E+)/.test(fmt)) {
            fmt = fmt
                .replace(
                    RegExp.$1,
                    ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
        }
        for(let k in o) {
            if(new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
                    (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };
    /**
     * 判断一个数组元素是不是在数组里面
     * @param obj
     * @returns {boolean}
     */
    Array.prototype.contains = function(obj) {
        let i = this.length;
        while(i--) {
            if(this[i] === obj) {
                return true;
            }
        }
        return false;
    };
    /**
     * 获取数组最大的值
     * @returns {number}
     */
    Array.prototype.arrayMax = function() {
        return Math.max.apply(null, this);
    };
    /**
     * 获取数组中最小的值
     * @returns {number}
     */
    Array.prototype.arrayMin = function() {
        return Math.min.apply(null, this);
    };
    /**
     * 过滤数组中重复的，如果是数组对象就传递一个参数进去
     * dataSet.uniqueFn("id"),那么就是根据id过滤数组对象
     **/
    Array.prototype.uniqueFn = function(key) {
        let arr = this;
        let n = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (key === undefined) {
                if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
            } else {
                inner: {
                    let has = false;
                    for (let j = 0; j < n.length; j++) {
                        if (arr[i][key] == n[j][key]) {
                            has = true;
                            break inner;
                        }
                    }
                }
                if (!has) {
                    n.push(arr[i]);
                }
            }
        }
        return n;
    };
    ///////////////////////////////////////部分原型的扩展js结束//////////////////////////////////////

    ///////////////////////////////////////jQ扩展方法js开始//////////////////////////////////////
    $.fn.extend({
        /**
         * 提取表单中所有的值
         *
         */
        serializeObject: function() {
            let o = {};
            let a = this.serializeArray(); // 有name和value值才返回
            $.each(a, function() {
                if(o[this.name]) {
                    if(!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push($.trim(this.value) || '');
                } else {
                    o[this.name] = $.trim(this.value) || '';
                }
            });

            //如果有保存Date的long精度的，把值带回后台
            $(this).find("input[date-value]").each(function(index, item) {
                if($(item).attr('date-value')) {
                    o[this.name] = $.trim($(item).attr('date-value')) || '';
                }
            })

            // 处理checkbox不选中也必须把值序列化带到后台，radio不存在这问题（多个radio时可以有些为空值）
            $(this).find("input[type='checkbox'][checkstyle='ccs-checked']").each(function(index, item) {
                if(!$(item).val()) {
                    o[item.name] = $(item).attr("ck-value");
                }
            })

            //处理多选下拉菜单数组问题
            let m = $(this).find("input[multiSelect]").each(function(index, item) {
                if($(item).val()) {
                    let array = $(item).val().split(';');
                    o[item.name] = (array || '');
                }
            });
            return o;
        },
        /**
         * 根据后台传递过来的json数据填充到form中
         * @param {Object} jsonObject
         */
        fillValue2Form: function(jsonObject) {
            $(this).find('input,select').each(function(index, item) {
                let inputName = $(item).attr('name');
                if(inputName != undefined) {
                    //@zhongnh 支持日期格式化，并且保留long值精度
                    let val = jsonObject[inputName];
                    if($(item).attr('date-format') != undefined) {
                        $(item).attr('date-value', val);

                        if(!isNaN(val)) { //number
                            val = utile.tmDate.getFormatDateByLong(val, $(item).attr('date-format'));
                        } else if(val instanceof Date) {
                            val = utile.tmDate.getFormatDate(val, $(item).attr('date-format'));
                        }
                    }
                    $(item).val(val);

                    if(($(item).attr('type') == 'checkbox') && $(item).attr('checkstyle') == 'ccs-checked') {
                        if('1' == jsonObject[inputName]) {
                            $(item).attr('checked', 'true');
                        }
                        $(item).attr('ck-value', jsonObject[inputName]);
                    }

                    if($(item).attr('type') == 'radio' && $(item).val() && $(item).val() == jsonObject[inputName]) {
                        $(item).attr('checked', 'true');
                    }
                }
            });
        },
        /**
         * 下拉框
         *
         */
        Selected: function(fn) {
            this.each(function() {
                $(this).on("click", function() {
                    $(this).find(".pbd_select_options").slideToggle("fast");
                });
                $(this).find(".pbd_select_options li").on("click", function() {
                    let optionText = $(this).text();
                    $(this).parent().siblings(".pbd_select_toggle").find(".pbd_select_label").text(optionText);
                    $(this).addClass("current").siblings("li").removeClass("current");
                    //调用其它函数
                    if(fn) {
                        fn($(this));
                    }
                });
            });
        }
    });
    ///////////////////////////////////////jQ扩展方法js结束//////////////////////////////////////
})(window, document, $);