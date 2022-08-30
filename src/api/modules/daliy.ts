import service from '@/api/http';

const daliyApi = {
  //分页条件查询
  getData: (params: object) => service.post(`/mdTradingMorning/queryPageList`, params),
  //详情查询
  getDetail: (params: object) => service.post(`/detail`, params),
  //新增日报
  addDaliy: (params: object) => service.post(`/dailyDocument/htmlToWord`, params),
  //删除日报
  Remove: (params: object) => service.post(`/mdTradingMorning/deleteById`, params),
  //下载日报
  download: (params: Record<string, unknown>) => service.post(`/dailyDocument/downloadWord`, params),
  //增加内容
  addContent: (params: Record<string, unknown>) => service.post(`/dailyDocument/documentData`, params),
  //批量删除
  batchRemove: (params: Number[]) => service.post(`/mdTradingMorning/deleteByIds `, params),
};

export default daliyApi;
