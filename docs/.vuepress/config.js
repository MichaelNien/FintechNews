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
			['/2025/33/2025_33.md', '33'],
			['/2025/32/2025_32.md', '32'],
			['/2025/31/2025_31.md', '31'],
			['/2025/30/2025_30.md', '30'],
			['/2025/29/2025_29.md', '29'],
			['/2025/28/2025_28.md', '28'],
			['/2025/27/2025_27.md', '27'],
			['/2025/26/2025_26.md', '26'],
			
			['/2025/21/2025_21.md', '21'],
			['/2025/20/2025_20.md', '20'],
			['/2025/19/2025_19.md', '19'],
			['/2025/18/2025_18.md', '18'],
        ]
      },
    ],
    nav: [
    ]
  }
}