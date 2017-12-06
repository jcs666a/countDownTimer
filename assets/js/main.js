// Part 1
var interval,
	countDown = {
	countDownDate : (d) => new Date(d).getTime(),
	container : 'countDown',
	setText : function(v){
		var content;
		if(v.key==='RUNING'){
			content = '<div>' +
					v.days +
				'<span>Days</span></div><div>' +
					v.hours +
				'<span>Hours</span></div><div>' +
					v.minutes +
				'<span>Minutes</span></div><div>' +
					v.seconds +
				'<span>Seconds</span></div>';
		} else {
			content = v.key;
		}
		document.getElementById(this.container).innerHTML = content;
	},
	start : function(d){
		return interval=setInterval(() => {
			var distance = this.countDownDate(d) - new Date().getTime();
			if(distance > 0){
				this.setText({
					key: 'RUNING',
					days : Math.floor(distance / (1000 * 60 * 60 * 24)),
					hours : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
					minutes : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
					seconds : Math.floor((distance % (1000 * 60)) / 1000),
				});
			} else{
				clearInterval(interval);
				this.setText({
					key: 'EXPIRED'
				});
			}
		}, 1000);
	},
	stop: () => clearInterval(interval)
};

countDown.start('Dec 15, 2017 00:00:00');
// to stop: countDown.stop();


// Part 2
function flip(){
	return Math.random() >= 0.5;
}

function randNumber(max) {
	var array = [];

	if(max > 1000000){
		array[0]='Error';
	} else {
		array = (() => {
			let arr = [];
			for(let x = 0; x <= max; x++) {
				if (flip()){
					arr.push(x);
				}
			}
			return arr;
		})();

		while (array.length > 1) {
			let prevArray = array;
			array = array.filter(() => {
				return flip();
			});
			if (array.length === 0)
				array = prevArray;
		}
	}
	return array[0] || 0;
}

randNumber(1000001);
