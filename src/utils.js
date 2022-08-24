export const dateBuilder = () => {
    let d = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}

export const cities = [
    'New York',
    'Rio de Janeiro',
    'Tokio',
    'Bariloche',
    'Madrid'
]

export const formatDate = (date) => {
    const dateArr = date.split('-')
    return `${dateArr[2]}/${dateArr[1]}`
}