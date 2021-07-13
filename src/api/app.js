/**
 * 全局公共 API
 * 函数名称以 app 开头，如： appGetUserInfo
 */

import request from "@/utils/request";


// 用户登录接口
export const login = (data)=> request.post('/login', data)

// 获取用户信息
export const getLoginInfo = () => request.get('/employe/login/info')