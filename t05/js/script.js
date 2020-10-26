var str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";
var length = "Length:" + str1.length;
var charin = "Character number 2 is: " + str1.charAt(2);
var upper = "To uppercase " + str1.toUpperCase();
var cat = "- Catwomen";
var concat = "Concatenation in a phrase: " + str1 + cat;
var str2 = 'Batman: "I tried to save you"';
var bat = "[Batman Returns] " + str2;
var str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."'.replace(/catwoman/ig, ' ');
//var replace = str3.replace(/catwomen/, ' ')


alert(`${str1}
${length} 
${charin}
${upper}
${concat}
${bat}
${str3}`);