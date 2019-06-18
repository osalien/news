const readFileList = require('../../scripts/build.js');

module.exports = {
  title: "每日分享",
  description: "每日分享，会以IT技术体系为主要分享课题。内容会以：文章、工具、新闻、视频几大板块作为主要分类。",
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.ico' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: '每日分享' }]
  ],
  ga: 'UA-140784360-1',
  plugins: [
    ['@vuepress/google-analytics'],
    ['vuepress-plugin-rss-support', {
      site_url: 'https://osalien.github.io',
      filter: page => /^\/201.+/.test(page.path),
      copyright: '2019每日分享',
      count: 60
    }],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'osalien',
      repo: 'osalien.github.io',
      clientId: '587ed5cb99106cf20748',
      clientSecret: '0fd7334acacfa5b6dceb417eb89fc0b645baa882',
    }],
  ],
  base: '/',
  themeConfig: {
    repo: "osalien/osalien.github.io",
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    algolia: {
      apiKey: '6c644295dc499cc2c2e6cb96b3001ecf',
      indexName: 'news'
    },
    nav: [
      { text: '留言', link: '/other/talk' },
    ],
    sidebar: [
      ["/", "1. 分享"],
      {
        title: "2019年06月",
        collapsable: false,
        children: readFileList('2019', '06')
      },
      {
        title: "2019年05月",
        collapsable: false,
        children: readFileList('2019', '05')
      },
      {
        title: "2019年04月",
        collapsable: true,
        children: readFileList('2019', '04')
      }, {
        title: "2019年03月",
        collapsable: true,
        children: readFileList('2019', '03')
      }, {
        title: "2019年02月",
        collapsable: true,
        children: readFileList('2019', '02')
      }, {
        title: "2019年01月",
        collapsable: true,
        children: readFileList('2019', '01')
      }, {
        title: "2018年12月",
        collapsable: true,
        children: readFileList('2018', '12')
      }, {
        title: "2018年11月",
        collapsable: true,
        children: readFileList('2018', '11')
      }, {
        title: "2018年10月",
        collapsable: true,
        children: readFileList('2018', '10')
      }, {
        title: "2018年09月",
        collapsable: true,
        children: readFileList('2018', '09')
      }, {
        title: "2018年08月",
        collapsable: true,
        children: readFileList('2018', '08')
      }
    ],
  }
};
