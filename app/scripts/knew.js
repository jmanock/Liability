var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1p9t8s8-WC5F6pnxJs3VF0RH5s9gGzFFN6kzL2tjFBBI/pubhtml?gid=0&single=true';

function init(){
  Tabletop.init({
    key:publicSpreadsheetUrl,
    callback:showInfo,
    simpleSheet:true
  });
}

function showInfo(data, tabletop){
  console.log(data);
}
window.addEventListener('DOMContentLoaded', init);
