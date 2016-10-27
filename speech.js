if ('speechSynthesis' in window) {
  //window.alert("yes");
}else{
  //window.alert("No TTS Support");
}


var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
//msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = 'Hello World';
msg.lang = 'en-US';

msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

//speechSynthesis.speak(msg);

function list_voices(){
	var i=0;
	while (voices[i]){
		document.write('<option value="' + voices[i].voiceURI + '">' + voices[i].name + ' - ' +voices[i].lang + '</option>' );
		i++;
	}
}

function speakText(mesg){
  msg.text=mesg;
	speechSynthesis.speak(msg);	
}

function setVoice(tform){
	msg.pitch  = tform[3].value;
	msg.rate   = tform[4].value;
	msg.volume = tform[5].value;
	msg.voice  = voices[tform[1].selectedIndex];
	msg.voiceURI=tform[1][tform[1].selectedIndex].value;
	msg.text=tform[0].value;
	speechSynthesis.speak(msg);	
}

