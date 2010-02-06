var
once = 1,
always = 2,

all = 65535,
normal = 65534,
error = 1,
main = 2,
topics = 4,
search = 8,
tags = 16,
view = 32,
profilepage = 64,
sendpm = 128,
post = 256,
login = 512,
giftpage = 1024,
blog = 2048,
message = 4096,

kernel = 1,
style = 2,
layout = 3,
modify = 4,
addon = 5,
others = 6,
ajax = 7,
remake = 8;

an.pages = {
	65535: { action: null, desc: '所有頁' },
	65534: { action: null, desc: '所有正常頁' },
	1: { action: 'error', desc: '所有錯誤頁' },
	2: { action: 'default', desc: '主論壇頁' },
	4: { action: 'topics', desc: '標題頁' },
	8: { action: 'search',  desc: '搜尋頁' },
	16: { action: 'tags', desc: '標籤搜尋頁' },
	32: { action: 'view', desc: '帖子頁' },
	64: { action: 'profilepage', desc: '用戶資料頁' },
	128: { action: 'sendpm', desc: '私人訊息發送頁' },
	256: { action: 'post', desc: '發表/回覆頁' },
	512: { action: 'login', desc: '登入頁' },
	1024: { action: 'giftpage', desc: '人氣頁' },
	2048: { action: 'blog', desc: '網誌頁' },
	4096: { action: 'message', desc: '系統信息頁' }
};

an.types = {
	1: '核心設定',
	2: '樣式設定',
	3: '佈局設定',
	4: '修正修改',
	5: '加入物件',
	6: '其他功能',
	7: 'Ajax化',
	8: '元件重造'
};