let interval = setInterval(replaceMissingImages, 500);


function replaceMissingImages() {
    if(window.location.href.includes("pokepast")){
        let images = document.querySelectorAll(
            "img[class='img-pokemon']"
        );



        images.forEach((image) => {
            let parent = image.parentElement;

            let preNode = parent.nextElementSibling;
            let text = preNode.innerHTML;

            let isShiny = false;
            if(text.includes("Shiny")){
                isShiny = true
            }


            let originalName = ""
            let name = ""
            if(text.includes("(")) {
                if(text[0] == '<'){
                    originalName = text.substring(text.indexOf(">") + 1, text.indexOf("</"));
                    name = originalName.replace(" ", "-").toLowerCase();
                }
                else{
                    originalName = text.substring(0, text.indexOf("(") - 1);
                    name = originalName.replace(" ", "-").toLowerCase();
                }
            }
            else {
                if(text[0] == '<'){
                    originalName = text.substring(text.indexOf(">") + 1, text.indexOf("</"));
                    name = originalName.replace(" ", "-").toLowerCase();
                }
                else{
                    originalName = text.substring(0, text.indexOf("@") - 1);
                    name = originalName.replace(" ", "-").toLowerCase();
                }
            }

            let id = pokeJson[name].id

            if(text.includes("gender-f") && pokeJson[name].has_female == true) {
              //Female
                image.setAttribute("src", "https://raw.githubusercontent.com/chrisdentremont/pokemon-home-images/refs/heads/main/home/female/" + id + ".png");
            }
            else if(!isShiny){
              //Normal
                image.setAttribute("src", "https://raw.githubusercontent.com/chrisdentremont/pokemon-home-images/refs/heads/main/home/" + id + ".png");
            }
            else{
              //Shiny
                image.setAttribute("src", "https://raw.githubusercontent.com/chrisdentremont/pokemon-home-images/refs/heads/main/home/shiny/" + id + ".png");
            }

            if(text[0] != '<'){
                preNode.innerHTML = text.replace(originalName, "<span class=\"type-" + pokeJson[name].type1 + "\">" + originalName + "</span>")
            }
        });

        clearInterval(interval);
    }
}


const pokeJson = {
  "machamp-gmax": {
    "id": 10201,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shellos": {
    "id": 422,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ambipom": {
    "id": 424,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "shuppet": {
    "id": 353,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "brute-bonnet": {
    "id": 986,
    "type1": "grass",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "golem": {
    "id": 76,
    "type1": "rock",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "necrozma-ultra": {
    "id": 10157,
    "type1": "psychic",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "rhyhorn": {
    "id": 111,
    "type1": "ground",
    "type2": "rock",
    "has_shiny": true,
    "has_female": true
  },
  "mimikyu-totem-disguised": {
    "id": 10144,
    "type1": "ghost",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "genesect": {
    "id": 649,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "dreepy": {
    "id": 885,
    "type1": "dragon",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "elekid": {
    "id": 239,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tangrowth": {
    "id": 465,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "lapras": {
    "id": 131,
    "type1": "water",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "meowth-gmax": {
    "id": 10200,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "brambleghast": {
    "id": 947,
    "type1": "grass",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "latios": {
    "id": 381,
    "type1": "dragon",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "palafin": {
    "id": 964,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hatenna": {
    "id": 856,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tauros-paldea-combat-breed": {
    "id": 10250,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "seedot": {
    "id": 273,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "golem-alola": {
    "id": 10111,
    "type1": "rock",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "kadabra": {
    "id": 64,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "pikachu-alola-cap": {
    "id": 10099,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slowking": {
    "id": 199,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "piplup": {
    "id": 393,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "geodude-alola": {
    "id": 10109,
    "type1": "rock",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "vespiquen": {
    "id": 416,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "roggenrola": {
    "id": 524,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "aron": {
    "id": 304,
    "type1": "steel",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "doublade": {
    "id": 680,
    "type1": "steel",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "wishiwashi": {
    "id": 746,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "golisopod": {
    "id": 768,
    "type1": "bug",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "minior-blue": {
    "id": 10140,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "butterfree": {
    "id": 12,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "ninetales": {
    "id": 38,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "deoxys-attack": {
    "id": 10001,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sudowoodo": {
    "id": 185,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "wigglytuff": {
    "id": 40,
    "type1": "normal",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "slowbro": {
    "id": 80,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "magmortar": {
    "id": 467,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rowlet": {
    "id": 722,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "staraptor": {
    "id": 398,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "kyurem-white": {
    "id": 10023,
    "type1": "dragon",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "blastoise": {
    "id": 9,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slurpuff": {
    "id": 685,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "anorith": {
    "id": 347,
    "type1": "rock",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "slowbro-mega": {
    "id": 10071,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "pumpkaboo-super": {
    "id": 10029,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "dratini": {
    "id": 147,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cacturne": {
    "id": 332,
    "type1": "grass",
    "type2": "dark",
    "has_shiny": true,
    "has_female": true
  },
  "araquanid": {
    "id": 752,
    "type1": "water",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "machamp": {
    "id": 68,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "darmanitan": {
    "id": 555,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "walking-wake": {
    "id": 1009,
    "type1": "water",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "reshiram": {
    "id": 643,
    "type1": "dragon",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "gourgeist-super": {
    "id": 10032,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "indeedee": {
    "id": 876,
    "type1": "psychic",
    "type2": "normal",
    "has_shiny": true,
    "has_female": true
  },
  "zamazenta": {
    "id": 889,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tinkaton": {
    "id": 959,
    "type1": "fairy",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "espurr": {
    "id": 677,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "grapploct": {
    "id": 853,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kirlia": {
    "id": 281,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "mr-rime": {
    "id": 866,
    "type1": "ice",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "poltchageist": {
    "id": 1012,
    "type1": "grass",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "mr-mime": {
    "id": 122,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-libre": {
    "id": 10084,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tauros-paldea-blaze-breed": {
    "id": 10251,
    "type1": "fighting",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "ditto": {
    "id": 132,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "regice": {
    "id": 378,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "medicham-mega": {
    "id": 10054,
    "type1": "fighting",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "mienfoo": {
    "id": 619,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ampharos": {
    "id": 181,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "golett": {
    "id": 622,
    "type1": "ground",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "dudunsparce": {
    "id": 982,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tentacruel": {
    "id": 73,
    "type1": "water",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "psyduck": {
    "id": 54,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "armarouge": {
    "id": 936,
    "type1": "fire",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "gengar-gmax": {
    "id": 10202,
    "type1": "ghost",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "vikavolt-totem": {
    "id": 10122,
    "type1": "bug",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "mime-jr": {
    "id": 439,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "clefairy": {
    "id": 35,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "raichu": {
    "id": 26,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "articuno": {
    "id": 144,
    "type1": "ice",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "oinkologne-female": {
    "id": 10254,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spheal": {
    "id": 363,
    "type1": "ice",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "magneton": {
    "id": 82,
    "type1": "electric",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "durant": {
    "id": 632,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "zorua": {
    "id": 570,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "panpour": {
    "id": 515,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "togedemaru": {
    "id": 777,
    "type1": "electric",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "volcanion": {
    "id": 721,
    "type1": "fire",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "plusle": {
    "id": 311,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rillaboom": {
    "id": 812,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "arbok": {
    "id": 24,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gouging-fire": {
    "id": 1020,
    "type1": "fire",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "pumpkaboo-small": {
    "id": 10027,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "froslass": {
    "id": 478,
    "type1": "ice",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "necrozma-dusk": {
    "id": 10155,
    "type1": "psychic",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "morpeko": {
    "id": 877,
    "type1": "electric",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "shinx": {
    "id": 403,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "zekrom": {
    "id": 644,
    "type1": "dragon",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "squawkabilly-yellow-plumage": {
    "id": 10261,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "dragalge": {
    "id": 691,
    "type1": "poison",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "latios-mega": {
    "id": 10063,
    "type1": "dragon",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "marowak": {
    "id": 105,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-unova-cap": {
    "id": 10097,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sandile": {
    "id": 551,
    "type1": "ground",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "poliwhirl": {
    "id": 61,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "mantine": {
    "id": 226,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "lycanroc": {
    "id": 745,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "quaxly": {
    "id": 912,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kingambit": {
    "id": 983,
    "type1": "dark",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "skeledirge": {
    "id": 911,
    "type1": "fire",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "frosmoth": {
    "id": 873,
    "type1": "ice",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "tauros-paldea-aqua-breed": {
    "id": 10252,
    "type1": "fighting",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "whismur": {
    "id": 293,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "alakazam-mega": {
    "id": 10037,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "froakie": {
    "id": 656,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "solrock": {
    "id": 338,
    "type1": "rock",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "mamoswine": {
    "id": 473,
    "type1": "ice",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "avalugg-hisui": {
    "id": 10243,
    "type1": "ice",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "mareep": {
    "id": 179,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gurdurr": {
    "id": 533,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "meloetta": {
    "id": 648,
    "type1": "normal",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "hoopa": {
    "id": 720,
    "type1": "psychic",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "nymble": {
    "id": 919,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "honchkrow": {
    "id": 430,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "gastly": {
    "id": 92,
    "type1": "ghost",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "electrode-hisui": {
    "id": 10232,
    "type1": "electric",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "hippopotas": {
    "id": 449,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "palpitoad": {
    "id": 536,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "beheeyem": {
    "id": 606,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rabsca": {
    "id": 954,
    "type1": "bug",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "typhlosion": {
    "id": 157,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "snivy": {
    "id": 495,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "squirtle": {
    "id": 7,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "minior-violet-meteor": {
    "id": 10135,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "growlithe-hisui": {
    "id": 10229,
    "type1": "fire",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "cresselia": {
    "id": 488,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gigalith": {
    "id": 526,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "toedscool": {
    "id": 948,
    "type1": "ground",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "tinkatink": {
    "id": 957,
    "type1": "fairy",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "glimmora": {
    "id": 970,
    "type1": "rock",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "wugtrio": {
    "id": 961,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rattata": {
    "id": 19,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "xerneas": {
    "id": 716,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "buizel": {
    "id": 418,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "gliscor": {
    "id": 472,
    "type1": "ground",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "lileep": {
    "id": 345,
    "type1": "rock",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "omastar": {
    "id": 139,
    "type1": "rock",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "glalie-mega": {
    "id": 10074,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "skitty": {
    "id": 300,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gallade-mega": {
    "id": 10068,
    "type1": "psychic",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "gardevoir": {
    "id": 282,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "palkia": {
    "id": 484,
    "type1": "water",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "mr-mime-galar": {
    "id": 10168,
    "type1": "ice",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "pansage": {
    "id": 511,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "incineroar": {
    "id": 727,
    "type1": "fire",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "growlithe": {
    "id": 58,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "duraludon": {
    "id": 884,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "torchic": {
    "id": 255,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "wormadam": {
    "id": 413,
    "type1": "bug",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "oinkologne": {
    "id": 916,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "malamar": {
    "id": 687,
    "type1": "dark",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "turtwig": {
    "id": 387,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-phd": {
    "id": 10083,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wooper": {
    "id": 194,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "milotic": {
    "id": 350,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "pyroar": {
    "id": 668,
    "type1": "fire",
    "type2": "normal",
    "has_shiny": true,
    "has_female": true
  },
  "miraidon-low-power-mode": {
    "id": 10268,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "shuckle": {
    "id": 213,
    "type1": "bug",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "floette-eternal": {
    "id": 10061,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "litleo": {
    "id": 667,
    "type1": "fire",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "cetoddle": {
    "id": 974,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "voltorb-hisui": {
    "id": 10231,
    "type1": "electric",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "breloom": {
    "id": 286,
    "type1": "grass",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "blitzle": {
    "id": 522,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "nidoran-m": {
    "id": 32,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "weedle": {
    "id": 13,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "kartana": {
    "id": 798,
    "type1": "grass",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "dolliv": {
    "id": 929,
    "type1": "grass",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "charizard-mega-y": {
    "id": 10035,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "glameow": {
    "id": 431,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "scream-tail": {
    "id": 985,
    "type1": "fairy",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "patrat": {
    "id": 504,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "machoke": {
    "id": 67,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "scorbunny": {
    "id": 813,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dachsbun": {
    "id": 927,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "igglybuff": {
    "id": 174,
    "type1": "normal",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "dustox": {
    "id": 269,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "inkay": {
    "id": 686,
    "type1": "dark",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "bouffalant": {
    "id": 626,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "grubbin": {
    "id": 736,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dracovish": {
    "id": 882,
    "type1": "water",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "nidoking": {
    "id": 34,
    "type1": "poison",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "krokorok": {
    "id": 552,
    "type1": "ground",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "timburr": {
    "id": 532,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "noibat": {
    "id": 714,
    "type1": "flying",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "paras": {
    "id": 46,
    "type1": "bug",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "nincada": {
    "id": 290,
    "type1": "bug",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "oshawott": {
    "id": 501,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slakoth": {
    "id": 287,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "terapagos-stellar": {
    "id": 10277,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lycanroc-midnight": {
    "id": 10126,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cramorant-gorging": {
    "id": 10183,
    "type1": "flying",
    "type2": "water",
    "has_shiny": false,
    "has_female": false
  },
  "tandemaus": {
    "id": 924,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "finneon": {
    "id": 456,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "blastoise-gmax": {
    "id": 10197,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sentret": {
    "id": 161,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sawsbuck": {
    "id": 586,
    "type1": "normal",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "goodra-hisui": {
    "id": 10242,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "ampharos-mega": {
    "id": 10045,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "salamence": {
    "id": 373,
    "type1": "dragon",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "cosmoem": {
    "id": 790,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "meowth": {
    "id": 52,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "petilil": {
    "id": 548,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "flutter-mane": {
    "id": 987,
    "type1": "ghost",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "arrokuda": {
    "id": 846,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rayquaza": {
    "id": 384,
    "type1": "dragon",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "axew": {
    "id": 610,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "decidueye-hisui": {
    "id": 10244,
    "type1": "grass",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "obstagoon": {
    "id": 862,
    "type1": "dark",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "rillaboom-gmax": {
    "id": 10209,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "naclstack": {
    "id": 933,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gyarados-mega": {
    "id": 10041,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "charcadet": {
    "id": 935,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "trubbish": {
    "id": 568,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "amoonguss": {
    "id": 591,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "chikorita": {
    "id": 152,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "phantump": {
    "id": 708,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "primarina": {
    "id": 730,
    "type1": "water",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "torterra": {
    "id": 389,
    "type1": "grass",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "stunfisk-galar": {
    "id": 10180,
    "type1": "ground",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "annihilape": {
    "id": 979,
    "type1": "fighting",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "necrozma-dawn": {
    "id": 10156,
    "type1": "psychic",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "misdreavus": {
    "id": 200,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pidove": {
    "id": 519,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "zacian": {
    "id": 888,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "primeape": {
    "id": 57,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "absol": {
    "id": 359,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "quaquaval": {
    "id": 914,
    "type1": "water",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "blipbug": {
    "id": 824,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dewpider": {
    "id": 751,
    "type1": "water",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "zarude": {
    "id": 893,
    "type1": "dark",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "electabuzz": {
    "id": 125,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lapras-gmax": {
    "id": 10204,
    "type1": "water",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "pelipper": {
    "id": 279,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "duosion": {
    "id": 578,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "minior-violet": {
    "id": 10142,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "pawmot": {
    "id": 923,
    "type1": "electric",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "furfrou": {
    "id": 676,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ludicolo": {
    "id": 272,
    "type1": "water",
    "type2": "grass",
    "has_shiny": true,
    "has_female": true
  },
  "greedent": {
    "id": 820,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chingling": {
    "id": 433,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "grimmsnarl-gmax": {
    "id": 10222,
    "type1": "dark",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "milcery": {
    "id": 868,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "druddigon": {
    "id": 621,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cyndaquil": {
    "id": 155,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "frillish": {
    "id": 592,
    "type1": "water",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": true
  },
  "lycanroc-dusk": {
    "id": 10152,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "luxray": {
    "id": 405,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "appletun-gmax": {
    "id": 10217,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "gabite": {
    "id": 444,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "ivysaur": {
    "id": 2,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "morelull": {
    "id": 755,
    "type1": "grass",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "typhlosion-hisui": {
    "id": 10233,
    "type1": "fire",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "sandaconda-gmax": {
    "id": 10218,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "snorlax": {
    "id": 143,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gible": {
    "id": 443,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "jirachi": {
    "id": 385,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "vanilluxe": {
    "id": 584,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pansear": {
    "id": 513,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cetitan": {
    "id": 975,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "raticate-totem-alola": {
    "id": 10093,
    "type1": "dark",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "buzzwole": {
    "id": 794,
    "type1": "bug",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "rufflet": {
    "id": 627,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "hatterene-gmax": {
    "id": 10221,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "delcatty": {
    "id": 301,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "seviper": {
    "id": 336,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "teddiursa": {
    "id": 216,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "swirlix": {
    "id": 684,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shellder": {
    "id": 90,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wailord": {
    "id": 321,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "unfezant": {
    "id": 521,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "garbodor-gmax": {
    "id": 10207,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "nickit": {
    "id": 827,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rapidash": {
    "id": 78,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "alcremie-gmax": {
    "id": 10223,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "calyrex-shadow": {
    "id": 10194,
    "type1": "psychic",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "pupitar": {
    "id": 247,
    "type1": "rock",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "marshadow": {
    "id": 802,
    "type1": "fighting",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "cutiefly": {
    "id": 742,
    "type1": "bug",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "coalossal": {
    "id": 839,
    "type1": "rock",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "koraidon-swimming-build": {
    "id": 10266,
    "type1": "fighting",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "wailmer": {
    "id": 320,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dottler": {
    "id": 825,
    "type1": "bug",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "heatran": {
    "id": 485,
    "type1": "fire",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "sharpedo": {
    "id": 319,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "basculin": {
    "id": 550,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wo-chien": {
    "id": 1001,
    "type1": "dark",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "tornadus": {
    "id": 641,
    "type1": "flying",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zigzagoon": {
    "id": 263,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shaymin-sky": {
    "id": 10006,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "mareanie": {
    "id": 747,
    "type1": "poison",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "capsakid": {
    "id": 951,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "monferno": {
    "id": 391,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "minior-yellow-meteor": {
    "id": 10131,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "charmander": {
    "id": 4,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "electivire": {
    "id": 466,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "machop": {
    "id": 66,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "deoxys-defense": {
    "id": 10002,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pidgey": {
    "id": 16,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "virizion": {
    "id": 640,
    "type1": "grass",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "appletun": {
    "id": 842,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "liepard": {
    "id": 510,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "koraidon-sprinting-build": {
    "id": 10265,
    "type1": "fighting",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "riolu": {
    "id": 447,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-belle": {
    "id": 10081,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pidgeot-mega": {
    "id": 10073,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "gligar": {
    "id": 207,
    "type1": "ground",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "pignite": {
    "id": 499,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "braviary": {
    "id": 628,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "magearna": {
    "id": 801,
    "type1": "steel",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "kecleon": {
    "id": 352,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "klinklang": {
    "id": 601,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ribombee": {
    "id": 743,
    "type1": "bug",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "chimecho": {
    "id": 358,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "nidorino": {
    "id": 33,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tatsugiri-droopy": {
    "id": 10258,
    "type1": "dragon",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "onix": {
    "id": 95,
    "type1": "rock",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "victini": {
    "id": 494,
    "type1": "psychic",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "klang": {
    "id": 600,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "burmy": {
    "id": 412,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "exeggcute": {
    "id": 102,
    "type1": "grass",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "ogerpon-cornerstone": {
    "id": 10275,
    "type1": "grass",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "garchomp-mega": {
    "id": 10058,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "loudred": {
    "id": 294,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-world-cap": {
    "id": 10160,
    "type1": "electric",
    "type2": "",
    "has_shiny": false,
    "has_female": false
  },
  "excadrill": {
    "id": 530,
    "type1": "ground",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "elgyem": {
    "id": 605,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rockruff": {
    "id": 744,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gulpin": {
    "id": 316,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "buneary": {
    "id": 427,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "diggersby": {
    "id": 660,
    "type1": "normal",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "orbeetle-gmax": {
    "id": 10213,
    "type1": "bug",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "crabominable": {
    "id": 740,
    "type1": "fighting",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "illumise": {
    "id": 314,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "persian": {
    "id": 53,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "flaaffy": {
    "id": 180,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "smoochum": {
    "id": 238,
    "type1": "ice",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "leafeon": {
    "id": 470,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lumineon": {
    "id": 457,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "goldeen": {
    "id": 118,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "dialga": {
    "id": 483,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "scraggy": {
    "id": 559,
    "type1": "dark",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "cofagrigus": {
    "id": 563,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "vullaby": {
    "id": 629,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "bruxish": {
    "id": 779,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "rookidee": {
    "id": 821,
    "type1": "flying",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "thievul": {
    "id": 828,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wattrel": {
    "id": 940,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "dipplin": {
    "id": 1011,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "toxicroak": {
    "id": 454,
    "type1": "poison",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": true
  },
  "cyclizar": {
    "id": 967,
    "type1": "dragon",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "torracat": {
    "id": 726,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "magcargo": {
    "id": 219,
    "type1": "fire",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "unown": {
    "id": 201,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "infernape": {
    "id": 392,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "dewott": {
    "id": 502,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "clawitzer": {
    "id": 693,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "vaporeon": {
    "id": 134,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "diancie": {
    "id": 719,
    "type1": "rock",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "qwilfish": {
    "id": 211,
    "type1": "water",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "raboot": {
    "id": 814,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "exploud": {
    "id": 295,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sandshrew-alola": {
    "id": 10101,
    "type1": "ice",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "camerupt": {
    "id": 323,
    "type1": "fire",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "metang": {
    "id": 375,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "revavroom": {
    "id": 966,
    "type1": "steel",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "persian-alola": {
    "id": 10108,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "moltres": {
    "id": 146,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "boldore": {
    "id": 525,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gimmighoul": {
    "id": 999,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kricketot": {
    "id": 401,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "klawf": {
    "id": 950,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "manectric": {
    "id": 310,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hariyama": {
    "id": 297,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "giratina": {
    "id": 487,
    "type1": "ghost",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "omanyte": {
    "id": 138,
    "type1": "rock",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "espeon": {
    "id": 196,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "corphish": {
    "id": 341,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "marshtomp": {
    "id": 259,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "skorupi": {
    "id": 451,
    "type1": "poison",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "gloom": {
    "id": 44,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "skuntank": {
    "id": 435,
    "type1": "poison",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "altaria-mega": {
    "id": 10067,
    "type1": "dragon",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "iron-leaves": {
    "id": 1010,
    "type1": "grass",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "binacle": {
    "id": 688,
    "type1": "rock",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "ursaluna": {
    "id": 901,
    "type1": "ground",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "tatsugiri-stretchy": {
    "id": 10259,
    "type1": "dragon",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "porygon": {
    "id": 137,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lilligant-hisui": {
    "id": 10237,
    "type1": "grass",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "staravia": {
    "id": 397,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "pikachu-pop-star": {
    "id": 10082,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bellsprout": {
    "id": 69,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "quagsire": {
    "id": 195,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "steelix": {
    "id": 208,
    "type1": "steel",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "nuzleaf": {
    "id": 274,
    "type1": "grass",
    "type2": "dark",
    "has_shiny": true,
    "has_female": true
  },
  "leavanny": {
    "id": 542,
    "type1": "bug",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "keldeo": {
    "id": 647,
    "type1": "water",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "raticate": {
    "id": 20,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "sneasel": {
    "id": 215,
    "type1": "dark",
    "type2": "ice",
    "has_shiny": true,
    "has_female": true
  },
  "skiploom": {
    "id": 188,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "dusknoir": {
    "id": 477,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "magmar": {
    "id": 126,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cinccino": {
    "id": 573,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikipek": {
    "id": 731,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-kalos-cap": {
    "id": 10098,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sandslash-alola": {
    "id": 10102,
    "type1": "ice",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "bagon": {
    "id": 371,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "empoleon": {
    "id": 395,
    "type1": "water",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "floatzel": {
    "id": 419,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "minior-orange": {
    "id": 10137,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "kommo-o": {
    "id": 784,
    "type1": "dragon",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "stakataka": {
    "id": 805,
    "type1": "rock",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "dudunsparce-three-segment": {
    "id": 10255,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zigzagoon-galar": {
    "id": 10174,
    "type1": "dark",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "swinub": {
    "id": 220,
    "type1": "ice",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "abomasnow-mega": {
    "id": 10060,
    "type1": "grass",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "cinderace": {
    "id": 815,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sandygast": {
    "id": 769,
    "type1": "ghost",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "deerling": {
    "id": 585,
    "type1": "normal",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "urshifu": {
    "id": 892,
    "type1": "fighting",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "arboliva": {
    "id": 930,
    "type1": "grass",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "tympole": {
    "id": 535,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "venonat": {
    "id": 48,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "delphox": {
    "id": 655,
    "type1": "fire",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "inteleon-gmax": {
    "id": 10211,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "indeedee-female": {
    "id": 10186,
    "type1": "psychic",
    "type2": "normal",
    "has_shiny": false,
    "has_female": false
  },
  "tentacool": {
    "id": 72,
    "type1": "water",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "meganium": {
    "id": 154,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "arcanine": {
    "id": 59,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cherrim": {
    "id": 421,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "probopass": {
    "id": 476,
    "type1": "rock",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "rotom-fan": {
    "id": 10011,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "mewtwo-mega-x": {
    "id": 10043,
    "type1": "psychic",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "raging-bolt": {
    "id": 1021,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "blastoise-mega": {
    "id": 10036,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "totodile": {
    "id": 158,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kingler-gmax": {
    "id": 10203,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "foongus": {
    "id": 590,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "rhydon": {
    "id": 112,
    "type1": "ground",
    "type2": "rock",
    "has_shiny": true,
    "has_female": true
  },
  "jigglypuff": {
    "id": 39,
    "type1": "normal",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "necrozma": {
    "id": 800,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "azumarill": {
    "id": 184,
    "type1": "water",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "larvitar": {
    "id": 246,
    "type1": "rock",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "floragato": {
    "id": 907,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wooloo": {
    "id": 831,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pichu": {
    "id": 172,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "manaphy": {
    "id": 490,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "flareon": {
    "id": 136,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "drizzile": {
    "id": 817,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "darumaka": {
    "id": 554,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tapu-fini": {
    "id": 788,
    "type1": "water",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "melmetal": {
    "id": 809,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "copperajah-gmax": {
    "id": 10224,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "iron-thorns": {
    "id": 995,
    "type1": "rock",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "thundurus": {
    "id": 642,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "toxel": {
    "id": 848,
    "type1": "electric",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "vigoroth": {
    "id": 288,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "simipour": {
    "id": 516,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "stufful": {
    "id": 759,
    "type1": "normal",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "type-null": {
    "id": 772,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "darumaka-galar": {
    "id": 10176,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lugia": {
    "id": 249,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "salazzle-totem": {
    "id": 10129,
    "type1": "poison",
    "type2": "fire",
    "has_shiny": false,
    "has_female": false
  },
  "combee": {
    "id": 415,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "accelgor": {
    "id": 617,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bombirdier": {
    "id": 962,
    "type1": "flying",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "morgrem": {
    "id": 860,
    "type1": "dark",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "sneasel-hisui": {
    "id": 10235,
    "type1": "fighting",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "slowbro-galar": {
    "id": 10165,
    "type1": "poison",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "varoom": {
    "id": 965,
    "type1": "steel",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "vibrava": {
    "id": 329,
    "type1": "ground",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "mightyena": {
    "id": 262,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lopunny-mega": {
    "id": 10088,
    "type1": "normal",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "ariados": {
    "id": 168,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "lotad": {
    "id": 270,
    "type1": "water",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "lucario-mega": {
    "id": 10059,
    "type1": "fighting",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "regigigas": {
    "id": 486,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "golurk": {
    "id": 623,
    "type1": "ground",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "cottonee": {
    "id": 546,
    "type1": "grass",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "crustle": {
    "id": 558,
    "type1": "bug",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "regieleki": {
    "id": 894,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "arceus": {
    "id": 493,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "mandibuzz": {
    "id": 630,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "starly": {
    "id": 396,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "zweilous": {
    "id": 634,
    "type1": "dark",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "urshifu-rapid-strike": {
    "id": 10191,
    "type1": "fighting",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "tirtouga": {
    "id": 564,
    "type1": "water",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "mantyke": {
    "id": 458,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "camerupt-mega": {
    "id": 10087,
    "type1": "fire",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "electrode": {
    "id": 101,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pidgeot": {
    "id": 18,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "slowpoke": {
    "id": 79,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "bronzor": {
    "id": 436,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "treecko": {
    "id": 252,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spiritomb": {
    "id": 442,
    "type1": "ghost",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "bellibolt": {
    "id": 939,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rolycoly": {
    "id": 837,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tyrogue": {
    "id": 236,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dracozolt": {
    "id": 880,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "rellor": {
    "id": 953,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kyurem": {
    "id": 646,
    "type1": "dragon",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "munkidori": {
    "id": 1015,
    "type1": "poison",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "chandelure": {
    "id": 609,
    "type1": "ghost",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "amaura": {
    "id": 698,
    "type1": "rock",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "seel": {
    "id": 86,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "crabrawler": {
    "id": 739,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spinda": {
    "id": 327,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "manectric-mega": {
    "id": 10055,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slaking": {
    "id": 289,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gengar-mega": {
    "id": 10038,
    "type1": "ghost",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "hitmonchan": {
    "id": 107,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wynaut": {
    "id": 360,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "prinplup": {
    "id": 394,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shelgon": {
    "id": 372,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tepig": {
    "id": 498,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lillipup": {
    "id": 506,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "beartic": {
    "id": 614,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "comfey": {
    "id": 764,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chien-pao": {
    "id": 1002,
    "type1": "dark",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "houndoom": {
    "id": 229,
    "type1": "dark",
    "type2": "fire",
    "has_shiny": true,
    "has_female": true
  },
  "swampert": {
    "id": 260,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "vanillish": {
    "id": 583,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "vikavolt": {
    "id": 738,
    "type1": "bug",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "cacnea": {
    "id": 331,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "drampa": {
    "id": 780,
    "type1": "normal",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "uxie": {
    "id": 480,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "larvesta": {
    "id": 636,
    "type1": "bug",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "grookey": {
    "id": 810,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "eternatus": {
    "id": 890,
    "type1": "poison",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "hoothoot": {
    "id": 163,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "chesnaught": {
    "id": 652,
    "type1": "grass",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "houndour": {
    "id": 228,
    "type1": "dark",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "braviary-hisui": {
    "id": 10240,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "ho-oh": {
    "id": 250,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "spewpa": {
    "id": 665,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zangoose": {
    "id": 335,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "poliwag": {
    "id": 60,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ferroseed": {
    "id": 597,
    "type1": "grass",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "trumbeak": {
    "id": 732,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "melmetal-gmax": {
    "id": 10208,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "clobbopus": {
    "id": 852,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spinarak": {
    "id": 167,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "dugtrio": {
    "id": 51,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lanturn": {
    "id": 171,
    "type1": "water",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "combusken": {
    "id": 256,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": true
  },
  "zubat": {
    "id": 41,
    "type1": "poison",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "solosis": {
    "id": 577,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "walrein": {
    "id": 365,
    "type1": "ice",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "togekiss": {
    "id": 468,
    "type1": "fairy",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "eelektross": {
    "id": 604,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lunala": {
    "id": 792,
    "type1": "psychic",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "sandshrew": {
    "id": 27,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "koraidon-limited-build": {
    "id": 10264,
    "type1": "fighting",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "ogerpon-wellspring": {
    "id": 10273,
    "type1": "grass",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "aurorus": {
    "id": 699,
    "type1": "rock",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "meowstic-female": {
    "id": 10025,
    "type1": "psychic",
    "type2": "",
    "has_shiny": false,
    "has_female": false
  },
  "pawmi": {
    "id": 921,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "iron-hands": {
    "id": 992,
    "type1": "fighting",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "staryu": {
    "id": 120,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shedinja": {
    "id": 292,
    "type1": "bug",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "absol-mega": {
    "id": 10057,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sobble": {
    "id": 816,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "phanpy": {
    "id": 231,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "graveler-alola": {
    "id": 10110,
    "type1": "rock",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "magikarp": {
    "id": 129,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "zebstrika": {
    "id": 523,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "basculin-white-striped": {
    "id": 10247,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bergmite": {
    "id": 712,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gossifleur": {
    "id": 829,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "frigibax": {
    "id": 996,
    "type1": "dragon",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "tyranitar": {
    "id": 248,
    "type1": "rock",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "koraidon": {
    "id": 1007,
    "type1": "fighting",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "terapagos-terastal": {
    "id": 10276,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "houndoom-mega": {
    "id": 10048,
    "type1": "dark",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "kyogre-primal": {
    "id": 10077,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "caterpie": {
    "id": 10,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "masquerain": {
    "id": 284,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "darmanitan-galar-zen": {
    "id": 10178,
    "type1": "ice",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "drowzee": {
    "id": 96,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "thundurus-therian": {
    "id": 10020,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "toxtricity-amped-gmax": {
    "id": 10219,
    "type1": "electric",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "centiskorch": {
    "id": 851,
    "type1": "fire",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "marill": {
    "id": 183,
    "type1": "water",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "beldum": {
    "id": 374,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "ekans": {
    "id": 23,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "maractus": {
    "id": 556,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "enamorus-therian": {
    "id": 10249,
    "type1": "fairy",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "nacli": {
    "id": 932,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "trevenant": {
    "id": 709,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "beedrill": {
    "id": 15,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "shaymin": {
    "id": 492,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "mothim": {
    "id": 414,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "sinistcha": {
    "id": 1013,
    "type1": "grass",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "tsareena": {
    "id": 763,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "scrafty": {
    "id": 560,
    "type1": "dark",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "snorunt": {
    "id": 361,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "salazzle": {
    "id": 758,
    "type1": "poison",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "snom": {
    "id": 872,
    "type1": "ice",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "minun": {
    "id": 312,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "inteleon": {
    "id": 818,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "drifloon": {
    "id": 425,
    "type1": "ghost",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "metagross": {
    "id": 376,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "metagross-mega": {
    "id": 10076,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "florges": {
    "id": 671,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wishiwashi-school": {
    "id": 10127,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "heatmor": {
    "id": 631,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ceruledge": {
    "id": 937,
    "type1": "fire",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "glaceon": {
    "id": 471,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "vulpix": {
    "id": 37,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "basculin-blue-striped": {
    "id": 10016,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "applin": {
    "id": 840,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "metapod": {
    "id": 11,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tynamo": {
    "id": 602,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pecharunt": {
    "id": 1025,
    "type1": "poison",
    "type2": "ghost",
    "has_shiny": false,
    "has_female": false
  },
  "golbat": {
    "id": 42,
    "type1": "poison",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "armaldo": {
    "id": 348,
    "type1": "rock",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "musharna": {
    "id": 518,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "diglett": {
    "id": 50,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "darmanitan-galar-standard": {
    "id": 10177,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dartrix": {
    "id": 723,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "minccino": {
    "id": 572,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "castform-rainy": {
    "id": 10014,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "xurkitree": {
    "id": 796,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "orthworm": {
    "id": 968,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "koffing": {
    "id": 109,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kyurem-black": {
    "id": 10022,
    "type1": "dragon",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "sceptile": {
    "id": 254,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gourgeist": {
    "id": 711,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "copperajah": {
    "id": 879,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "magnezone": {
    "id": 462,
    "type1": "electric",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "meowth-galar": {
    "id": 10161,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "snover": {
    "id": 459,
    "type1": "grass",
    "type2": "ice",
    "has_shiny": true,
    "has_female": true
  },
  "natu": {
    "id": 177,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "gumshoos": {
    "id": 735,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "eternatus-eternamax": {
    "id": 10190,
    "type1": "poison",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "miraidon-aquatic-mode": {
    "id": 10270,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "minior": {
    "id": 774,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "quaxwell": {
    "id": 913,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hypno": {
    "id": 97,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "gallade": {
    "id": 475,
    "type1": "psychic",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "pincurchin": {
    "id": 871,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "naganadel": {
    "id": 804,
    "type1": "poison",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "kilowattrel": {
    "id": 941,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "eevee-gmax": {
    "id": 10205,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sunflora": {
    "id": 192,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "garchomp": {
    "id": 445,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "aegislash-blade": {
    "id": 10026,
    "type1": "steel",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "flapple-gmax": {
    "id": 10216,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "cryogonal": {
    "id": 615,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slowpoke-galar": {
    "id": 10164,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "baltoy": {
    "id": 343,
    "type1": "ground",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "shieldon": {
    "id": 410,
    "type1": "rock",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "zapdos": {
    "id": 145,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "garganacl": {
    "id": 934,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wiglett": {
    "id": 960,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hawlucha": {
    "id": 701,
    "type1": "fighting",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "polteageist": {
    "id": 855,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "venomoth": {
    "id": 49,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "klefki": {
    "id": 707,
    "type1": "steel",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "samurott-hisui": {
    "id": 10236,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "arctovish": {
    "id": 883,
    "type1": "water",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "mabosstiff": {
    "id": 943,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kakuna": {
    "id": 14,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "lilligant": {
    "id": 549,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pyukumuku": {
    "id": 771,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "geodude": {
    "id": 74,
    "type1": "rock",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "tapu-bulu": {
    "id": 787,
    "type1": "grass",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "meditite": {
    "id": 307,
    "type1": "fighting",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": true
  },
  "granbull": {
    "id": 210,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "joltik": {
    "id": 595,
    "type1": "bug",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "pineco": {
    "id": 204,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lampent": {
    "id": 608,
    "type1": "ghost",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "volcarona": {
    "id": 637,
    "type1": "bug",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "snubbull": {
    "id": 209,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "claydol": {
    "id": 344,
    "type1": "ground",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "eelektrik": {
    "id": 603,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "mawile-mega": {
    "id": 10052,
    "type1": "steel",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "scatterbug": {
    "id": 664,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "avalugg": {
    "id": 713,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "forretress": {
    "id": 205,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "arctozolt": {
    "id": 881,
    "type1": "electric",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "politoed": {
    "id": 186,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "fletchinder": {
    "id": 662,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "croagunk": {
    "id": 453,
    "type1": "poison",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": true
  },
  "stantler": {
    "id": 234,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sprigatito": {
    "id": 906,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "golduck": {
    "id": 55,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "haunter": {
    "id": 93,
    "type1": "ghost",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "tapu-koko": {
    "id": 785,
    "type1": "electric",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "bramblin": {
    "id": 946,
    "type1": "grass",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "mawile": {
    "id": 303,
    "type1": "steel",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "magnemite": {
    "id": 81,
    "type1": "electric",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "dedenne": {
    "id": 702,
    "type1": "electric",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "zorua-hisui": {
    "id": 10238,
    "type1": "normal",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "huntail": {
    "id": 367,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spearow": {
    "id": 21,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "watchog": {
    "id": 505,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "reuniclus": {
    "id": 579,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hydreigon": {
    "id": 635,
    "type1": "dark",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "keldeo-resolute": {
    "id": 10024,
    "type1": "water",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "shiinotic": {
    "id": 756,
    "type1": "grass",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "squawkabilly-blue-plumage": {
    "id": 10260,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "delibird": {
    "id": 225,
    "type1": "ice",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "oddish": {
    "id": 43,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "linoone-galar": {
    "id": 10175,
    "type1": "dark",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "gourgeist-large": {
    "id": 10031,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "mienshao": {
    "id": 620,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "carkol": {
    "id": 838,
    "type1": "rock",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "happiny": {
    "id": 440,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "grimer-alola": {
    "id": 10112,
    "type1": "poison",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "gengar": {
    "id": 94,
    "type1": "ghost",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "seadra": {
    "id": 117,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "woobat": {
    "id": 527,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "carnivine": {
    "id": 455,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "nidorina": {
    "id": 30,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lickilicky": {
    "id": 463,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "drakloak": {
    "id": 886,
    "type1": "dragon",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "crobat": {
    "id": 169,
    "type1": "poison",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "corsola-galar": {
    "id": 10173,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zoroark": {
    "id": 571,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chinchou": {
    "id": 170,
    "type1": "water",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "yamper": {
    "id": 835,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "overqwil": {
    "id": 904,
    "type1": "dark",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "charmeleon": {
    "id": 5,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lairon": {
    "id": 305,
    "type1": "steel",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "duraludon-gmax": {
    "id": 10225,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "ledian": {
    "id": 166,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "abra": {
    "id": 63,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "diglett-alola": {
    "id": 10105,
    "type1": "ground",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "beautifly": {
    "id": 267,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "articuno-galar": {
    "id": 10169,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "raikou": {
    "id": 243,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "whimsicott": {
    "id": 547,
    "type1": "grass",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "deoxys-speed": {
    "id": 10003,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "swanna": {
    "id": 581,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "litwick": {
    "id": 607,
    "type1": "ghost",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "diancie-mega": {
    "id": 10075,
    "type1": "rock",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "silvally": {
    "id": 773,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "minior-orange-meteor": {
    "id": 10130,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "silcoon": {
    "id": 266,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "greninja": {
    "id": 658,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "kingler": {
    "id": 99,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gardevoir-mega": {
    "id": 10051,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "swablu": {
    "id": 333,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "conkeldurr": {
    "id": 534,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wormadam-trash": {
    "id": 10005,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "regidrago": {
    "id": 895,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "meowscarada": {
    "id": 908,
    "type1": "grass",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "vulpix-alola": {
    "id": 10103,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hakamo-o": {
    "id": 783,
    "type1": "dragon",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "farigiraf": {
    "id": 981,
    "type1": "normal",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "jumpluff": {
    "id": 189,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "skiddo": {
    "id": 672,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cubone": {
    "id": 104,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "togepi": {
    "id": 175,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "celebi": {
    "id": 251,
    "type1": "psychic",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "rotom": {
    "id": 479,
    "type1": "electric",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "swampert-mega": {
    "id": 10064,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "araquanid-totem": {
    "id": 10153,
    "type1": "water",
    "type2": "bug",
    "has_shiny": false,
    "has_female": false
  },
  "drednaw": {
    "id": 834,
    "type1": "water",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "hatterene": {
    "id": 858,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "raticate-alola": {
    "id": 10092,
    "type1": "dark",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "fuecoco": {
    "id": 909,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "whirlipede": {
    "id": 544,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "vanillite": {
    "id": 582,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gastrodon": {
    "id": 423,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "togedemaru-totem": {
    "id": 10154,
    "type1": "electric",
    "type2": "steel",
    "has_shiny": false,
    "has_female": false
  },
  "sharpedo-mega": {
    "id": 10070,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "abomasnow": {
    "id": 460,
    "type1": "grass",
    "type2": "ice",
    "has_shiny": true,
    "has_female": true
  },
  "corsola": {
    "id": 222,
    "type1": "water",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "gothitelle": {
    "id": 576,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kangaskhan-mega": {
    "id": 10039,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "yveltal": {
    "id": 717,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "audino-mega": {
    "id": 10069,
    "type1": "normal",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "lucario": {
    "id": 448,
    "type1": "fighting",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "crocalor": {
    "id": 910,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "furret": {
    "id": 162,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "carbink": {
    "id": 703,
    "type1": "rock",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "latias": {
    "id": 380,
    "type1": "dragon",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "zacian-crowned": {
    "id": 10188,
    "type1": "fairy",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "calyrex": {
    "id": 898,
    "type1": "psychic",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "spectrier": {
    "id": 897,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "emboar": {
    "id": 500,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "venusaur-mega": {
    "id": 10033,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "heracross-mega": {
    "id": 10047,
    "type1": "bug",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "rotom-frost": {
    "id": 10010,
    "type1": "electric",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "miraidon": {
    "id": 1008,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "torkoal": {
    "id": 324,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slither-wing": {
    "id": 988,
    "type1": "bug",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "sealeo": {
    "id": 364,
    "type1": "ice",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "garbodor": {
    "id": 569,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tyranitar-mega": {
    "id": 10049,
    "type1": "rock",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "stunfisk": {
    "id": 618,
    "type1": "ground",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "fearow": {
    "id": 22,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "coalossal-gmax": {
    "id": 10215,
    "type1": "rock",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "cursola": {
    "id": 864,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "mimikyu-totem-busted": {
    "id": 10145,
    "type1": "ghost",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "maushold": {
    "id": 925,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "feraligatr": {
    "id": 160,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "iron-boulder": {
    "id": 1022,
    "type1": "rock",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "registeel": {
    "id": 379,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "goodra": {
    "id": 706,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "squawkabilly-white-plumage": {
    "id": 10262,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "banette-mega": {
    "id": 10056,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ting-lu": {
    "id": 1003,
    "type1": "dark",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "ogerpon-hearthflame": {
    "id": 10274,
    "type1": "grass",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "tyrunt": {
    "id": 696,
    "type1": "rock",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "bastiodon": {
    "id": 411,
    "type1": "rock",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "braixen": {
    "id": 654,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "horsea": {
    "id": 116,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-hoenn-cap": {
    "id": 10095,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cramorant": {
    "id": 845,
    "type1": "flying",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "poipole": {
    "id": 803,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bronzong": {
    "id": 437,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "ferrothorn": {
    "id": 598,
    "type1": "grass",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "krabby": {
    "id": 98,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "palkia-origin": {
    "id": 10246,
    "type1": "water",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "veluza": {
    "id": 976,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "floette": {
    "id": 670,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "iron-crown": {
    "id": 1023,
    "type1": "steel",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "calyrex-ice": {
    "id": 10193,
    "type1": "psychic",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "aerodactyl": {
    "id": 142,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "rampardos": {
    "id": 409,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "scolipede": {
    "id": 545,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "rattata-alola": {
    "id": 10091,
    "type1": "dark",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "rockruff-own-tempo": {
    "id": 10151,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kommo-o-totem": {
    "id": 10146,
    "type1": "dragon",
    "type2": "fighting",
    "has_shiny": false,
    "has_female": false
  },
  "grimmsnarl": {
    "id": 861,
    "type1": "dark",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "umbreon": {
    "id": 197,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "drifblim": {
    "id": 426,
    "type1": "ghost",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "scovillain": {
    "id": 952,
    "type1": "grass",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "miraidon-drive-mode": {
    "id": 10269,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "greninja-battle-bond": {
    "id": 10116,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "deino": {
    "id": 633,
    "type1": "dark",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu": {
    "id": 25,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "pawmo": {
    "id": 922,
    "type1": "electric",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "dwebble": {
    "id": 557,
    "type1": "bug",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "bisharp": {
    "id": 625,
    "type1": "dark",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "ledyba": {
    "id": 165,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "toucannon": {
    "id": 733,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "litten": {
    "id": 725,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dragonite": {
    "id": 149,
    "type1": "dragon",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "mankey": {
    "id": 56,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "blacephalon": {
    "id": 806,
    "type1": "fire",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "fidough": {
    "id": 926,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "donphan": {
    "id": 232,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "tropius": {
    "id": 357,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "yanma": {
    "id": 193,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "sirfetchd": {
    "id": 865,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dunsparce": {
    "id": 206,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dhelmise": {
    "id": 781,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "hattrem": {
    "id": 857,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "koraidon-gliding-build": {
    "id": 10267,
    "type1": "fighting",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "lurantis-totem": {
    "id": 10128,
    "type1": "grass",
    "type2": "",
    "has_shiny": false,
    "has_female": false
  },
  "tarountula": {
    "id": 917,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "banette": {
    "id": 354,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "corvisquire": {
    "id": 822,
    "type1": "flying",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chansey": {
    "id": 113,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "charizard-gmax": {
    "id": 10196,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "lopunny": {
    "id": 428,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "silicobra": {
    "id": 843,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "seaking": {
    "id": 119,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "karrablast": {
    "id": 588,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cosmog": {
    "id": 789,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "alakazam": {
    "id": 65,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "aerodactyl-mega": {
    "id": 10042,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "grimer": {
    "id": 88,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "nidoqueen": {
    "id": 31,
    "type1": "poison",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "muk": {
    "id": 89,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "makuhita": {
    "id": 296,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "aggron-mega": {
    "id": 10053,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "charizard": {
    "id": 6,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "blaziken-mega": {
    "id": 10050,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "cranidos": {
    "id": 408,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "decidueye": {
    "id": 724,
    "type1": "grass",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "salamence-mega": {
    "id": 10089,
    "type1": "dragon",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "rayquaza-mega": {
    "id": 10079,
    "type1": "dragon",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "tangela": {
    "id": 114,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sandaconda": {
    "id": 844,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shelmet": {
    "id": 616,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hitmonlee": {
    "id": 106,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "darkrai": {
    "id": 491,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ponyta": {
    "id": 77,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "meowstic": {
    "id": 678,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "simisear": {
    "id": 514,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spritzee": {
    "id": 682,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "snorlax-gmax": {
    "id": 10206,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "arctibax": {
    "id": 997,
    "type1": "dragon",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "wobbuffet": {
    "id": 202,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "wooper-paldea": {
    "id": 10253,
    "type1": "poison",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "weezing": {
    "id": 110,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "porygon2": {
    "id": 233,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "krookodile": {
    "id": 553,
    "type1": "ground",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "zygarde": {
    "id": 718,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "hoppip": {
    "id": 187,
    "type1": "grass",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "swalot": {
    "id": 317,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "zarude-dada": {
    "id": 10192,
    "type1": "dark",
    "type2": "grass",
    "has_shiny": false,
    "has_female": false
  },
  "iron-bundle": {
    "id": 991,
    "type1": "ice",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "venusaur": {
    "id": 3,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "quilava": {
    "id": 156,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "skrelp": {
    "id": 690,
    "type1": "poison",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "kubfu": {
    "id": 891,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "swellow": {
    "id": 277,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "zeraora": {
    "id": 807,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-rock-star": {
    "id": 10080,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "escavalier": {
    "id": 589,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "tadbulb": {
    "id": 938,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "exeggutor-alola": {
    "id": 10114,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "chatot": {
    "id": 441,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "sunkern": {
    "id": 191,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sigilyph": {
    "id": 561,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "greninja-ash": {
    "id": 10117,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "smoliv": {
    "id": 928,
    "type1": "grass",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "espathra": {
    "id": 956,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ninetales-alola": {
    "id": 10104,
    "type1": "ice",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-gmax": {
    "id": 10199,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "archen": {
    "id": 566,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "tauros": {
    "id": 128,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "jangmo-o": {
    "id": 782,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "barboach": {
    "id": 339,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "doduo": {
    "id": 84,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "glimmet": {
    "id": 969,
    "type1": "rock",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "bayleef": {
    "id": 153,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dondozo": {
    "id": 977,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "alomomola": {
    "id": 594,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "surskit": {
    "id": 283,
    "type1": "bug",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "steenee": {
    "id": 762,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pinsir": {
    "id": 127,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "latias-mega": {
    "id": 10062,
    "type1": "dragon",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "noctowl": {
    "id": 164,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "dragonair": {
    "id": 148,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rhyperior": {
    "id": 464,
    "type1": "ground",
    "type2": "rock",
    "has_shiny": true,
    "has_female": true
  },
  "hippowdon": {
    "id": 450,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "pumpkaboo": {
    "id": 710,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "gholdengo": {
    "id": 1000,
    "type1": "steel",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "samurott": {
    "id": 503,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "exeggutor": {
    "id": 103,
    "type1": "grass",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "ralts": {
    "id": 280,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "drilbur": {
    "id": 529,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "oricorio-pau": {
    "id": 10124,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "electrike": {
    "id": 309,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "thwackey": {
    "id": 811,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "croconaw": {
    "id": 159,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "castform": {
    "id": 351,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gumshoos-totem": {
    "id": 10121,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "eldegoss": {
    "id": 830,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "carvanha": {
    "id": 318,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "vileplume": {
    "id": 45,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "cramorant-gulping": {
    "id": 10182,
    "type1": "flying",
    "type2": "water",
    "has_shiny": false,
    "has_female": false
  },
  "fennekin": {
    "id": 653,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cobalion": {
    "id": 638,
    "type1": "steel",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "clefable": {
    "id": 36,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cleffa": {
    "id": 173,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wurmple": {
    "id": 265,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wyrdeer": {
    "id": 899,
    "type1": "normal",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "chimchar": {
    "id": 390,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "munchlax": {
    "id": 446,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "victreebel": {
    "id": 71,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "lickitung": {
    "id": 108,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "fomantis": {
    "id": 753,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kingdra": {
    "id": 230,
    "type1": "water",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "terrakion": {
    "id": 639,
    "type1": "rock",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "mudsdale": {
    "id": 750,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "marowak-totem": {
    "id": 10149,
    "type1": "fire",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "celesteela": {
    "id": 797,
    "type1": "steel",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "mudkip": {
    "id": 258,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-partner-cap": {
    "id": 10148,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "clauncher": {
    "id": 692,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "charizard-mega-x": {
    "id": 10034,
    "type1": "fire",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "weavile": {
    "id": 461,
    "type1": "dark",
    "type2": "ice",
    "has_shiny": true,
    "has_female": true
  },
  "mudbray": {
    "id": 749,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zygarde-10": {
    "id": 10181,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "wormadam-sandy": {
    "id": 10004,
    "type1": "bug",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "brionne": {
    "id": 729,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "regirock": {
    "id": 377,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ribombee-totem": {
    "id": 10150,
    "type1": "bug",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "vivillon": {
    "id": 666,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "sableye": {
    "id": 302,
    "type1": "dark",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "aegislash": {
    "id": 681,
    "type1": "steel",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "clodsire": {
    "id": 980,
    "type1": "poison",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "roaring-moon": {
    "id": 1005,
    "type1": "dragon",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "zoroark-hisui": {
    "id": 10239,
    "type1": "normal",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "great-tusk": {
    "id": 984,
    "type1": "ground",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "cufant": {
    "id": 878,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "fletchling": {
    "id": 661,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "dialga-origin": {
    "id": 10245,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "octillery": {
    "id": 224,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "urshifu-single-strike-gmax": {
    "id": 10226,
    "type1": "fighting",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "barbaracle": {
    "id": 689,
    "type1": "rock",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "smeargle": {
    "id": 235,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sylveon": {
    "id": 700,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dewgong": {
    "id": 87,
    "type1": "water",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "shiftry": {
    "id": 275,
    "type1": "grass",
    "type2": "dark",
    "has_shiny": true,
    "has_female": true
  },
  "volbeat": {
    "id": 313,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bunnelby": {
    "id": 659,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "alcremie": {
    "id": 869,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cinderace-gmax": {
    "id": 10210,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pachirisu": {
    "id": 417,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "sneasler": {
    "id": 903,
    "type1": "fighting",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "glalie": {
    "id": 362,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "fraxure": {
    "id": 611,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lechonk": {
    "id": 915,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tyrantrum": {
    "id": 697,
    "type1": "rock",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "muk-alola": {
    "id": 10113,
    "type1": "poison",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "toxtricity-low-key-gmax": {
    "id": 10228,
    "type1": "electric",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "cherubi": {
    "id": 420,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "carracosta": {
    "id": 565,
    "type1": "water",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "jellicent": {
    "id": 593,
    "type1": "water",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": true
  },
  "magby": {
    "id": 240,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "beedrill-mega": {
    "id": 10090,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "heracross": {
    "id": 214,
    "type1": "bug",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": true
  },
  "murkrow": {
    "id": 198,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "houndstone": {
    "id": 972,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "flabebe": {
    "id": 669,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "slowking-galar": {
    "id": 10172,
    "type1": "poison",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "mewtwo": {
    "id": 150,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "parasect": {
    "id": 47,
    "type1": "bug",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "kabutops": {
    "id": 141,
    "type1": "rock",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "mesprit": {
    "id": 481,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bewear": {
    "id": 760,
    "type1": "normal",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "helioptile": {
    "id": 694,
    "type1": "electric",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "zamazenta-crowned": {
    "id": 10189,
    "type1": "fighting",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "shroodle": {
    "id": 944,
    "type1": "poison",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "bibarel": {
    "id": 400,
    "type1": "normal",
    "type2": "water",
    "has_shiny": true,
    "has_female": true
  },
  "palafin-hero": {
    "id": 10256,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "azelf": {
    "id": 482,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "impidimp": {
    "id": 859,
    "type1": "dark",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "tapu-lele": {
    "id": 786,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "urshifu-rapid-strike-gmax": {
    "id": 10227,
    "type1": "fighting",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "flamigo": {
    "id": 973,
    "type1": "flying",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "pinsir-mega": {
    "id": 10040,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "mimikyu-busted": {
    "id": 10143,
    "type1": "ghost",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "swadloon": {
    "id": 541,
    "type1": "bug",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "raichu-alola": {
    "id": 10100,
    "type1": "electric",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "bellossom": {
    "id": 182,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "feebas": {
    "id": 349,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "shroomish": {
    "id": 285,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sinistea": {
    "id": 854,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "oricorio-sensu": {
    "id": 10125,
    "type1": "ghost",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "maschiff": {
    "id": 942,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hoopa-unbound": {
    "id": 10086,
    "type1": "psychic",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "toxapex": {
    "id": 748,
    "type1": "poison",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "sawk": {
    "id": 539,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "turtonator": {
    "id": 776,
    "type1": "fire",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "grumpig": {
    "id": 326,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "fezandipiti": {
    "id": 1016,
    "type1": "poison",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "skarmory": {
    "id": 227,
    "type1": "steel",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "wartortle": {
    "id": 8,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "groudon": {
    "id": 383,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "poochyena": {
    "id": 261,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "frogadier": {
    "id": 657,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "charjabug": {
    "id": 737,
    "type1": "bug",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "komala": {
    "id": 775,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "minior-indigo-meteor": {
    "id": 10134,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "squawkabilly": {
    "id": 931,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "palossand": {
    "id": 770,
    "type1": "ghost",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "galvantula": {
    "id": 596,
    "type1": "bug",
    "type2": "electric",
    "has_shiny": true,
    "has_female": false
  },
  "basculegion-female": {
    "id": 10248,
    "type1": "water",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "xatu": {
    "id": 178,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "qwilfish-hisui": {
    "id": 10234,
    "type1": "dark",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "numel": {
    "id": 322,
    "type1": "fire",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "dugtrio-alola": {
    "id": 10106,
    "type1": "ground",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "eevee-starter": {
    "id": 10159,
    "type1": "normal",
    "type2": "",
    "has_shiny": false,
    "has_female": false
  },
  "quilladin": {
    "id": 651,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "seismitoad": {
    "id": 537,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "eiscue-noice": {
    "id": 10185,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "moltres-galar": {
    "id": 10171,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "terapagos": {
    "id": 1024,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "venusaur-gmax": {
    "id": 10195,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "rapidash-galar": {
    "id": 10163,
    "type1": "psychic",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "blissey": {
    "id": 242,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "graveler": {
    "id": 75,
    "type1": "rock",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "minior-green-meteor": {
    "id": 10132,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "falinks": {
    "id": 870,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "venipede": {
    "id": 543,
    "type1": "bug",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "iron-valiant": {
    "id": 1006,
    "type1": "fairy",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "purrloin": {
    "id": 509,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chespin": {
    "id": 650,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gothorita": {
    "id": 575,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "flapple": {
    "id": 841,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "grovyle": {
    "id": 253,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "weepinbell": {
    "id": 70,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "butterfree-gmax": {
    "id": 10198,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "clamperl": {
    "id": 366,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zygarde-50-power-construct": {
    "id": 10119,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "cradily": {
    "id": 346,
    "type1": "rock",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "gyarados": {
    "id": 130,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "corviknight": {
    "id": 823,
    "type1": "flying",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "simisage": {
    "id": 512,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "cloyster": {
    "id": 91,
    "type1": "water",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "flittle": {
    "id": 955,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "solgaleo": {
    "id": 791,
    "type1": "psychic",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "roselia": {
    "id": 315,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "minior-indigo": {
    "id": 10141,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "hydrapple": {
    "id": 1019,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "honedge": {
    "id": 679,
    "type1": "steel",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "pangoro": {
    "id": 675,
    "type1": "fighting",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "iron-treads": {
    "id": 990,
    "type1": "ground",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "deoxys": {
    "id": 386,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "wingull": {
    "id": 278,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "meowth-alola": {
    "id": 10107,
    "type1": "dark",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-original-cap": {
    "id": 10094,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "centiskorch-gmax": {
    "id": 10220,
    "type1": "fire",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "finizen": {
    "id": 963,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "phione": {
    "id": 489,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kangaskhan": {
    "id": 115,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "zygarde-complete": {
    "id": 10120,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "rotom-wash": {
    "id": 10009,
    "type1": "electric",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "bounsweet": {
    "id": 761,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pidgeotto": {
    "id": 17,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "minior-yellow": {
    "id": 10138,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "ogerpon": {
    "id": 1017,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "azurill": {
    "id": 298,
    "type1": "normal",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "iron-jugulis": {
    "id": 993,
    "type1": "dark",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "gorebyss": {
    "id": 368,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "drapion": {
    "id": 452,
    "type1": "poison",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "farfetchd-galar": {
    "id": 10166,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bonsly": {
    "id": 438,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kricketune": {
    "id": 402,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "ursaring": {
    "id": 217,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "gogoat": {
    "id": 673,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "salandit": {
    "id": 757,
    "type1": "poison",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "spidops": {
    "id": 918,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lurantis": {
    "id": 754,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chewtle": {
    "id": 833,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lunatone": {
    "id": 337,
    "type1": "rock",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "gourgeist-small": {
    "id": 10030,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "ursaluna-bloodmoon": {
    "id": 10272,
    "type1": "ground",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "piloswine": {
    "id": 221,
    "type1": "ice",
    "type2": "ground",
    "has_shiny": true,
    "has_female": true
  },
  "roserade": {
    "id": 407,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": true
  },
  "giratina-origin": {
    "id": 10007,
    "type1": "ghost",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "drednaw-gmax": {
    "id": 10214,
    "type1": "water",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "crawdaunt": {
    "id": 342,
    "type1": "water",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "archeops": {
    "id": 567,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "tornadus-therian": {
    "id": 10019,
    "type1": "flying",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "scyther": {
    "id": 123,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "ducklett": {
    "id": 580,
    "type1": "water",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "jolteon": {
    "id": 135,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "oricorio": {
    "id": 741,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "voltorb": {
    "id": 100,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "oricorio-pom-pom": {
    "id": 10123,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "meltan": {
    "id": 808,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "farfetchd": {
    "id": 83,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "scizor": {
    "id": 212,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": true
  },
  "eevee": {
    "id": 133,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "mimikyu": {
    "id": 778,
    "type1": "ghost",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "ponyta-galar": {
    "id": 10162,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "ninjask": {
    "id": 291,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "gothita": {
    "id": 574,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "klink": {
    "id": 599,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pawniard": {
    "id": 624,
    "type1": "dark",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "pancham": {
    "id": 674,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dodrio": {
    "id": 85,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": true
  },
  "lombre": {
    "id": 271,
    "type1": "water",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "noivern": {
    "id": 715,
    "type1": "flying",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "boltund": {
    "id": 836,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "swoobat": {
    "id": 528,
    "type1": "psychic",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "slugma": {
    "id": 218,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "taillow": {
    "id": 276,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "okidogi": {
    "id": 1014,
    "type1": "poison",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "togetic": {
    "id": 176,
    "type1": "fairy",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "landorus": {
    "id": 645,
    "type1": "ground",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "wimpod": {
    "id": 767,
    "type1": "bug",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "tatsugiri": {
    "id": 978,
    "type1": "dragon",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "pumpkaboo-large": {
    "id": 10028,
    "type1": "ghost",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "zapdos-galar": {
    "id": 10170,
    "type1": "fighting",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "sableye-mega": {
    "id": 10066,
    "type1": "dark",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "rotom-mow": {
    "id": 10012,
    "type1": "electric",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "perrserker": {
    "id": 863,
    "type1": "steel",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "lokix": {
    "id": 920,
    "type1": "bug",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "audino": {
    "id": 531,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "chi-yu": {
    "id": 1004,
    "type1": "dark",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "stoutland": {
    "id": 508,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "toxtricity-low-key": {
    "id": 10184,
    "type1": "electric",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "sandy-shocks": {
    "id": 989,
    "type1": "electric",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "landorus-therian": {
    "id": 10021,
    "type1": "ground",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "throh": {
    "id": 538,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "tranquill": {
    "id": 520,
    "type1": "normal",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "nidoran-f": {
    "id": 29,
    "type1": "poison",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "suicune": {
    "id": 245,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "grotle": {
    "id": 388,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bidoof": {
    "id": 399,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "minior-red": {
    "id": 10136,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "corviknight-gmax": {
    "id": 10212,
    "type1": "flying",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "eiscue": {
    "id": 875,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "altaria": {
    "id": 334,
    "type1": "dragon",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "stonjourner": {
    "id": 874,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "gimmighoul-roaming": {
    "id": 10263,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "herdier": {
    "id": 507,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "oranguru": {
    "id": 765,
    "type1": "normal",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "steelix-mega": {
    "id": 10072,
    "type1": "steel",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "orbeetle": {
    "id": 826,
    "type1": "bug",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "guzzlord": {
    "id": 799,
    "type1": "dark",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "meloetta-pirouette": {
    "id": 10018,
    "type1": "normal",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "archaludon": {
    "id": 1018,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "entei": {
    "id": 244,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "toedscruel": {
    "id": 949,
    "type1": "ground",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "poliwrath": {
    "id": 62,
    "type1": "water",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "zygarde-10-power-construct": {
    "id": 10118,
    "type1": "dragon",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "morpeko-hangry": {
    "id": 10187,
    "type1": "electric",
    "type2": "dark",
    "has_shiny": false,
    "has_female": false
  },
  "minior-blue-meteor": {
    "id": 10133,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "toxtricity": {
    "id": 849,
    "type1": "electric",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "maushold-family-of-three": {
    "id": 10257,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "minior-green": {
    "id": 10139,
    "type1": "rock",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "tinkatuff": {
    "id": 958,
    "type1": "fairy",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-sinnoh-cap": {
    "id": 10096,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "enamorus": {
    "id": 905,
    "type1": "fairy",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "mew": {
    "id": 151,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "scizor-mega": {
    "id": 10046,
    "type1": "bug",
    "type2": "steel",
    "has_shiny": true,
    "has_female": false
  },
  "mismagius": {
    "id": 429,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "magearna-original": {
    "id": 10147,
    "type1": "steel",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "arcanine-hisui": {
    "id": 10230,
    "type1": "fire",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "munna": {
    "id": 517,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "rotom-heat": {
    "id": 10008,
    "type1": "electric",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "flygon": {
    "id": 330,
    "type1": "ground",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "aromatisse": {
    "id": 683,
    "type1": "fairy",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "bulbasaur": {
    "id": 1,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "weezing-galar": {
    "id": 10167,
    "type1": "poison",
    "type2": "fairy",
    "has_shiny": true,
    "has_female": false
  },
  "aipom": {
    "id": 190,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "yamask": {
    "id": 562,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "passimian": {
    "id": 766,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "serperior": {
    "id": 497,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "barraskewda": {
    "id": 847,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dragapult": {
    "id": 887,
    "type1": "dragon",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "dusclops": {
    "id": 356,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "jynx": {
    "id": 124,
    "type1": "ice",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "yungoos": {
    "id": 734,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "castform-snowy": {
    "id": 10015,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "stunky": {
    "id": 434,
    "type1": "poison",
    "type2": "dark",
    "has_shiny": true,
    "has_female": false
  },
  "mewtwo-mega-y": {
    "id": 10044,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kleavor": {
    "id": 900,
    "type1": "bug",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "servine": {
    "id": 496,
    "type1": "grass",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "girafarig": {
    "id": 203,
    "type1": "normal",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": true
  },
  "marowak-alola": {
    "id": 10115,
    "type1": "fire",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "sceptile-mega": {
    "id": 10065,
    "type1": "grass",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "nihilego": {
    "id": 793,
    "type1": "rock",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "grafaiai": {
    "id": 945,
    "type1": "poison",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "sizzlipede": {
    "id": 850,
    "type1": "fire",
    "type2": "bug",
    "has_shiny": true,
    "has_female": false
  },
  "medicham": {
    "id": 308,
    "type1": "fighting",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": true
  },
  "yanmega": {
    "id": 469,
    "type1": "bug",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "runerigus": {
    "id": 867,
    "type1": "ground",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "greavard": {
    "id": 971,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "relicanth": {
    "id": 369,
    "type1": "water",
    "type2": "rock",
    "has_shiny": true,
    "has_female": true
  },
  "yamask-galar": {
    "id": 10179,
    "type1": "ground",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "heliolisk": {
    "id": 695,
    "type1": "electric",
    "type2": "normal",
    "has_shiny": true,
    "has_female": false
  },
  "glastrier": {
    "id": 896,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "dubwool": {
    "id": 832,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "spoink": {
    "id": 325,
    "type1": "psychic",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "porygon-z": {
    "id": 474,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "budew": {
    "id": 406,
    "type1": "grass",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "haxorus": {
    "id": 612,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "skwovet": {
    "id": 819,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "groudon-primal": {
    "id": 10078,
    "type1": "ground",
    "type2": "fire",
    "has_shiny": true,
    "has_female": false
  },
  "sewaddle": {
    "id": 540,
    "type1": "bug",
    "type2": "grass",
    "has_shiny": true,
    "has_female": false
  },
  "blaziken": {
    "id": 257,
    "type1": "fire",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": true
  },
  "duskull": {
    "id": 355,
    "type1": "ghost",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "luxio": {
    "id": 404,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": true
  },
  "linoone": {
    "id": 264,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "goomy": {
    "id": 704,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "remoraid": {
    "id": 223,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "popplio": {
    "id": 728,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "basculegion": {
    "id": 902,
    "type1": "water",
    "type2": "ghost",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-cosplay": {
    "id": 10085,
    "type1": "electric",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kyogre": {
    "id": 382,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "castform-sunny": {
    "id": 10013,
    "type1": "fire",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "emolga": {
    "id": 587,
    "type1": "electric",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "baxcalibur": {
    "id": 998,
    "type1": "dragon",
    "type2": "ice",
    "has_shiny": true,
    "has_female": false
  },
  "nosepass": {
    "id": 299,
    "type1": "rock",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sliggoo": {
    "id": 705,
    "type1": "dragon",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "hitmontop": {
    "id": 237,
    "type1": "fighting",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "luvdisc": {
    "id": 370,
    "type1": "water",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sliggoo-hisui": {
    "id": 10241,
    "type1": "steel",
    "type2": "dragon",
    "has_shiny": true,
    "has_female": false
  },
  "purugly": {
    "id": 432,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "starmie": {
    "id": 121,
    "type1": "water",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "aggron": {
    "id": 306,
    "type1": "steel",
    "type2": "rock",
    "has_shiny": true,
    "has_female": false
  },
  "darmanitan-zen": {
    "id": 10017,
    "type1": "fire",
    "type2": "psychic",
    "has_shiny": true,
    "has_female": false
  },
  "cubchoo": {
    "id": 613,
    "type1": "ice",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "kabuto": {
    "id": 140,
    "type1": "rock",
    "type2": "water",
    "has_shiny": true,
    "has_female": false
  },
  "trapinch": {
    "id": 328,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "pheromosa": {
    "id": 795,
    "type1": "bug",
    "type2": "fighting",
    "has_shiny": true,
    "has_female": false
  },
  "iron-moth": {
    "id": 994,
    "type1": "fire",
    "type2": "poison",
    "has_shiny": true,
    "has_female": false
  },
  "miraidon-glide-mode": {
    "id": 10271,
    "type1": "electric",
    "type2": "dragon",
    "has_shiny": false,
    "has_female": false
  },
  "miltank": {
    "id": 241,
    "type1": "normal",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "whiscash": {
    "id": 340,
    "type1": "water",
    "type2": "ground",
    "has_shiny": true,
    "has_female": false
  },
  "talonflame": {
    "id": 663,
    "type1": "fire",
    "type2": "flying",
    "has_shiny": true,
    "has_female": false
  },
  "pikachu-starter": {
    "id": 10158,
    "type1": "electric",
    "type2": "",
    "has_shiny": false,
    "has_female": false
  },
  "cascoon": {
    "id": 268,
    "type1": "bug",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  },
  "sandslash": {
    "id": 28,
    "type1": "ground",
    "type2": "",
    "has_shiny": true,
    "has_female": false
  }
}