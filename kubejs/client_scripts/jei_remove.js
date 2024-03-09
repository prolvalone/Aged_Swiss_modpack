onEvent("jei.hide.items", (event) => {
  event.hide("create:red_sand_paper")
  event.hide("create:dough")

  event.hide("minecraft:kelp")
  event.hide("minecraft:dried_kelp")
  event.hide("minecraft:barrel")

  let woods = ["oak", "birch", "spruce", "acacia", "dark_oak", "jungle"]

  woods.forEach((logz) => {
    event.hide(`minecraft:${logz}_sign`)
  })

  event.hide("minecraft:candle")
  let candles = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black"
  ]
  candles.forEach((candle) => {
    event.hide(`minecraft:${candle}_candle`)
  })

  const tools = ["hoe", "axe", "shovel", "pickaxe"]


 
onEvent("jei.remove.categories", (event) => {
  console.log(event.getCategoryIds())
})
