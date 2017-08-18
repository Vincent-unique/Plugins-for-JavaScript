/**
 * Created by vincent on 2017/8/3 0003.
 */

(function(context,methods){
    context?context.TimeUtil= methods(): console.warn("Null Context!");
}(window||this||self||global,function () {
    return{
        currentDate:new Date(),
        getYear:function (date) {
            if(date) {
                return date.getFullYear();
            }
            return this.currentDate.getFullYear();
        },
        getMonth:function (date) {
            if(!date){
                date = this.currentDate;
            }
            //May be caused by Timezone, the general decrease 1
            var month = date.getUTCMonth();
            if(month==12){
                return "01";
            }else {
                ++month;
                if(month<10){
                  month = "0"+month;
                }
                return month;
            }
        },
        getDay:function (date) {
            if(!date){
                date = this.currentDate;
            }
            var day = date.getDate();
            if(day<10){
                day = "0"+day;
            }
            return day;
        },
        buildYMD:function(date,seperator){
          if(!date){
              date = this.currentDate;
          }
          if(!seperator){
              seperator = "-";
          }
          return this.getYear(date)+seperator+this.getMonth(date)+seperator+this.getDay(date);
        },
        buildHMS:function (date) {
            if(!date){
                date = this.currentDate;
            }
            return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        },
        buildEntireDate:function (date,seperator) {
            if(!date){
                date = this.currentDate;
            }
            if(!seperator){
                seperator = "-";
            }
            return this.getYear(date)+seperator+this.getMonth(date)+seperator+this.getDay(date)+" "+this.buildHMS(date);
        },

        /**
         * build next month date of the day
         * @param date
         * @param seperator
         * @returns {string}
         */
        buidNextDate:function (date,seperator) {
            if(!date){
                date = this.currentDate;
            }
            if(!seperator){
                seperator = "-";
            }
            if(this.getMonth(date)==12){
                return (this.getYear(date)+1)+seperator+this.getMonth(date)+seperator+this.getDay(date)+" "+this.buildHMS(date);
            }else {
                return this.getYear(date)+seperator+(this.getMonth(date)+1)+seperator+this.getDay(date)+" "+this.buildHMS(date);
            }
        },
        /**
         * build previous month date of the day
         * @param date
         * @param seperator
         * @returns {string}
         */
        buildPreviousDate:function(date,seperator){
          if(!date){
              date = this.currentDate;
          }
            if(!seperator){
                seperator = "-";
            }
          if(this.getMonth(date)==1){
              return (this.getYear(date)-1)+seperator+"12"+seperator+this.getDay(date)+" "+this.buildHMS(date);
          }else {
              return this.getYear(date)+seperator+(this.getMonth(date)-1)+seperator+this.getDay(date)+" "+this.buildHMS(date);
          }
        },
        // buildPreviousDatePreDay:function (date) {
        //    var date = this.buildPreviousDate(date);
        //     return this.buildEntireDate(new Date(new Date(date).getTime()-1000*60*60*24));
        // },
        buildPrime:function () {
            return new Date(arguments);
        },
        /**
         * @param date
         * @returns {Date} next day of the date
         */
        nextDay:function (date) {
            if(!date){
                date = this.currentDate;
            }
            return new Date(new Date(date).getTime()+1000*60*60*24);
        },
        /**
         * @returns {Date} previous day of the date
         */
        preDay:function (date) {
            if(!date){
                date = this.currentDate;
            }
            return new Date(new Date(date).getTime()-1000*60*60*24);
        }
    }
}));