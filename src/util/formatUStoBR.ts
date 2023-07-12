
export function convertDate(dataAmericana: string) {
 
    let dateElementsList = dataAmericana.split('/');
    let dataBrasileira: string = dateElementsList[1] + '/' + dateElementsList[0] + '/' + dateElementsList[2];

    return dataBrasileira;
  }