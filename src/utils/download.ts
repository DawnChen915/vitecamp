import axios from 'axios'
const mimeMap = {
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    zip: 'application/zip',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    pdf: 'application/pdf;charset=utf-8',
    doc:'application/msword;charset=utf-8',
}

var baseURL = import.meta.env.VITE_API_BASEURL
export function downLoadZip(str: string, filename: string) {
    var url = baseURL + str
    axios({
        method: 'get',
        url: url,
        responseType: 'blob',
    }).then(res => {
        resolveBlob(res, mimeMap.zip, filename)
    })
}

export function downLoadExcel(param: any, str: string, filename: string) {

    //var url = 'api'+str

    axios({
        method: 'post',
        url: baseURL + str,
        data: param,
        responseType: 'blob',

        // headers: {'X-Ticket':ticket, 'ClientTag':'OUTNET_BROWSE','memberId':'2A0CC008CD7FA40083C8E44A9D1E2C2E'}
    }).then(res => {
        resolveBlob(res, mimeMap.xlsx, filename)
    }).catch(err => {
        console.log(err)
    })
}
export function downloadWord(param: any, str: string, filename: string) {
    axios({
        method: 'get',
        url: baseURL + str,
        params: param,
        responseType: 'blob',
        // headers: {'X-Ticket':ticket, 'ClientTag':'OUTNET_BROWSE','memberId':'2A0CC008CD7FA40083C8E44A9D1E2C2E'}
    }).then(res => {
        resolveBlob(res, mimeMap.doc, filename)
    }).catch(err => {
        console.log(err)
    })
}

/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
export function resolveBlob(res: any, mimeType: string, filename: string) {
    const aLink = document.createElement('a')
    var blob = new Blob([res.data], { type: mimeType })
    // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
    var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
    var contentDisposition = decodeURI(res.headers['content-disposition'])
    var result = patt.exec(contentDisposition)
    // var fileName = result[1]
    var fileName = filename
    fileName = fileName.replace(/\"/g, '')
    aLink.href = URL.createObjectURL(blob)
    aLink.setAttribute('download', fileName) // 设置下载文件名称
    document.body.appendChild(aLink)
    aLink.click()
    document.body.removeChild(aLink);
}
