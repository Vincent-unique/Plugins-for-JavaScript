/**
 * Created by vincent on 2017/9/14 0014.
 */

/**
 * Structure for ECMAScript plugins' developing
 */

/** @deprecated
 * @description this structure is not best .
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

/**
 * @primary
 * Recommend to apply this components' structure.
 * It will be easy extended into other runtime context and add other components
 */
(function (context,componets) {
    !context ? (function () {
        throw "Not found the runtime context.";
    })():(
       function (cxt) {
           /**
            * Initilize for all components
            */
           componets(cxt);
       }
    )(context);
})(window||this||self||global,function (cxt) {
    Object.assign(cxt,{
        component1:function () {

        },
        component2:function () {

        },
        empty:null
    })
})