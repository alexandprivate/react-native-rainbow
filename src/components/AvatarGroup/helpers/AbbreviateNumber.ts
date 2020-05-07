function abbreviateNumber(number: number | string): string {
    if (!number || number < 0 || typeof number !== 'string') {
        return '';
    }
    const SI_POSTFIXES = ['', 'k', 'M', 'G'];
    // eslint-disable-next-line no-bitwise
    const tier = (Math.log10(Math.abs(parseInt(number, 10))) / 3) | 0;
    if (tier === 0) {
        return `${number}`;
    }
    const postfix = SI_POSTFIXES[tier];

    const scale = Math.pow(10, tier * 3);
    const scaled = parseInt(number, 10) / scale;
    let formatted = `${scaled.toFixed(1)}`;
    if (/\.0$/.test(formatted)) {
        formatted = formatted.substr(0, formatted.length - 2);
    }
    return `${formatted}${postfix}`;
}

export default abbreviateNumber;
