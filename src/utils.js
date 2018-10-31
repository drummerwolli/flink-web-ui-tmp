
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
