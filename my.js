function onJSONChange(event) {
    var reader = new FileReader();
    reader.onload = onJSONReaderLoad;
    reader.readAsText(event.target.files[0]);
}
function onJSONReaderLoad(event){
    var obj = JSON.parse(event.target.result);
    document.getElementById(obj.id).value = event.target.result;
}
function onXMLChange(event) {
    var reader = new FileReader();
    reader.onload = onXMLReaderLoad;
    reader.readAsText(event.target.files[0]);
}
function onXMLReaderLoad(event){
    parser = new DOMParser();
    var obj = parser.parseFromString(event.target.result, "text/xml");
    document.getElementById(obj.getElementsByTagName('id')[0].innerHTML).value = event.target.result;
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
}
function checkAnswer(rightAnswer, answerObj) {
    if (JSON.stringify(rightAnswer)==JSON.stringify(getSelectValues(answerObj))) {
        answerObj.style.backgroundColor = 'green';
    } else {
        answerObj.style.backgroundColor = 'red';
    }
}
