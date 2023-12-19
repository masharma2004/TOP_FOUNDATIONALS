# Etch-a-Sketch

Created as part of The Odin Project curriculum.
## Functionality
Clicking inside the grid will toggle the pen function, which fills every cell when the mouse pointer leaves it.

Each cell will also be filled on a click, regardless of whether the toggle state of the grid is active.

Random 1, 2, 3 use different ranges for possible RGBa values.

Incrementally Darken will darken each cell so that it should take exactly 10 almost equal passes for each individual cell to get to black. Since sometimes the calculation of each cell's individual increment will be a decimal value, sometimes the new RGBa values will get rounded.

When the Incrementally Darken radio button is clicked, the darkening step value resets, so it will again take 10 almost equal passes for each cell to turn black.