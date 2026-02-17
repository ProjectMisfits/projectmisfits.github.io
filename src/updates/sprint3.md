---
layout: layouts/update.njk
title: Sprint 3 (Jan 26 - Jan 30, 2026)
subtitle: First Playable Prototype Week!
author: Blog Author
date: 2026-01-30
description: Our first playable build (Week 3).
tags: [prototyping, design, unanimated, playable]
featuredImage: https://picsum.photos/800/400?random=3
---

## **Sprint #3 1/26-1/30 - First Playable Prototype Week!**
---
**Production Goals for the Week**:

| System Goals |  Asset Goals | Documentation Goals | Playtesting Goals |
| --- | --- | --- | --- |
| All systems integrated | Art: all character art complete | N/A | Internal Playtesting: does core game loop align with pillars of game |
| First iteration of a fully complete game | Writing: all dialogue second draft |   |   |
| Enough assets implemented for cohesive story | Design: all challenges designed and locked |   |   |
|   | Marketing: list of potential game names |   |   |

---
This week, we really pushed to have our first playable build. We finished many critical technical tasks across many different areas. For the player, we added controller support for movement and created a health system. The health system visualizes the players health and transports the player back to the start of the room when they lose all of their health. We also attached the leaf dash to a leaf meter that charges when the player moves and depletes when the player uses the leaf dash or stops moving. Lastly, we added a leaf pile state for the player.

Additionally in tech, we started grayboxing rooms and levels. We set up a room structure to streamline the process of implementing and creating rooms using entities, decals and other assets. We created a grabbable moving platform, added a base enemy class, and started creating the ice cube enemies. We also added a debug menu to help with further tech adjustments, debugging, and teleporting to different rooms for testing. On the UI side, we integrated the dialogue manager, finished all of the UI menus, and attached them to the gameplay. We also finished the heads up display (HUD) design and added a few story elements. The last big technical thing we did was start cleaning and refactoring the code as a whole. This week, we have over 55 pull requests and, with our first playable build, we held 6 internal playtesting sessions that revealed many bugs that we will address in the coming weeks.

In terms of art, we onboarded another contractor and made significant advancements on a variety of fronts. Our contractors produced a large assortment of background and scene decorations such as wall and floor tiles, pillars, lanterns, tables, pots, and more. They also finished the main character walk animation and the companion idle animation and started working on shaders. We restructured how floor and wall tiles are implemented to better fit the art assets and began implementing the contractor assets. Through playtesting, we realized that there were significant scaling issues with the art, and we took the time to create a reference sheet and measurements for all of the game assets.

Our audio contractor created a music manager and an ambiance manager and started working on implementing various sound effects into the game. For narrative, we made our dialogue easier to load into the engine and loaded the completed first draft of dialogue. We also began the second draft of dialogue and started storyboarding cutscenes. We switched our website to use 11ty instead of Jekyll and began compiling the resources that will be displayed on it. Lastly, we did a marketing push for playtesting and sent out the external playtesting sign-up to those who have indicated interest in playtesting.

**Check out the release from this week!**
[Release 2](https://projectmisfits.github.io/releases/release2/)