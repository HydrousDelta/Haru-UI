const path = require('path')

module.exports = {
  base: "/Haru-UI/",
  title: "Haru UI",
  port: 9090,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/register-components',
      {
        componentsDir: [
          '.vuepress/components',
          '.vuepress/components/coor',
          '.vuepress/components/container',
          '.vuepress/components/struffings'
        ]
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      ['/start/', '起步'],
      ['/main/', '0. 全局'],
      ['/coordinater/', '1. 坐标器'],
      ['/containers/', '2. 容器'],
      ['/stuffings/', '3. 填充物'],
      ['/materials/', '4. 物料'],
      ['/others/', '5. 其它'],
      ['/epologue/', '后记']
      
    ],
    logo: './logo.png',
    repo: 'HydrousDelta/Haru-UI',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我完善此文档!',

    lastUpdated: 'Last Updated',
    searchPlaceholder: 'Search...',
    smoothScroll: true
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
    config.resolve.alias
      .set('@lib', path.resolve('lib'))
      .set('@mixins', path.resolve('lib/mixins'))
      .set('@containers', path.resolve('lib/components/ha-containers'))
      .set('@stuffings', path.resolve('lib/components/ha-stuffings'))
      .set('@coordinater', path.resolve('lib/coordinater'))
      .set('@materials', path.resolve('lib/materials'))
      .set('@others', path.resolve('lib/others'))
      .set('@utils', path.resolve('lib/utils'))
      .set('@scss', path.resolve('lib/scss'))
      .set('@icons', path.resolve('lib/icons'))
      .set('@imgs', path.resolve('lib/statics/imgs'))
  }
  
}