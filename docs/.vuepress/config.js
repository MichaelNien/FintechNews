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
		  ['/2025/18/2025_18.md', '18'],
          ['/2025/26/2025_26.md', '26'],
		  ['/2025/27/2025_27.md', '27'],
		  ['/2025/28/2025_28.md', '28'],
		  ['/2025/29/2025_29.md', '29'],
		  ['/2025/30/2025_30.md', '30'],
        ]
      },
    ],
    nav: [
    ]
  }
}