onEvent('recipes', event => {
  event.shapeless('create:sand_paper', ['minecraft:paper', '#forge:sand']),
  event.shapeless('minecraft:honeycomb', ['firmalife:beeswax', 'firmalife:raw_honey'])
});