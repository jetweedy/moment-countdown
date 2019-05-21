let setCountdownTimer = (container, endtime, label) => {
	container.html();
	$(container).data({
		"endtime":endtime
		, "label": label
		, "interval": setInterval(()=> {
				let rightNow = moment();
				let endTime = moment(container.data("endtime"), "YYYY-MM-DD HH:mm:ss");
				let diff = endTime.diff(rightNow);
				let duration = moment.duration(diff, 'milliseconds');
				let timertext = duration.days() + "d "
					+ duration.hours() + "h " 
					+ duration.minutes() + "m " 
					+ duration.seconds() + "s "
					+ "until " + container.data("label")
					+ " (" + container.data("endtime") + ")"
					;
				container.text(timertext);
//				if (diff <= 0) { clearInterval(container.data("interval")); }
			}, 1000)
	});
}
