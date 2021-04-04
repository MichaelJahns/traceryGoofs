const tracery = require("tracery-grammar");

const json = {
    // DEFINES VARIABLES
    "origin": ["#[location:#name#][terrain:#geography#][native:#animal#]story#"],
    "story": ["#location# #describe_empire# by #terrain# with native #native.s# and a wealth of #resource#. Centered in #location# is a #size# #construction#. #location# is governed by #government.a# and is known for #culture#"],
    // BRANCHES: use variables
    "describe_empire": ["of the #empire_name# #empire_type#"],
    "name": ["#settlement_name#", "#dated# #city_name#"],
    "construction": ["#state# #defense_structure# #surrounded_syn# by #surroundable_defense#",],
    // LEAVES: use no variables
    "animal": ["raven", "sparrow", "scorpion", "coyote", "eagle", "owl", "lizard", "zebra", "duck", "kitten"],
    "geography": ["coastal harbor", "calm, coastal bay", "large freshwater lake", "wide, navigable river", "river navigable by small craft", "mouth of a river", "river delta", "confluence of two rivers", "series of natural springs", "well traveled road"],
    "culture": ["architectural style", "architectural feats", "artists and poets", "inventive cuisine", "traditional cuisine", "suggestive dancing", "gladitorial games", "horse races", "scholars and sages", "music and/or dance", "romance", "jousting games", "superior soldiers", "street festivals", "religious fervor", "religious feasts", "traditional dress", "unusual dress", "theather scene", "wine and/or ale"],
    "resource": ["iron ore", "copper ore", "gold deposits", "silver deposits", "clay deposits", "granite deposits", "quartz deposits", "salt deposits", "peat deposits", "coal deposits", "hardwood", "barley and oats", "beans and corn", "nuts and olives", "rice", "wheat", "potatoes", "sugar cane", "tobacco", "cotton", "fruit trees", "cabbages", "cattle", "dairy cows", "sheep"],
    "government": ["the head of a noble family", "elected noble family", "council of distinguished nobles", "council of wealthy merchants", "a council of elected officials", "elected mayor", "benevolent sovereign", "wicked tyrant", "accomplished warlord", "cabal of witches and wizards", "leaders of religious order"],
    // name leaves
    "dated": ["old", "new"],
    "settlement_name": ["endevour", "last legs", "staple"],
    "city_name": ["york", "rayhill", "cydonia", "wellwinter"],
    "empire_name": ["Archaemedies", "Elantian", "Jolof", "Khazazar"],
    "empire_type": ["empire", "dynasty", "republic", "commonwealth", "emirate", "caliphate", "duchy"],
    // construction leaves
    "size": ["small", "medium", "large", "huge", "massive"],
    "state": ["overpopulated", "typical", "bustling", "abandoned", "ruined", "burnt down", "overgrown", "fortified", "garrisoned", "well-manned", "refurbished", "recently restored", "newly built"],
    "defense_structure": ["castle", "keep", "fort", "fortress", "watch tower", "tower", "citadel", "bunker"],
    "surrounded_syn": ["enclosed", "fenced", "hedged", "enveloped", "inundated", "blockaded", "bordered", "surrounded"],
    "surroundable_defense": ["a moat", "a curtain wall", "a trench", "magical runes", "artillery", "inactive golems", "aligned crystals"]
};

var grammer = tracery.createGrammar(json);

for (var i = 0; i < 10; i++) {
    var string = grammer.flatten('#origin#');
    console.log(string);
    console.log("\n")
}
