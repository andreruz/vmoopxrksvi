function reverse() {
  var text = document.getElementById("ciphertext").value;
  var outputArea = document.getElementById("outputtext");

  var reversedString = text.split("").reverse().join("");

  outputArea.value = reversedString;
}

function atbash(text){
/**
 * Converts the input text in to an atbash cipher using an alphabet [a-z] and [A-Z]. 
 * Numbers and all other characters are left as they are.
 * @param {string} text - text to be atbashed.
 * @return {string} - returns atbash converted string of the input.
 * @todo - Currently this function uses a pure a-z alphabet and uses the ASCII offset 
 * to find the atbash. Will not work with anything outside the a-z alphabet OR numbers.
 * @author - KJ <kulendra@gmail.com>
 */
	var i = 0;
	var character = "";
	var outputchar = "";
	var outputtext = "";
	for(i=0; i<text.length;i++){
		character = text.charCodeAt(i);
		if(character >= 65 && character <= 90){
			outputchar = fromCharCode(155-character);
		}
		elseif(character >= 97 && character <=122){
			outputchar = String.fromCharCode(219 - character);
		}
		else{
			outputchar = String.fromCharCode(character);
		}
		outputtext = outputtext+outputchar;
	}
	return outputtext;
}

function caesar(text,n,flag){
/**
 * Converts the input text using caesar cipher using an alphabet [a-z] and [A-Z]. 
 * @param {string} text - text to be encrypted/decrypted.
 * @param {integer} n - shift for caesar.
 * @param {integer} flag - 0: for encrypt 1: for decrypt
 * @return {string} - returns caesar encrypted/decrypted text.
 */
	var i = 0;
	var character = "";
	var outputchar = "";
	var outputtext = "";
	for(i=0; i<text.length;i++){
		character = text.charCodeAt(i);
		if(character >= 65 && character <= 90){
			outputchar = String.fromCharCode(65 + ((character+n)%90));
		}
		elseif(character >= 97 && character <=122){
			outputchar = String.fromCharCode(97 + ((character+n)%122));
		}
		else{
			outputchar = fromCharCode(character);
		}
		outputtext = outputtext+outputchar;
	}
	return outputtext;
}
