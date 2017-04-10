const expect = require('chai').expect
const idiom = require('..').default

describe('#idiom', function() {
	it('If the word ends with "ar", those two letters are removed', function () {
		const translation = idiom("Programar")
		expect(translation).to.equal("Program")
	})
	it('If the word starts with Z, "pe" is added at the end', function () {
		const translation = idiom("Zorro")
		expect(translation).to.equal("Zorrope")
	})
	it('If the translated word has 10 or more letters, it must split in half in half and join with a half dash', function () {
		const translation = idiom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it('Finally, if the original word is a palindrome, no previous rule counts and returns the same word but inserting uppercase and lowercase letters', function () {
		const translation = idiom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")		
	})
})