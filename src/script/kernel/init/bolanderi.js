(function()
{

function execGroups(eventType)
{
	for(var groupNo = bolanderi.get('RUN_AT')[eventType], until = groupNo + $.len(bolanderi.get('PRIORITY')) - 1; groupNo <= until; ++groupNo) {
		var group = bolanderi.__jobGroups[groupNo];

		$(bolanderi).trigger('groupstart', [groupNo]);

		for(var i=0; i<group.length; ++i) {
			var job = group[i];

			if((job.__task.frequency || 'once') === 'once') {
				group.splice(i--, 1);
			}

			$(bolanderi).trigger('jobstart', [job, groupNo]);

			if(job.__task.css) {
				$.rules(job.__task.css);
			}

			if(job.__task.js) {
				$.notify('debug', 'executing {0}', job.__task.id);

				try {
					bolanderi.__api[job.__api].js(job);
				}
				catch(e) {
					$.debug('Error occurred: ' + job.__module.title, 'error:', e, 'job:', job, 'context:', job.context());
				}
			}

			$(bolanderi).trigger('jobend', [job, groupNo]);
		}

		$(bolanderi).trigger('groupend', [groupNo]);
	}
}

$.fn.bolanderi = function()
{
	bolanderi.__context = $(this[0]);

	$(bolanderi).trigger('document_start');

	execGroups('document_start');

	$(bolanderi).one('document_end', function()
	{
		execGroups('document_end');

		$(bolanderi).one('window_loaded', function()
		{
			execGroups('window_loaded');

			$.notify('info', 'bolanderi() completed successfully.');
		});

		if(bolanderi.get('WINDOW_IS_LOADED')) {
			$(bolanderi).trigger('window_loaded');
		}
	});

	if(bolanderi.get('DOM_IS_READY')) {
		$(bolanderi).trigger('document_end');
	}

	return this;
};

$(bolanderi).one('storageready', function()
{
	$.timeout('checkDOM', function()
	{
		if($.isReady || $('#Side_GoogleAd').length) {
			bolanderi.get('DOM_IS_READY', true);
			$(bolanderi).trigger('document_end');
		}
		else {
			$.timeout('checkDOM', 50);
		}
	});
});

$(window).one('load', function()
{
	setTimeout(function()
	{
		bolanderi.get('WINDOW_IS_LOADED', true);
		if(bolanderi.get('DOM_IS_READY')) {
			$(bolanderi).trigger('window_loaded');
		}
	}, 10);
});

})();