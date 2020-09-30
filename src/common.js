const dollarAmount = (int) => {
    return int.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
export default dollarAmount