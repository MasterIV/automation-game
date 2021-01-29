# Automation Game (to be named)

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

### Logistics

The function of logistics is to move items between buildings:
 - conveyor 
 - splitter (maybe merger)
 - intersection / tunnel (we need to implement a way for conveyors to cross)
 
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