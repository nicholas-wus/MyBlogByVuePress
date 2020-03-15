module.exports = {
    base: '/MyBlogByVuePress/',
    title: '程序人生-Nicholas',
    description: 'Coding Life',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}]
    ],
    markdown: {
        lineNumbers: true //代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/xxxxxxx/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        //启用页面滚动效果
        smoothScroll: true,
        //最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        // logo: 'hero.png',//导航栏整体的图标
        // displayAllHeaders: true, // 默认值：false
        nav: [
            // {text: 'Home', link: '/'},
            {text: '万家之言', link: '/books/productmanagement/npdp/《产品经理认证NPDP知识体系指南》'},
            {text: 'Coding', link: '/coding/computerbase/uml/umlbase'},
            {
                text: '在线文档',
                // ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Java开发文档', items: [
                        {
                            text: 'Json编辑器',
                            link: 'https://www.bejson.com/jsoneditoronline',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                    ]},
                    {
                        text: '其他在线文档', items: [
                        {text: 'Markdown语法文档', link: 'https://www.jianshu.com/p/ebe52d2d468f', target: "_blank", rel: "noopener noreferrer"},
                    ] }
                ]
            },
            {
                text: '在线工具',
                // ariaLabel: 'Language Menu',
                items: [
                    {
                        text: '常用开发工具', items: [
                        {
                            text: 'Json编辑器',
                            link: 'https://www.bejson.com/jsoneditoronline',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'Unix时间戳',
                            link: 'http://tool.chinaz.com/Tools/unixtime.aspx',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {text: 'Cron表达式', link: 'http://cron.qqe2.com', target: "_blank", rel: "noopener noreferrer"},
                        {
                            text: '正则表达式',
                            link: 'http://tool.chinaz.com/regex/?qq-pf-to=pcqq.c2c',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'YAML <-> Properties ',
                            link: 'https://www.toyaml.com/index.html',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'BASE64',
                            link: 'http://tool.chinaz.com/tools/base64.aspx',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'MD5',
                            link: 'http://tool.chinaz.com/tools/md5.aspx',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {text: '二维码生成', link: 'https://cli.im', target: "_blank", rel: "noopener noreferrer"}
                    ]},
                    {
                        text: '其他在线工具', items: [
                        {text: 'Markdown在线编辑器', link: 'https://www.mdeditor.com/', target: "_blank", rel: "noopener noreferrer"},
                    ] }
                ]
            }
        ],
        sidebar: {
            '/books/': [
                {
                    title: '产品',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: 'NPDP',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/books/productmanagement/npdp/《产品经理认证NPDP知识体系指南》',
                                '/books/productmanagement/npdp/希赛2019年11月NPDP直播视频课程',
                                '/books/productmanagement/npdp/NPDP考试培训讲义',
                            ]
                        },
                    ]
                },
                {
                    title: '项目管理',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: 'PMP',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/books/projectmanagement/pmp/one',
                                '/books/projectmanagement/pmp/two',
                                '/books/projectmanagement/pmp/three'
                            ]
                        },
                       {
                            title: 'ACP',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/books/projectmanagement/acp/《敏捷项目管理与PMI-ACP应试指南》',
                                '/books/projectmanagement/acp/two',
                                '/books/projectmanagement/acp/three'
                            ]
                        }
                    ]
                },
                {
                    title: '随笔感悟',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: '2020年',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/books/essay/2020/20200307',
                            ]
                        },
                    ]
                },
            ],
            '/coding/': [
                {
                    title: '计算机基础',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: 'UML',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/coding/computerbase/uml/umlbase',
                                '/coding/computerbase/uml/extends',
                                '/coding/computerbase/uml/implement',
                                '/coding/computerbase/uml/association',
                                '/coding/computerbase/uml/aggregation',
                                '/coding/computerbase/uml/composition',
                                '/coding/computerbase/uml/dependency',
                            ]
                        },
                    ]
                },
                {
                    title: '编程思想',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: '软件架构设计原则',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/coding/thinkingincoding/designrules/ocp',
                                '/coding/thinkingincoding/designrules/dip',
                                '/coding/thinkingincoding/designrules/srp',
                                '/coding/thinkingincoding/designrules/isp',
                                '/coding/thinkingincoding/designrules/lod',
                                '/coding/thinkingincoding/designrules/lsp',
                                '/coding/thinkingincoding/designrules/crp',
                             ]
                        },
                    ]
                },
                {
                    title: '架构设计',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: '三层架构+MVC',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/coding/architecturdesign/threetiermvc/aboutthreetier',
                                '/coding/architecturdesign/threetiermvc/aboutmvc',
                            ]
                        },
                    ]
                },
                {
                    title: 'Java',   // 必要的
                    // sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: 'Java生态',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/coding/java/javaecology/javaecology2019',
                            ]
                        },
                        {
                            title: 'Java核心基础',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/coding/java/javacore/《On Java 8》',
                            ]
                        },
                        {
                            title: '开发工具_Maven',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/coding/java/t_maven/briefintroduction',
                                '/coding/java/t_maven/snapshot',
                            ]
                        },
                    ]
                },
            ],
        }
    }
}
