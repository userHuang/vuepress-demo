module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // theme: '@vuepress/theme-blog',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: 'https://baidu.com' },
      { text: 'External', link: 'https://google.com' },
    ],

    sidebar: [
      // '/',
      // '/foo/one'
      {
        title: 'Group',   // 必要的
        path: '/qoo/hello',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/qoo/hello', '/qoo/test'
        ]
      },
      // {
      //   title: 'Group 1',   // 必要的
      //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   collapsable: false, // 可选的, 默认值是 true,
      //   sidebarDepth: 1,    // 可选的, 默认值是 1
      //   children: [
      //     '/'
      //   ]
      // }
    ]
  }
}
