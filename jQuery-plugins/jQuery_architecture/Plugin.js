 * @constructor:    Plugin() = Plugin.prototype.init()
 * @constructor:   jQuery() = jQuery.fn.init()
 */
(function(context){
    context.Plugin = function(selector,context){
        console.info("welcome to Plugin!")
        return new Plugin.fn.init(selector,context);
    };
    context.$$ = context.Plugin;
    Plugin.fn = Plugin.prototype = {
        copyright:"vincent,201707",
        version:"0.1.1",
        constructor:Plugin,    //new Plugin(...) == Plugin(...)== Plugin.fn.init(....)
        init:function (selector,context,rootPlugin) {
            // TODO
            return this;
        },
        //....TODO
    };
    // Give the init function the Plugin prototype for later instantiation
    $$.fn.init.prototype = $$.prototype;
    //exend method
    Plugin.fn.extend = function () {
        if(arguments.length>1){
            for(var i=1;i<=arguments.length;i++) {
                $.extend(arguments[0], arguments[i])
            }
            return arguments[0];
        }else{
            return arguments;
        }
    };
    // write my own extend Function
    Plugin.fn.extend()

})(window||self||this||global);
