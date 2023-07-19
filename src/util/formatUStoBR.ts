

export function convertDate(americanDate: string) {
    let dateElementsList = americanDate.split('/');
    let brazilianDate: string = dateElementsList[1] + '/' + dateElementsList[0] + '/' + dateElementsList[2];

    return brazilianDate;
  }

  export function convertNumber(americanNumber: string) {
    let brazilianNumber : string = americanNumber.replace('.',',');
    return parseFloat(brazilianNumber);
  }
