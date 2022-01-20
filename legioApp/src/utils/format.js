export function formatDate(date) {
    let newMonth = date.getMonth() + 1
    if (date.getDate() < 9) {
        if (newMonth <= 9)
            return `0${date.getDate()}-0${newMonth}-${date.getFullYear()}`;
        else {
            return `0${date.getDate()}-${newMonth}-${date.getFullYear()}`;
        }
    } else {
        if (newMonth <= 9)
            return `${date.getDate()}-0${newMonth}-${date.getFullYear()}`;
        else {
            return `${date.getDate()}-${newMonth}-${date.getFullYear()}`;
        }
    }
}

export function formatDateMonth(date) {
    let newMonth = date.getMonth() + 1
    if (date.getDate() < 9) {
        if (newMonth <= 9)
            return `0${date.getDate()}-0${newMonth}`;
        else {
            return `0${date.getDate()}-${newMonth}`;
        }
    } else {
        if (newMonth <= 9)
            return `${date.getDate()}-0${newMonth}`;
        else {
            return `${date.getDate()}-${newMonth}`;
        }
    }
}

export function formatGetMonth(date) {
    let newMonth = date.getMonth() + 1
    if (date.getDate() < 9) {
        if (newMonth <= 9)
            return `0${newMonth}`;
        else {
            return `${newMonth}`;
        }
    } else {
        if (newMonth <= 9)
            return `0${newMonth}`;
        else {
            return `${newMonth}`;
        }
    }
}
