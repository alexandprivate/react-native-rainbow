export default function abbreviateNumber(number: number | string) {
    if (!number || number < 0 || typeof number === 'string') {
        return '';
    }
    const SI_POSTFIXES = ['', 'k', 'M', 'G'];
    // eslint-disable-next-line no-bitwise
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0) return number;
    const postfix = SI_POSTFIXES[tier];
    // eslint-disable-next-line no-restricted-properties
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = `${scaled.toFixed(1)}`;
    if (/\.0$/.test(formatted)) {
        formatted = formatted.substr(0, formatted.length - 2);
    }
    return formatted + postfix;
}
