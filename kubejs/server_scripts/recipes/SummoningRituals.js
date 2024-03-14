onEvent('recipes', (event) => {
	// UNBURNED BOSS
event.recipes.summoningrituals.altar("pyromancer:fractal_cucumber")
	.mobOutput('pyromancer:unburned')
	.input('5x #minecraft:sand', '5x minecraft:blaze_powder');
	// Blue Skies GateKeeper
event.recipes.summoningrituals.altar("minecraft:emerald")
	.mobOutput('blue_skies:gatekeeper')
	.input('4x pyromancer:molten_pyrowood', '5x minecraft:blaze_powder')
	.sacrifice('minecraft:ghast');	
	// MCA villagers
event.recipes.summoningrituals.altar("minecraft:emerald")
	.mobOutput('mca:male_villager')
	.input('blue_skies:soul_fragment', '5x minecraft:soul_sand')
	.sacrifice('tfc:boar');
	
event.recipes.summoningrituals.altar("minecraft:emerald")
	.mobOutput('mca:female_villager')
	.input('2x blue_skies:soul_fragment', '5x minecraft:soul_sand')
	.sacrifice('tfc:pig');
});

