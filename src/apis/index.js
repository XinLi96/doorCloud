/**
 * 获取公共枚举信息
 * 请求方式：GET
 * fileds：
 */
export const Common = {
	url: 'dictionary/common',
	method: 'GET',
};
/**
 * 获取公共枚举信息测试接口
 * 请求方式：GET
 * fileds：
 */
export const regions = {
	url: 'dictionary/regions',
	method: 'GET',
};
/**
 * 根据条件分页查询商机
 * 请求方式：GET
 * fileds：
 * currentPage: 			//当前页码
 * pageSize:				//每页条数，不传默认值未10
 * beginTime: 				//开始时间
 * endTime:				//结束时间
 * status: 				//商机状态
 */
export const businessList = {
	url: 'business/list',
	method: 'GET',
};
/**
 * 获取商机详细信息接口
 * 请求方式：GET
 * fileds：
 * busiOppoCode: 			//商机单号
 */
export const businessDetail = {
	url: 'business/detail',
	method: 'GET',
};
/**
 * 商机回访提交接口
 * 请求方式：GET
 * fileds：
 * busiOppoId: 			//商机id
 * visitContentCode: 	//回访内容code
 * visitRemark: 		//其他（备注
 */
export const businessVisit = {
	url: 'businessVisit/add',
	method: 'GET',
};



/**
 * 根据条件分页查询线索
 * 请求方式：GET
 * fileds：
 * currentPage: 			//当前页码
 * pageSize:				//每页条数，不传默认值未10
 * timeType: 				//时间类型
 * startDate: 				//开始时间
 * endDate: 				//结束时间
 * clueStatus: 				//线索状态
 * handleResult: 			//处理结果
 * source: 				//来源
 */
export const clueList = {
	url: 'clue/list',
	method: 'GET',
};
/**
 * 查询线索详情
 * 请求方式：GET
 * fileds：
 * clueId: 				//线索ID
 */
export const findClueDetail = {
	url: 'clue/findClueDetail',
	method: 'GET',

};

/**
 * 创建线索
 * 请求方式：GET
 * fileds：
 * clueId: 				//线索ID
 */
export const createClue = {
	url: 'clue/createClue',
	method: 'POST',
};

/**
 * 处理线索
 * 请求方式：GET
 * fileds：
 * clueId: 				//线索ID
 */
export const hanleClue = {
	url: 'clue/handleClue',
	method: 'POST',
};

/**
 * 分配线索
 * 请求方式：GET
 * fileds：
 * clueIds: 			//线索ID
 * employeeId: 			//被分配员工ID
 */

export const assignClue = {
	url: 'clue/assignClue',
	method: 'GET',
};


/**
 * 部门信息
 * 请求方式：GET
 * fileds：
 */
export const getDeptEmp = {
	url: 'clue/getDeptEmp',
	method: 'GET'
};
/**
 * 获取线索模块的按钮权限
 * 请求方式：GET
 * fileds：
 */
export const getCluePrivilege = {
	url: 'clue/getCluePrivilege',
	method: 'GET'
};
/**
 * 根据字典父ID 查询子元素接口 二级产业
 * 请求方式：GET
 * fileds：
 */
export const secondIndusty = {
	url: 'dictionary/children',
	method: 'GET',
};

/**
 * 生成商机接口
 * 请求方式：POST
 * fileds：
 */
export const addBusiness = {
	url: 'business/add',
	method: 'POST',
};

/**
 * 根据客户名称模糊查询客户
 * 请求方式：POST
 * fileds：custName 客户名称（必填）
 */
export const solrlist = {
	url: 'business/solrlist',
	method: 'GET'
};
/**
 * get方法获取首页个人信息
 * */
export const getIndexInfo = {
	url: 'api-platform/home/member/getIndexMemberInfo',
	method: 'GET'
}

