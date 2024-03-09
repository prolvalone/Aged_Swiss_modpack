onEvent('recipes', (event) =>{
// normal milk
event.recipes.tfc.barrel_sealed([Fluid.of('tfc:milk_vinegar', 1000), 'minecraft:bucket'], [Fluid.of('minecraft:milk', 900), ('tfc:bucket/vinegar')], 100),
event.recipes.tfc.barrel_sealed([Fluid.of('tfc:curdled_milk', 1)], [Fluid.of('tfc:milk_vinegar', 1)], 8000)




});     