onEvent('recipes', (event) =>{
	event.recipes.create.deploying('create:brass_casing', ['immersiveengineering:treated_wood_horizontal', 'tfc:metal/sheet/brass'])
const metals =[
"bismuth",
"bismuth_bronze",
"black_bronze",
"bronze",
"brass",
"copper",
"gold",
"nickel",
"rose_gold",
"silver",
"tin",
"zinc",
"sterling_silver",
"wrought_iron",
"cast_iron",
"steel",
"black_steel",
"blue_steel",
"red_steel"
]	
const ieMetals =[
"aluminum",
"lead",
"uranium"
]
const orePieces =[
"native_copper",
"native_gold",
"hematite",
"native_silver",
"cassiterite",
"garnierite",
"bismuthinite",
"malachite",
"magnetite",
"limonite",
"sphalerite",
"tetrahedrite"
]	
const arborLogs =[
"eucalyptus",
"mahogany",
"baobab",
"hevea",
"tualang",
"teak",
"cypress",
"fig",
"rainbow_eucalyptus",
"black_oak",
"gum_arabic",
"redcedar",
"rubber_fig"
]	
const firmaLogs =[
"acacia",
"birch",
"douglas_fir",
"maple",
"pine",
"spruce",
"willow",
"ash",
"blackwood",
"hickory",
"oak",
"rosewood",
"sycamore",
"aspen",
"chestnut",
"kapok",
"palm",
"sequoia",
"white_cedar"
]
const TFCgems =[
"topaz",
"sapphire",
"ruby",
"pyrite",
"opal",
"lapis_lazuli",
"diamond",
"amethyst"
//minecraft:emerald
]
/************** Milling *********/
//{
	//////// QUARTZ
event.recipes.create.milling('tfc_ie_addon:mineral/quartz_shard', 'tfc_ie_addon:mineral/quartz_block'),
////// gem powders
	event.recipes.create.milling('4x tfc:powder/amethyst', 'tfc:ore/amethyst'),
	event.recipes.create.milling('4x tfc:powder/diamond', 'tfc:ore/diamond'),
	event.recipes.create.milling('4x tfc:powder/emerald', 'tfc:ore/emerald'),
	event.recipes.create.milling('4x tfc:powder/lapis_lazuli', 'tfc:ore/lapis_lazuli'),
	event.recipes.create.milling('4x tfc:powder/opal', 'tfc:ore/opal'),
	event.recipes.create.milling('4x tfc:powder/ruby', 'tfc:ore/ruby'),
	event.recipes.create.milling('4x tfc:powder/sapphire', 'tfc:ore/sapphire'),
	event.recipes.create.milling('4x tfc:powder/topaz', 'tfc:ore/topaz'),
	event.recipes.create.milling('8x minecraft:redstone', 'tfc:ore/cinnabar'),
	event.recipes.create.milling('8x minecraft:redstone', 'tfc:ore/cryolite'),
///////// non-gems powders
	event.recipes.create.milling('4x tfc:powder/charcoal', 'minecraft:charcoal'),
	event.recipes.create.milling('4x tfc:powder/coke', 'thermal:coal_coke'),
	event.recipes.create.milling('4x thermal:sulfur_dust', 'tfc:ore/sulfur')
	event.recipes.create.milling('4x tfc:powder/saltpeter', 'tfc:ore/saltpeter'),
	event.recipes.create.milling('tfc:ore/gypsum', 'tfc:rock/raw/limestone'),
	event.recipes.create.milling('2x tfc:olive_paste', 'tfc:food/olive'),
	event.recipes.create.milling('4x immersiveengineering:dust_coke', 'tfc:ore/graphite'),
	event.recipes.create.milling('4x tfc:powder/salt', 'tfc:ore/halite'),
	event.recipes.create.milling('6x tfc:powder/flux', 'tfc:ore/borax'),
	event.recipes.create.milling('2x tfc:powder/flux', '#tfc:fluxstone'),
///// size dependant ores
	//hematite
	event.recipes.create.milling('2x tfc:powder/hematite', 'tfc:ore/small_hematite'),
	event.recipes.create.milling('5x tfc:powder/hematite', 'tfc:ore/normal_hematite'),
	event.recipes.create.milling('3x tfc:powder/hematite', 'tfc:ore/poor_hematite'),
	event.recipes.create.milling('7x tfc:powder/hematite', 'tfc:ore/rich_hematite'),
	//kaolonite
	event.recipes.create.milling('4x tfc:powder/kaolinite', 'tfc:ore/kaolinite'),

	//limonite
	event.recipes.create.milling('2x tfc:powder/limonite', 'tfc:ore/small_limonite'),
	event.recipes.create.milling('5x tfc:powder/limonite', 'tfc:ore/normal_limonite'),
	event.recipes.create.milling('3x tfc:powder/limonite', 'tfc:ore/poor_limonite'),
	event.recipes.create.milling('7x tfc:powder/limonite', 'tfc:ore/rich_limonite'),
	//malachite
	event.recipes.create.milling('2x tfc:powder/malachite', 'tfc:ore/small_malachite'),
	event.recipes.create.milling('5x tfc:powder/malachite', 'tfc:ore/normal_malachite'),
	event.recipes.create.milling('3x tfc:powder/malachite', 'tfc:ore/poor_malachite'),
	event.recipes.create.milling('7x tfc:powder/malachite', 'tfc:ore/rich_malachite'),
	//sylvite
	event.recipes.create.milling('2x tfc:powder/sylvite', 'tfc:ore/sylvite')
//}
/*********Pressing + Compacting *************************/
//{
//iron blooms
event.recipes.create.pressing('tfc:metal/ingot/wrought_iron', 'tfc:refined_iron_bloom'),
event.recipes.create.pressing('tfc:refined_iron_bloom', 'tfc:raw_iron_bloom'),
// Pig Iron to Steel
event.recipes.create.pressing('tfc:metal/ingot/high_carbon_steel', 'tfc:metal/ingot/pig_iron'),
event.recipes.create.pressing('tfc:metal/ingot/steel', 'tfc:metal/ingot/high_carbon_steel'),
//////////// Rosia ////////////////////
// invar
event.recipes.create.compacting('rosia:invar_double_ingot', '2x rosia:invar_ingot'),
event.recipes.create.compacting('rosia:invar_double_sheet', '2x rosia:invar_sheet'),
event.recipes.create.compacting('rosia:invar_sheet', 'rosia:invar_double_ingot'),
// purple steel
event.recipes.create.compacting('rosia:purple_steel_double_ingot', '2x rosia:purple_steel_ingot'),
event.recipes.create.compacting('rosia:purple_steel_double_sheet', '2x rosia:purple_steel_sheet'),
event.recipes.create.pressing('rosia:purple_steel_sheet', 'rosia:purple_steel_double_ingot'),
//////////////// FirmaLife ///////////////////////
// chromite
event.recipes.create.compacting('firmalife:metal/double_ingot/chromium', '2x firmalife:metal/ingot/chromium'),
event.recipes.create.compacting('firmalife:metal/double_sheet/chromium', '2x firmalife:metal/sheet/chromium'),
event.recipes.create.pressing('firmalife:metal/sheet/chromium', 'firmalife:metal/double_ingot/chromium'),
// stainless steel
event.recipes.create.compacting('firmalife:metal/double_ingot/stainless_steel', '2x firmalife:metal/ingot/stainless_steel'),
event.recipes.create.compacting('firmalife:metal/double_sheet/stainless_steel', '2x firmalife:metal/sheet/stainless_steel'),
event.recipes.create.pressing('firmalife:metal/sheet/stainless_steel', 'firmalife:metal/double_ingot/stainless_steel'),
///////////////////////////// TFC + IE Addon///////////////////////////////////
// Electrum
event.recipes.create.compacting('tfc_ie_addon:metal/double_ingot/electrum', '2x immersiveengineering:ingot_electrum'),
event.recipes.create.pressing('tfc_ie_addon:metal/sheet/electrum', 'tfc_ie_addon:metal/double_ingot/electrum'),
// Constantan
event.recipes.create.compacting('tfc_ie_addon:metal/double_ingot/constantan', '2x immersiveengineering:ingot_constantan'),
event.recipes.create.pressing('tfc_ie_addon:metal/sheet/constantan', 'tfc_ie_addon:metal/double_ingot/constantan'),
// Aluminum
event.recipes.create.compacting('tfc_ie_addon:metal/double_ingot/constantan', '2x immersiveengineering:ingot_constantan'),
event.recipes.create.pressing('tfc_ie_addon:metal/sheet/constantan', 'tfc_ie_addon:metal/double_ingot/constantan'),
// Lead
event.recipes.create.compacting('tfc_ie_addon:metal/double_ingot/lead', '2x immersiveengineering:ingot_lead'),
event.recipes.create.pressing('tfc_ie_addon:metal/sheet/lead', 'tfc_ie_addon:metal/double_ingot/lead'),
// Uranium
event.recipes.create.compacting('tfc_ie_addon:metal/double_ingot/uranium', '2x immersiveengineering:ingot_uranium'),
event.recipes.create.pressing('tfc_ie_addon:metal/sheet/uranium', 'tfc_ie_addon:metal/double_ingot/uranium')

for (const metal of metals) {
    event.recipes.create.pressing(`tfc:metal/sheet/${metal}`, `tfc:metal/double_ingot/${metal}`)
	event.recipes.create.compacting(`tfc:metal/double_ingot/${metal}`, `2x tfc:metal/ingot/${metal}`),
	event.recipes.create.compacting(`tfc:metal/double_sheet/${metal}`, `2x tfc:metal/sheet/${metal}`)
	event.remove({id: `create:pressing/${metal}_ingot`})
  }	
//}
/***********CRUSHING************************/
//{
// TFC_IE metals
for (const metals of ieMetals){
event.recipes.create.crushing(`4x create:crushed_raw_${metals}`, `tfc_ie_addon:ore/rich_${metals}`),
event.recipes.create.crushing(`3x create:crushed_raw_${metals}`, `tfc_ie_addon:ore/normal_${metals}`),
event.recipes.create.crushing(`2x create:crushed_raw_${metals}`, `tfc_ie_addon:ore/poor_${metals}`),
event.recipes.create.crushing(`1x create:crushed_raw_${metals}`, `tfc_ie_addon:ore/small_${metals}`)
}
// firmalife chromium
event.recipes.create.crushing('chemlib:chromium_dust', 'firmalife:ore/small_chromite'),
event.recipes.create.crushing('2x chemlib:chromium_dust', 'firmalife:ore/poor_chromite'),
event.recipes.create.crushing('3x chemlib:chromium_dust', 'firmalife:ore/normal_chromite'),
event.recipes.create.crushing('4x chemlib:chromium_dust', 'firmalife:ore/rich_chromite')
//small ore pieces
for (const small of orePieces){
	var dustType = "";
	if (small != "bismuthinite"){
		if (small == "native_copper" || small == "malachite" || small == "tetrahedrite")
			dustType = "copper";
		else if (small == "hematite" || small == "magnetite" || small =="limonite")
			dustType = "iron";
		else if (small == "sphalerite")
			dustType = "zinc";
		else if (small == "cassiterite")
			dustType = "tin";
		else if (small == "native_silver")
			dustType = "silver";
		else if (small == "garnierite")
			dustType = "nickel";
		else if (small == "native_gold")
			dustType = "gold";
		
		event.recipes.create.crushing(`create:crushed_raw_${dustType}`, `tfc:ore/small_${small}`)
	}
	else if (small == "bismuthinite")
		event.recipes.create.crushing(`chemlib:bismuth_dust`, `tfc:ore/small_${small}`)	                       
}
//poor ore pieces
for (const small of orePieces){
	var dustType = "";
	if (small != "bismuthinite"){
		if (small == "native_copper" || small == "malachite" || small == "tetrahedrite")
			dustType = "copper";
		else if (small == "hematite" || small == "magnetite" || small =="limonite")
			dustType = "iron";
		else if (small == "sphalerite")
			dustType = "zinc";
		else if (small == "cassiterite")
			dustType = "tin";
		else if (small == "native_silver")
			dustType = "silver";
		else if (small == "garnierite")
			dustType = "nickel";
		else if (small == "native_gold")
			dustType = "gold";
		
		event.recipes.create.crushing(`2x create:crushed_raw_${dustType}`, `tfc:ore/poor_${small}`)
	}
	else if (small == "bismuthinite")
		event.recipes.create.crushing(`2x chemlib:bismuth_dust`, `tfc:ore/poor_${small}`)	                       
}
// medium ore pieces
for (const small of orePieces){
	var dustType = "";
	if (small != "bismuthinite"){
		if (small == "native_copper" || small == "malachite" || small == "tetrahedrite")
			dustType = "copper";
		else if (small == "hematite" || small == "magnetite" || small =="limonite")
			dustType = "iron";
		else if (small == "sphalerite")
			dustType = "zinc";
		else if (small == "cassiterite")
			dustType = "tin";
		else if (small == "native_silver")
			dustType = "silver";
		else if (small == "garnierite")
			dustType = "nickel";
		else if (small == "native_gold")
			dustType = "gold";
		
		event.recipes.create.crushing(`3x create:crushed_raw_${dustType}`, `tfc:ore/normal_${small}`)
	}
	else if (small == "bismuthinite")
		event.recipes.create.crushing(`3x chemlib:bismuth_dust`, `tfc:ore/normal_${small}`)	                       
}
// rich ore pieces 
for (const small of orePieces){
	var dustType = "";
	if (small != "bismuthinite"){
		if (small == "native_copper" || small == "malachite" || small == "tetrahedrite")
			dustType = "copper";
		else if (small == "hematite" || small == "magnetite" || small =="limonite")
			dustType = "iron";
		else if (small == "sphalerite")
			dustType = "zinc";
		else if (small == "cassiterite")
			dustType = "tin";
		else if (small == "native_silver")
			dustType = "silver";
		else if (small == "garnierite")
			dustType = "nickel";
		else if (small == "native_gold")
			dustType = "gold";
		
		event.recipes.create.crushing(`4x create:crushed_raw_${dustType}`, `tfc:ore/rich_${small}`)
	}
	else if (small == "bismuthinite")
		event.recipes.create.crushing(`4x chemlib:bismuth_dust`, `tfc:ore/rich_${small}`)	                       
}
//}
/***************** Sawing / Cutting *************/
//{
for (const logs of firmaLogs){
	event.recipes.create.cutting(`10x tfc:wood/lumber/${logs}`, `tfc:wood/log/${logs}`),
	event.recipes.create.cutting(`10x tfc:wood/lumber/${logs}`, `tfc:wood/stripped_log/${logs}`)
}
for (const gems of TFCgems){
	event.recipes.create.cutting(`tfc:gem/${gems}`, `tfc:ore/${gems}`)
}
event.recipes.create.cutting("minecraft:emerald", "tfc:ore/emerald")
////////// ARBORFIRMACRAFT Logs /////////////
//{	
event.recipes.create.cutting("10x afc:wood/lumber/eucalyptus", "afc:wood/log/eucalyptus"),
event.recipes.create.cutting("10x afc:wood/lumber/eucalyptus", "afc:wood/stripped_log/eucalyptus"),

event.recipes.create.cutting("10x afc:wood/lumber/mahogany", "afc:wood/log/mahogany"),
event.recipes.create.cutting("10x afc:wood/lumber/mahogany", "afc:wood/stripped_log/mahogany"),

event.recipes.create.cutting("10x afc:wood/lumber/baobab", "afc:wood/log/baobab"),
event.recipes.create.cutting("10x afc:wood/lumber/baobab", "afc:wood/stripped_log/baobab"),

event.recipes.create.cutting("10x afc:wood/lumber/hevea", "afc:wood/log/hevea"),
event.recipes.create.cutting("10x afc:wood/lumber/hevea", "afc:wood/stripped_log/hevea"),

event.recipes.create.cutting("10x afc:wood/lumber/tualang", "afc:wood/log/tualang"),
event.recipes.create.cutting("10x afc:wood/lumber/tualang", "afc:wood/stripped_log/tualang"),

event.recipes.create.cutting("10x afc:wood/lumber/teak", "afc:wood/log/teak"),
event.recipes.create.cutting("10x afc:wood/lumber/teak", "afc:wood/stripped_log/teak"),

event.recipes.create.cutting("10x afc:wood/lumber/cypress", "afc:wood/log/cypress"),
event.recipes.create.cutting("10x afc:wood/lumber/cypress", "afc:wood/stripped_log/cypress"),

event.recipes.create.cutting("10x afc:wood/lumber/fig", "afc:wood/log/fig"),
event.recipes.create.cutting("10x afc:wood/lumber/fig", "afc:wood/stripped_log/fig"),

event.recipes.create.cutting("10x afc:wood/lumber/eucalyptus", "afc:wood/log/rainbow_eucalyptus"),

event.recipes.create.cutting("10x tfc:wood/lumber/oak", "afc:wood/log/black_oak"),

event.recipes.create.cutting("10x tfc:wood/lumber/acacia", "afc:wood/log/gum_arabic"),

event.recipes.create.cutting("10x afc:wood/lumber/fig", "afc:wood/log/rubber_fig"),

event.recipes.create.cutting("10x afc:wood/lumber/cypress", "afc:wood/log/redcedar"),
//}

//{/************Smoking **************/
event.smoking('tfc:food/dried_kelp','tfc:plant/leafy_kelp'),
event.smoking('tfc:food/dried_kelp','tfc:plant/winged_kelp'),
event.blasting('minecraft:stone', '#forge:cobblestone'),
//}
/************ Filling **************/
event.recipes.create.filling('create:chocolate_glazed_berries', ['#tfc:foods/fruits', Fluid.of('firmalife:chocolate', 250)]),
event.recipes.create.filling('create:chocolate_glazed_berries', ['#tfc:foods/apples', Fluid.of('#forge:honey', 250)])
});
