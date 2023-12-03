export const formatNumber = (number) => {
    const intl = Intl.NumberFormat("id-ID")
    return intl.format(number)
}