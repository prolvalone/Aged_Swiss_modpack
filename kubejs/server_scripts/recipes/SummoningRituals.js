onEvent('recipes', (event) => {
event.recipes.summoningrituals.altar("pyromancer:fractal_cucumber")
	.mobOutput('pyromancer:unburned')
	.input('5x #minecraft:sand', '5x minecraft:blaze_powder');
	
event.recipes.summoningrituals.altar("tfc:gem/emerald")
	.mobOutput('blue_skies:gatekeeper')
	.input('4x pyromancer:molten_pyrowood', '5x minecraft:blaze_powder')
	.sacrifice('minecraft:ghast');	
});

