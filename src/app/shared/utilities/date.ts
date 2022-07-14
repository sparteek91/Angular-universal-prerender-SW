function pad(d: any) {
    return (d < 10) ? '0' + d : d;
}

export function dateFormatter(date: Date) {
    date = new Date(date);
    const dformat = [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join('-');
    return dformat;
}