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
