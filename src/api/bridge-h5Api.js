import dsBridge from "dsbridge"

/**
 * H5 Api
 * 提供给原生调用，带命名空间。异步方式调用
 */

dsBridge.registerAsyn("h5",{
    getH5Message: function(data, callback){
        return callback(data);
    }
})

