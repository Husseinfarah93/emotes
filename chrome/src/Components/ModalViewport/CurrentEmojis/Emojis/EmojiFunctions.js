/*
Keep list/suffix tree for emoji lookup

Functions 
- Filter by keystroke input
- Generate Initial Emoji list 
- isShort Available?

{ 	
	"grinning": {
			"unicode":"1f600",
			"unicode_alt":"",
			"code_decimal":"&#128512;",
			"name":"grinning face",
			"shortname":":grinning:",
			"category":"people",
			"emoji_order":"1",
			"aliases":[],
			"aliases_ascii":[],
			"keywords":["happy","smiley","emotion"]
	}
}

*/

const emotesJSON = require('./EmojiBank.json')

const convertJSONToGroups = (obj) => {
	let keys = Object.keys(obj), returnObj = {}
	for(let i = 0; i < keys.length; i++) {
		let o = obj[keys[i]]
    o.numUsed = 0
		o.imageSrc = `./static/assets/png/${o.unicode}.png`
		if(returnObj[o.category]) returnObj[o.category].push([o])
		else returnObj[o.category] = [o]
	}
	return returnObj
}

const converted = convertJSONToGroups(emotesJSON)

export default converted