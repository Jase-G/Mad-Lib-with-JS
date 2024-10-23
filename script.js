//Mad Lib
//lib 1
document.getElementById("mad-Lib1").addEventListener("click", Lib1);

function Lib1() {
  //input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let presentTenseVerb = document.getElementById("present-tense-verb").value;
  let noun = document.getElementById("noun").value;
  let madLib1 = `<span id="mad-Lib-Result-1">Mad Lib #1</span> "There are too many ${pluralNoun} on this ${adjective} airplane", I screamed. "Somebody has to ${presentTenseVerb} on the ${noun} to solve this problem.`;

  document.getElementById("lib1Results").innerHTML = madLib1;
}

document.getElementById("mad-Lib2").addEventListener("click", Lib2);

function Lib2() {
  let familyMember = document.getElementById("family-member").value;
  let pluralNoun = document.getElementById("plural-noun").value;
  let action = document.getElementById("action").value;
  let madLib2 = `<span id="mad-Lib-Result-2">Mad Lib #2</span> “My ${familyMember} loves to eat ${pluralNoun}
  and then ${action}.”`;

  document.getElementById("lib2Results").innerHTML = madLib2;
}
