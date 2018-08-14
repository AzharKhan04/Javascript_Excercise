const dataset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

getMfStr = str => {
	let fs=''
	str.split('').forEach(alp => {
		dataset.indexOf(alp)== -1 ? fs=fs+alp : dataset.indexOf(alp)-6 < 1 ? fs = fs+dataset.charAt(dataset.indexOf(alp)-6+52) : fs=fs+dataset.charAt(dataset.indexOf(alp)-6)
	})
	return fs;
}
