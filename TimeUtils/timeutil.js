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
        buildYMD:function(date){
          if(!date){
              date = this.currentDate;
          }
          return this.getYear(date)+"-"+this.getMonth(date)+"-"+this.getDay(date);
        },
        buildHMS:function (date) {
            if(!date){
                date = this.currentDate;
            }
            return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        },
        buildEntireDate:function (date) {
            if(!date){
                date = this.currentDate;
            }
            return this.getYear(date)+"-"+this.getMonth(date)+"-"+this.getDay(date)+" "+this.buildHMS(date);
        },
        buidNextDate:function (date) {
            if(!date){
                date = this.currentDate;
            }
            if(this.getMonth(date)==12){
                return (this.getYear(date)+1)+"-"+this.getMonth(date)+"-"+this.getDay(date)+" "+this.buildHMS(date);
            }else {
                return this.getYear(date)+"-"+(this.getMonth(date)+1)+"-"+this.getDay(date)+" "+this.buildHMS(date);
            }
        },
        buildPreviousDate:function(date){
          if(!date){
              date = this.currentDate;
          }
          if(this.getMonth(date)==1){
              return (this.getYear(date)-1)+"-"+"12"+"-"+this.getDay(date)+" "+this.buildHMS(date);
          }else {
              return this.getYear(date)+"-"+(this.getMonth(date)-1)+"-"+this.getDay(date)+" "+this.buildHMS(date);
          }
        },
        buildPrime:function () {
            return new Date(arguments);
        }
    }
}));