export const convertBytesToHumanReadable = (value) => {
	if (value < 1024) {
		return `${value.toFixed(2)} bytes`
	}
	let kb = value / 1024;
	if (kb < 1024) {
		return `${kb.toFixed(2)} kb`
	}
	let mb = kb / 1024;
	if (mb < 1024) {
		return `${mb.toFixed(2)} MB`
	}
	let gb = mb / 1024;
	if (gb < 1024) {
		return `${gb.toFixed(2)} GB`
	}
	let tb = gb / 1024;
	return `${tb.toFixed(2)} TB`
};

export const convertMilliSecondsToHumanReadable = (value) => {
	const seconds = (value / 1000).toFixed(0)
	if (seconds < 60) {
		return `${seconds}s`
	} else {
		const minutes = seconds / 60;
		if (minutes < 60) {
			const leftOverSeconds = Math.floor(seconds - Math.floor(minutes) * 60)
			return `${ Math.floor(minutes)}m ${leftOverSeconds}s`
		} else {
			const hours = minutes / 60;
			if (hours < 24) {
				const leftOverMinutes = Math.floor(minutes -  Math.floor(hours) * 60)
				return `${Math.floor(hours)}h ${leftOverMinutes}m`
			} else {
				const days = hours / 24;
				const leftOverHours = Math.floor(hours - Math.floor(days) * 24)
				return `${Math.floor(days)}d ${leftOverHours}h`
			}
		}
	}

};

export const getBackgroundColorFromStatus = (status) => {
	switch (status) {
		case 'FINISHED':
			return 'success'
		case 'CANCELED':
			return 'secondary'
		case 'FAILED':
			return 'danger'
		default:
			return 'primary'
	}

}
