# The Lost World


## Setting
In a post apocalyptic world, earth is polluted and uninhabitable. Humans have been forced to live in bunkers deep under the ground, and send out androids to do the work of making earth inhabitable again. 

## Game Design

By either clicking a resource node or resources in a building inventory, they get transferred into the global inventory.

### Buildings

The player can place buildings on the map. 
Buildings might cost different resources that are consumed from the global inventory when placing the building.
A building can have the requirement to be build on a certain tzpe of terrain (for example resource node).

Each building can have a function. If we want to keep it simple this is a recipe:
 - input (optional, multiple)
 - processing time
 - output (maybe multiple but limiting on a single one might simplify things)
 
Each building has an inventory. The inventory has a certain amount of slots:
 - max capacity
 - type: input / output / storage
 
Examples:
 - Miner (different types might mine different resources)
 - Constructor:
   - one building per recipe 
   - a recipe selection in the building but have different types depending on recipe groups
   - different types of constructors depending on number of recipe inputs
 - Storage to create buffer

### Logistics

The function of logistics is to move items between buildings:
 - conveyor 
 - splitter (maybe merger)
 - intersection / tunnel (we need to implement a way for conveyors to cross)
 - teleportation ??? (not sure about this, might make it to easy)
 
For simplicity I would say each can only process one item at the time. 
But we can have versions with different speed (stretch goal :D).

We need to decide how logistics interact with buildings:
 - Do buildings have fixed input and output points?
 - Is only the output fixed and they accept from all directions? (this might be the easiest)
 - Do they output in any available direction and accept from any?

### Progression

Each milestone will require a certain number of items in the global inventory.
When all the resources are present, the milestone is completed and new unlocks (buildings or recipes) are granted.
Then the next milestone is automatically selected. If the last milestone is completed the player wins.

### Electricity (stretch goal that we have to cut anyway)

Buildings need electricity to operate which has be produced by another type of building.
The building might need resources that are converted or just takes up space and is slow.
Electricity might have a simplified logistic system to be distributed across buildings.

## Work to do

- right click to cancel
- r for rotate building
- milestone unlocked feedback
- alternative thumbnails for showing in build menu

Bug fixes:

- fix demolish

Maybe:

- show which resource is insufficient
- help / tutorial
- ask artist for better assets
