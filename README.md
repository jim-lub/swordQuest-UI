# Overview
These files describe the story, gameplay and technical details of `swordQuest` in order to provide a centralized store of information. This information is written to act as a guide while developing the game. `SwordQuest` is an action, adventure, 2d side-scrolling game set in a medieval fantasy setting. The protagonist ( ..you! ) is send out on a quest to rid the world of it’s demon invaders. While on this important quest you’ll be exploring a rich, detailed world filled with both friendly and enemy npcs. Equipped with a wide selection of weapons and abilities; you'll be fighting off enemies everywhere you go.

# combatTypes, classes and actionTypes
Combat will consist of a mixture of melee, ranged and magic abilities (combat-types). Each combat-type can contain one or more classes. The class groups a diverse set of abilities that fit in the style described by the class’s description. All the abilities belong to one- or several action-types; these actions depict the base effect of the ability. Currently there are four (4) action-types available: attack, heal, absorb and aura. Abilities can be mixed-and-matched from all classes; the only restriction being the required level to unlock them. There is a limited amount of slots available on the actionbar, so choose wisely!

![alt text](https://i.imgur.com/A6BRKJf.png)
![alt text](https://i.imgur.com/UTDgo83.png)
![alt text](https://i.imgur.com/knvLiHu.png)

# Abilities

## WARRIOR
> **Swordstrike**\
> ⤷ Melee ⤍ Warrior ⤍ Attack\
> Cooldown: 0s\
> _Strikes all enemies in front of you with a sweeping attack for % Physical damage._

> **Mortal Strike**\
> ⤷ Melee ⤍ Warrior ⤍ Attack\
> Cooldown: 5s\
> _A vicious strike that deals % Physical damage._

## FIRE
> **Fireball**\
> ⤷ Magic ⤍ Fire ⤍ Attack\
> Cooldown: 3s\
> _Hurls a fiery ball that causes % Fire damage._

> **Scorch**\
> ⤷ Magic ⤍ Fire ⤍ Attack\
> Cooldown: 10s\
> _Scorches an enemy for % Fire damage_

## Frost
> **Frostbolt**\
> ⤷ Magic ⤍ Frost ⤍ Attack\
> Cooldown: 10s\
> _Quickly flings a shard of ice at the target, dealing % Frost damage._

**Ice barrier**
> ⤷ Magic ⤍ Frost ⤍ Absorb\
> Cooldown: 30s\
> _Shields you with ice, absorbing % damage. The shield will expire after 30 seconds._

## SHADOW
> **Shadowbolt**\
> ⤷ Magic ⤍ Shadow ⤍ Attack\
> Cooldown: 10s\
> _Launches a bolt of shadow energy at the enemy target. Causing % shadow damage._

> **Shadowstrike**
> ⤷ Magic ⤍ Shadow ⤍ Attack\
> Cooldown: 20s\
> _Blast the target with shadow, dealing % of Shadow damage._

> **Shroud of the Shadows**\
> ⤷ Magic ⤍ Shadow ⤍ Aura\
> Cooldown: 30s\
> _Hides the player in the shadows. Greatly reducing the range in which you are spotted by enemies._

## RESTORATION
> **Heal**\
> ⤷ Magic ⤍ Restoration ⤍ Heal\
> Cooldown: 10s\
> _Heals a friendly target for %._

> **Shield**
> ⤷ Magic ⤍ Restoration ⤍ Absorb\
> Cooldown: 10s\
> _Shield a friendly target, absorbing % damage. Lasts 10 sec. While the shield holds, spellcasting will not be interrupted by damage. Once shielded, the target cannot be shielded again for 15 sec._

>**Orbs of Health**\
> ⤷ Magic ⤍ Restoration ⤍ Heal\
> Cooldown: 10s\
> _Emits % healing orbs around the player. The player or a friendly target can pick up the orbs and receive a % heal._
