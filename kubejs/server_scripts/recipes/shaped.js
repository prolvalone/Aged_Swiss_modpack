onEvent('recipes', (event) => {

event.shaped('2x create:andesite_alloy', [
    'AB',
    'BA',
  ], {
    A: '#forge:cobblestone',
    B: 'minecraft:iron_nugget'
  });
event.shaped('3x immersiveengineering:blastbrick', [
    'ABA',
    'BCB',
	'ABA',
  ], {
    A: 'tfc:daub',
    B: 'minecraft:brick',
	C: 'tfc:metal/sheet/wrought_iron'
  }); 
event.shaped('3x create:mechanical_press', [
    'A',
    'B',
	'C',
  ], {
    A: 'create:shaft',
    B: 'create:andesite_casing',
	C: '#tfc:anvils'
  });
event.shaped('create:millstone', [
    'A',
    'B',
	'C',
  ], {
    A: 'tfc:handstone',
    B: 'create:andesite_casing',
	C: 'tfc:quern',
  });
event.shaped('create:basin', [
   
    'DBD',
	'DDD',
  ], {
    D: 'create:andesite_alloy',
	B: 'tfc:fire_clay'
  });
event.shaped('create:depot', [
   
    'AB',
  ], {
    A: 'create:andesite_alloy',
	B: 'create:andesite_casing'
  });
event.shaped('create:deployer', [
    'A',
    'B',
	'C',
  ], {
    A: 'create:andesite_alloy',
    B: 'immersiveengineering:treated_wood_horizontal',
	C: 'create:brass_hand',
  });
event.shaped('2x create:copper_casing', [
    'ABA',
    'BCB',
	'ABA',
  ], {
    B: 'create:andesite_alloy',
    A: 'minecraft:copper_ingot',
	C: '#forge:planks/wooden',
  });
event.shaped('create:andesite_casing', [
    'B',
    'A',
  ], {
    B: 'create:andesite_alloy',
    A: '#forge:planks/wooden',
	
  });
event.shaped('crossroads:firebox', [
    'ABA',
	'ACA',
	'AAA'
  ], {
    A: '#forge:cobblestone',
    C: 'tfc:crucible',
	B: 'tfc:metal/ingot/red_steel'
  });
event.shaped('crossroads:heating_crucible', [
    'ABA',
	'ACA',
	'AAA'
  ], {
    A: 'minecraft:terracotta',
    C: 'tfc:crucible',
	B: 'minecraft:air'
  });  
event.shaped('crossroads:heating_chamber', [
    'ABA',
	'ACA',
	'AAA'
  ], {
    A: 'minecraft:iron_ingot',
    C: 'crossroads:firebox',
	B: 'tfc:metal/ingot/blue_steel'
  });   
event.shaped('create:steam_engine', [
    'ABA',
	'ACA',
	'AAA'
  ], {
    A: '#forge:ingots/copper',
    C: 'crossroads:distilled_water_bucket',
	B: 'tfc:metal/sheet/gold'
  });  
event.shaped('littlelogistics:tug', [
    'ABA',
	'CDC',
	'BBB'
  ], {
    A: 'minecraft:air',
	B: 'tfc:metal/ingot/wrought_iron',
    C: 'minecraft:piston',
	D: 'create:steam_engine'
  });   
event.shaped('littlelogistics:steam_locomotive', [
    'ABA',
	'CDC',
	'BEB'
  ], {
    A: 'minecraft:air',
	B: 'tfc:metal/ingot/wrought_iron',
    C: 'minecraft:piston',
	D: 'create:steam_engine',
	E: 'littlelogistics:seater_car'
  });     
event.shaped('4x littlelogistics:transmitter_component', [
    'A',
	'B',
	'C'
  ], {
    A: 'crossroads:dust_salt',
	B: 'minecraft:glowstone_dust',
    C: 'minecraft:blue_ice'
  });    
event.shaped('rosia:steam_generator', [
    'ABA',
	'CDC',
	'EFE'
  ], {
    A: 'rosia:copper_coil',
    B: 'tfc:brass_mechanisms',
	C: 'rosia:motor',
	D: 'rosia:machine_frame',
	E: 'tfc:metal/ingot/red_steel',
	F: 'create:steam_engine'
  });    
event.shaped('minecraft:beacon', [
    'AAA',
	'ADA',
	'BBB'
  ], {
    A: 'minecraft:glass',
	B: 'minecraft:obsidian',
	D: 'minecraft:nether_star'
  });     
event.shaped('2x minecraft:torch', [
    'A',
	'B'
	
  ], {
    A: 'minecraft:glowstone_dust',
    B: '#tfc:firepit_sticks'
  }); 
event.shaped('framedblocks:framed_torch', [
    'A',
	'B'
	
  ], {
    A: 'minecraft:torch',
    B: 'framedblocks:framed_cube'
  });
event.shaped('framedblocks:framed_soul_torch', [
    'A',
	'B'
	
  ], {
    A: 'minecraft:soul_torch',
    B: 'framedblocks:framed_cube'
  });  
event.shaped('summoningrituals:altar', [
    'ABA',
    'DCD',
	'EEE',
  ], {
    B: 'minecraft:nether_star',
    A: 'tfc:candle',
	C: '#forge:planks/wooden',
	D: 'tfc:metal/sheet/gold',
	E: 'pyromancer:molten_pyrowood'
  });  
event.shaped('create:fluid_tank', [
    'A',
    'B',
	'A',
  ], {
    B: '#tfcbarrels:barrels',
    A: 'tfc:metal/sheet/copper'
  });    
event.shaped('create:item_vault', [
    'A',
    'B',
	'A',
  ], {
    B: '#tfcbarrels:barrels',
    A: 'tfc:metal/sheet/wrought_iron'
  });   
event.shaped('minecraft:enchanting_table', [
    ' A ',
    'BCB',
	'CCC',
  ], {
    A: 'minecraft:book',
    B: '#forge:gems',
	C: 'minecraft:obsidian'
  });  
event.shaped('create:belt_connector', [
	'BBB',
	'BCB'
  ], {
	B: 'tfc:food/dried_kelp',
    C: '#tfc:lumber'
  });    
event.shaped('minecraft:dried_kelp_block', [
    'AAA',
	'ABA',
	'AAA'
  ], {
    A: 'tfc:food/dried_kelp',
	B: '#forge:string'
  });    
event.shaped('vs_eureka:engine', [
    'AAA',
	'BCD',
	'EEE'
  ], {
    A: 'minecraft:stone',
	B: 'tfc:metal/ingot/wrought_iron',
	C: 'minecraft:netherite_ingot',
	D: '#forge:glass_panes',
	E: 'minecraft:smooth_stone'
  });  
event.shaped('vs_eureka:ballast', [
    'ABA',
	'BCB',
	'ABA'
  ], {
    A: '#forge:cobblestonea',
	B: '#forge:stone',
	C: 'tfc:metal/ingot/wrought_iron'
});













});