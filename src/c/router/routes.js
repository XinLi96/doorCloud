export default [{
    path: '/intention/index',
    component: require('@v/portal'),
    children: [
        {
            meta:{name:'leads'},
            name:'leads',
            path: '/intention/leads/:page*',
            component: require('@v/portal/leads/index'),
        },
        {
            meta:{name:'business'},
            name:'business',
            path: '/intention/business/:page*',
            component: require('@v/portal/business'),
        },
        {
            meta:{name:'creatLeads'},
            name:'creatLeads',
            path: '/intention/creatLeads/',
            component: require('@v/portal/leads/creatLeads'),
        },
        {
            meta:{name:'handleLeads'},
            name:'handleLeads',
            path: '/intention/handleLeads/',
            component: require('@v/portal/leads/handleLeads'),
        },
        {
            meta:{name:'leadsView'},
            name:'leadsView',
            path: '/intention/leadsView/:code',
            component: require('@v/portal/leads/leadsView'),
        },
        {
            meta:{name:'generateBusiness'},
            name:'generateBusiness',
            path: '/intention/generateBusiness/:data?',
            component: require('@v/portal/leads/generateBusiness'),
        },
        {
            meta:{name:'businessView'},
            name:'businessView',
            path: '/intention/businessView/:code',
            component: require('@v/portal/business/businessView'),
        },
         {
            meta:{name:'businessOrigin'},
            name:'businessOrigin',
            path: '/intention/businessOrigin/:code',
            component: require('@v/portal/business/businessOrigin'),
         },
        {
            meta:{name:'businessInfo'},
            path: '/businessInfo',
            component: require('@v/portal/business/businessInfo'),
        }
    ]
},{
	path: '/',
	redirect: '/intention/index'
},{
    path: '*',
    component: require('@v/portal/404')
}]
