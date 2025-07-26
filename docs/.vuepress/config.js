module.exports = {
  title: 'FintechNews',
  description: 'FintechNews',
  base: '/FintechNews/',
  repo: 'https://github.com/MichaelNien/FintechNews',
  plugins: [
	'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '首頁'],
	  {
        title: '2025',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/2025/26/2025_26.md', '26'],
		  ['/2025/27/2025_27.md', '27'],
        ]
      },
    ],
    nav: [
    ]
  }
}