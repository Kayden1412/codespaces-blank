export const formatNumber = (number = 1000) => {
    const intl = Intl.NumberFormat("id-ID")
    return intl.format(number)
}