const txQuery = location.search
    .substring(1)
    .split('&')
    .map((val) => ({ name: val.split('=')[0], value: val.split('=')[1] }))
    .find((val) => val.name === 'tx')

if (txQuery !== undefined) {
    const trainNo = txQuery.value.split('-')[2]
    const title = document.querySelector('.inner,.ek-onetrain-title-inner')
    const titleSplitWithBr = title?.innerHTML?.split('<br>')

    if (title !== null && titleSplitWithBr !== undefined) {
        title.innerHTML = `${titleSplitWithBr[0]}<br>${trainNo} ${titleSplitWithBr[1]}`
    }
}
