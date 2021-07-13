import dsBridge from "dsbridge"

/**
 * 原生 Api
 */

/* 获取原生 IOS, Android 设备信息 */
export const getDeviceInfo = (data = {}) => {
    return new Promise(resolve => {
        dsBridge.call("app.getDeviceInfo", data, function (data) {
            resolve(JSON.stringify(data));
        })
    })
}