import * as config from '../config';
import * as path from 'path';
import * as fs from 'fs';

export async function createReportFileFromTemplate() {
  let templatePath: string = config.APEXTemplateFile;
  let timestamp = Date.now();
  let reportPath: string = path.join(config.ReportsDir, 'importacao_statusinvest_' + timestamp + '.xlsx');

  fs.copyFile(templatePath, reportPath, (err) => {
    if (err) {
      console.error('Erro ao copiar o arquivo:', err);
      return;
    }
  });

  console.log("criado: " + reportPath);
  return reportPath;

}