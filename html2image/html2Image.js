/**
 * @author: liwei
 * @Date:20170706
 * build for get html canvas data
 * Dependent on html2canvas.js @https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.js
 */

"use strict";
(function(methods){
    var context = null;
    context = window || this || self || global,context.html2ImageData.prototype = methods;
    context.html2ImageData = function () {
        if(typeof method=="string" && methods[method]){
            return methods[method].apply(this,Array.prototype.slice(arguments,1)) ;            //this==html2ImageData,     vs jQuery Object
        }else if (typeof method == "object"){
            return methods._init.apply(this,arguments);
        }else {
            console.warn('Method "'+method+'" does not exist in html2Image !');
        }
    }
})({
    _init: function () {
            if (arguments['method'] && methods[arguments['method']]) {
                return methods[arguments['method']].apply(this, arguments['parameters']);
            }
        },
    element2Image: function (element, imageFormat, callback, context) {
        var imageData;
            html2canvas(element, {
                async: false,
                onrendered: function (canvas) {
                    if (element) {
                        console.info("image format:" + imageFormat);
                        switch (imageFormat) {
                            case "png":
                            case "PNG":
                                imageData = canvas.toDataURL("image/png");
                                break;
                            case "jpeg":
                            case "JPEG":
                            case "jpg":
                            default:
                                imageData = canvas.toDataURL("image/jpeg");
                                break;
                        }
                        if (imageData) {
                            html2ImageData.handle(imageData);
                            callback(imageData);
                        } else {
                            console.log("the target image data is null!");
                        }
                    }
                }
            });
            return this;
        },
        handle: function () {
            if (arguments) {
                for (var image in arguments) {
                    if (typeof image == "string") {
                        image.replace(/^data:image\/(png|jpg|jpeg|PNG|JPEG);base64,/, "");
                    }
                }
                return arguments;
            }
        }
    }

);

// var uploadImage = function(apiUrl , imageUrl){
//     var ajax = new XMLHttpRequest();
//     ajax.open("POST",apiUrl,false);
//     ajax.onreadystatechange = function() {
//         console.log(ajax.responseText);
//     }
//     ajax.setRequestHeader('Content-Type', 'application/upload');
//     ajax.send("imageData="+canvasData);
// }();

(function(context,$){
    !$?console.warn("jQuery is required!"):!function () {
        $.extend(context,{
            FileService : (function(){
                return {
                    upload: function (imageData,url) {
                        var data = {
                          imageData:imageData
                        };
                        $.ajax({
                            url:url,
                            data:data,
                            success:function(res){
                                //TODO
                            }
                        });
                    },
                    imageDataHandel:function(imageData){
                        imageData.replace(/^data:image\/(png|jpg|jpeg|PNG|JPEG);base64,/,"");
                        return imageData;
                    },
                }
            })()
        });

    }();

})(window.html2ImageData,jQuery);



