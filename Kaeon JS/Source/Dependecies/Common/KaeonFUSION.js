var philosophersStone = require("./PhilosophersStone");
var fusion = require("./FUSION");

class Use extends fusion.FUSIONUnit {

	constructor() {

		super();

		this.fusion = null;
	}

	verify(element) {

		if(this.fusion == null)
			this.fusion = philosophersStone.get(this, ["FUSION"])[0];

		return element.content.toLowerCase() == "use";
	}

	process(element, processed) {

		for(var i = 0; i < element.children.length; i++) {

			try {
				require(element.children[i].content).aether(this.fusion);
			}

			catch(error) {
				
			}
		}
	}
}

class KaeonFUSION extends fusion.FUSION {
	
	constructor() {

		super();

		this.tags.push("Kaeon FUSION");

		philosophersStone.connectMutually(this, new Use(), false);
	}
}

module.exports = {

	Use,
	KaeonFUSION
};