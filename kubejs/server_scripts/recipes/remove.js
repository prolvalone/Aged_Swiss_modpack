onEvent('recipes', (event) => {

  // Remove recipes by recipe ID.
  [
  //create
    event.remove({id: 'create:crafting/materials/andesite_alloy'}),
   event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'}),
   event.remove({id: 'create:mixing/materials/andesite_alloy'}),
   event.remove({id: 'create:mixing/materials/andesite_alloy_from_zinc'}),
   event.remove({id: 'immersiveengineering:crafting/blastbrick'}),
	 event.remove({id: 'create:item_application/andesite_casing_using_deployer'}),
   event.remove({id: 'create:item_application/andesite_casing_from_wood'}),
   event.remove({id: 'create:item_application/brass_casing_using_deployer'}),
   event.remove({id: 'create:item_application/brass_casing_from_wood'}),
   event.remove({id: 'create:item_application/copper_casing_using_deployer'}),
   event.remove({id: 'create:item_application/copper_casing_from_wood'}),
   event.remove({id: 'create:item_application/railway_casing_from_wood'}),
   event.remove({id: 'create:item_application/railway_casing_using_deployer'}),
   event.remove({id: 'create:crafting/kinetics/millstone'}),
    event.remove({id: 'create:item_application/andesite_casing_from_log_using_deployer'}),
   event.remove({id: 'create:item_application/andesite_casing_from_log'}),
   event.remove({id: 'create:item_application/brass_casing_from_log_using_deployer'}),
   event.remove({id: 'create:item_application/brass_casing_from_log'}),
   event.remove({id: 'create:item_application/copper_casing_from_log_using_deployer'}),
   event.remove({id: 'create:item_application/copper_casing_from_log'}),
   event.remove({id: 'create:item_application/railway_casing_from_log'}),
   event.remove({id: 'create:item_application/railway_casing_from_log_using_deployer'}),
   event.remove({id: 'minecraft:hopper'}),
   event.remove({id: 'create:crafting/kinetics/mechanical_press'}),
   event.remove({id: 'create:crafting/kinetics/basin'}),
   event.remove({id: 'create:crafting/kinetics/depot'}),
event.remove({id: 'create:crafting/kinetics/deployer'}),
event.remove({id: 'immersiveengineering:crafting/treated_wood_horizontal'}),
event.remove({id: 'create:crafting/kinetics/spout'}),
event.remove({id: 'blue_skies:furnace_compat'}),
event.remove({id: 'essentials:saddle'}),
event.remove({id: 'blue_skies:zeal_lighter'}),   
event.remove({id: 'crossroads:firebox'}), 
event.remove({id: 'crossroads:crucible'}), 	   
event.remove({id: 'crossroads:smelter'}), 	   
 event.remove({id: 'create:crafting/kinetics/steam_engine'}),	   
 event.remove({id: 'littlelogistics:tug'}),	   
event.remove({id: 'littlelogistics:steam_locomotive'}),
event.remove({id: 'littlelogistics:transmitter_component'}),  
event.remove({id: 'minecraft:minecart'}), 
event.remove({id: 'littlelogistics:vessel_charger'}),
event.remove({id: 'rosia:crafting/blocks/steam_generator'}),
event.remove({id: 'create:pressing/iron_ingot'}),
event.remove({id: 'framedblocks:framed_soul_torch'}),
event.remove({id: 'framedblocks:framed_torch'}),
event.remove({id: 'immersiveengineering:blastfurnace/steel'}),
event.remove({id: 'electrodynamics:plate_steel'}),
event.remove({id: 'electrodynamics:plate_iron'}),
event.remove({id: 'electrodynamics:plate_bronze'}),
event.remove({id: 'electrodynamics:plate_steel'}),
event.remove({id: 'beyond_earth:steel_ingot_blasting'}),
event.remove({id: 'minecraft:observer'}),
event.remove({id: 'aerielhell:observer_from_aerialhell_materials'}),
event.remove({id: 'minecraft:dried_kelp_block'}),
event.remove({id: 'minecraft:dried_kelp'}),
event.remove({id: 'thermal:machines/press/unpacking/press_dried_kelp_unpacking'}),
event.remove({id: 'vs_eureka:engine'}),
event.remove({id: 'create:milling/wheat'}),
event.remove({id: 'vs_eureka:ballast'}),
event.remove({id: 'create:crafting/kinetics/belt_connector'}),
event.remove({id: 'create:mixing/chocolate'})
  ].forEach((itemID) => event.remove({output: itemID}));
});