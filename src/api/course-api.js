/**
 * 智慧课件 API
 */

import request from "@/utils/request";


// 查询智慧课件列表
export const queryCourse = (data)=> request.post('/course/page', data)