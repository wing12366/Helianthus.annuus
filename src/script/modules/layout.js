annuus.addModules({

'3aad9218-46e4-4512-92b8-07d5f5f3626e': {
	title: '縮短Bookmark列',
	pages: { on: [all] },
	tasks: {
		'475b4b70': {
			run_at: 'document_start',
			css: '.hkg_bottombar { width: auto; padding-right: 10px; }'
		}
	}
},

'5df7826a-42d3-400d-ba75-adce23c2c898': {
	title: '優化熱門關鍵字位置',
	pages: { on: [all] },
	tasks: {
		'475b4b70': {
			run_at: 'document_start',
			css: '#st + div { padding-right: 0 !important; }'
		},

		'cbe665ce': {
			condition: {
				page: search | tags
			},
			run_at: 'document_start',
			css: '.HitSearchText { float: right; }'
		}
	}
},

'0f9ddba8-1b0e-4dcd-9352-89b853d41f90': {
	title: '設定回覆最小闊度',
	pages: { on: [view] },
	tasks: {
		'd7d69a41-539a-4545-897a-6d6c3511fefc': {
			service: 'lock',
			run_at: 'document_start',
			css: '.repliers_right blockquote { min-width: 200px; }'
		}
	}
}

});
