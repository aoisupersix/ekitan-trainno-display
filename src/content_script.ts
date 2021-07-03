import $ from 'jquery'

const txQuery = location.search
    .substring(1)
    .split('&')
    .map((val) => ({ name: val.split('=')[0], value: val.split('=')[1] }))
    .find((val) => val.name === 'tx')

if (txQuery !== undefined) {
    const trainNo = txQuery.value.split('-')[2]
    const titleSplitWithBr = $('.inner,.ek-onetrain-title-inner', document)
        .html()
        .split('<br>')
    $('.inner,.ek-onetrain-title-inner', document).html(
        `${titleSplitWithBr[0]}<br>${trainNo} ${titleSplitWithBr[1]}`
    )
}
