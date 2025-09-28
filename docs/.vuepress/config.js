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
			['/2025/2025_40.md', '40'],
			['/2025/2025_39.md', '39'],
			['/2025/2025_38.md', '38'],
			['/2025/2025_37.md', '37'],
			['/2025/2025_36.md', '36'],
			['/2025/2025_35.md', '35'],
			['/2025/2025_34.md', '34'],
			['/2025/2025_33.md', '33'],
			['/2025/2025_32.md', '32'],
			['/2025/2025_31.md', '31'],
			['/2025/2025_30.md', '30'],
			['/2025/2025_29.md', '29'],
			['/2025/2025_28.md', '28'],
			['/2025/2025_27.md', '27'],
			['/2025/2025_26.md', '26'],
			
			['/2025/2025_21.md', '21'],
			['/2025/2025_20.md', '20'],
			['/2025/2025_19.md', '19'],
			['/2025/2025_18.md', '18'],
        ]
      },
    ],
    nav: [
    ]
  }
}