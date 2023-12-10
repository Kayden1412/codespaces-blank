export const formatNumber = (number = 1000) => {
    const intl = Intl.NumberFormat("en-US", {
        notation: 'compact', 
        compactDisplay: 'long'
    })
    return intl.format(number)
}


export const  getRandomInt = (min = 1, max = 10) =>  {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
