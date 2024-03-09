onEvent('item.tags', event => {
  //plates unfication
event.add('forge:plates/bismuth','tfc:metal/sheet/bismuth'),
event.add('forge:plates/bronze','tfc:metal/sheet/bronze'),
event.add('forge:plates/brass','tfc:metal/sheet/brass'),
event.add('forge:plates/copper','tfc:metal/sheet/copper'),
event.add('forge:plates/gold','tfc:metal/sheet/gold'),
event.add('forge:plates/nickel','tfc:metal/sheet/nickel'),
event.add('forge:plates/zinc','tfc:metal/sheet/zinc'),
event.add('forge:plates/iron','tfc:metal/sheet/wrought_iron'),
event.add('forge:plates/steel','tfc:metal/sheet/steel'),
event.add('forge:plates/electrum','tfc_ie_addon:metal/sheet/electrum'),
event.add('forge:plates/constantan','tfc_ie_addon:metal/sheet/constantan'),
event.add('forge:plates/aluminum','tfc_ie_addon:metal/sheet/aluminum'),
event.add('forge:plates/lead','tfc_ie_addon:metal/sheet/lead'),
event.add('forge:plates/uranium','tfc_ie_addon:metal/sheet/uranium'),
// tfc stick log + kelp
event.add('tfc:pit_kiln_logs','tfc:stick_bundle'),
event.add('tfc:firepit__logs','tfc:stick_bundle'),
event.add('minecraft:dried_kelp','minecraft:dried_kelp'),
event.add('minecraft:dried_kelp','tfc:food/dried_kelp'),
// wrought iron
event.add('forge:ingots/iron','tfc:metal/ingot/wrought_iron'),
// slime
event.add('forge:slimeballs', 'tfc:glue')
})