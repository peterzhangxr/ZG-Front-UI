

exports.formatDay = (i) => {
    return i < 10 ? '0' + i : i;
}

//获取某个月的天数
exports.getDaysOfMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}


//获取排列数据
exports.getDataOfMonth = (year, month, day) =>{
    let days = this.getDaysOfMonth(year, month)
    let start = new Date([year, month, '01'].join('-')).getDay()

    let data = Array.from({length: 35}).map(x => {
        return {
            day: 0,
            disabled: false,
            today: false
        }
    })
    for (let i = 0; i < days; i++) {
        data[start + i] = {
            day: i + 1,
            disabled: false,
            today: (i + 1) == day,
            date: [year, month, formatDay(i + 1)].join('-')
        }
    }

    return data
}

exports.getLastMonth = (year, month) => {
    let lastMonth = month - 1
    let lastYear = year
    if (lastMonth <= 0) {
        lastMonth = 12
        lastYear -= 1
    }

    return [lastYear, lastMonth]
}

exports.getNextMonth = (year, month) => {
    let nextMonth = month + 1
    let nextYear = year
    if (nextMonth > 12) {
        nextMonth = 1
        nextYear += 1
    }

    return [nextYear, nextMonth]
}

exports.getDataOfLastMonth = (year, month) => {

}
