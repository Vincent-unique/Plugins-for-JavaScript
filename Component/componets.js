/**
 * Created by vincent on 2017/9/14 0014.
 */

/**
 * Structure for ECMAScript plugins' developing
 */
(function(context,components){
    !context ? (function () {
        throw "Not found the runtime context.";
    })():(
        function (coms) {
            if(coms&&coms.length>0){
                coms.forEach(function (item, index, array) {
                    Object.assign(context,item);
                })
            }
        }
    )(components);

})(window||self||this||global,(function(){

    return [
        {
            empty : null,
            current:function () {
               return new Date();
            }
        },
        {
            sorry:function () {
                console.log("I am sorry.");
            }
        }
    ]
})())