---
layout: layouts/update.njk
title: Sprint 6 (Feb 16 - Feb 20, 2026)
subtitle: Content Freeze Week!
author: Blog Author
date: 2026-02-20
description: All content should be complete (Week 6).
tags: [minimum viable, design, partial animation, playable]
featuredImage: https://picsum.photos/800/400?random=3
---

## **Sprint #6 2/16-2/20 - Content Freeze Week!**
---
**Production Goals for the Week**:

| System Goals |  Asset Goals | Documentation Goals | Playtesting Goals |
| --- | --- | --- | --- |
| Asset integration | Writing: iterate on narrative & dialogue | Website 2nd draft (content more refined and formatted) | QA Testing: what major or minor bugs, issues, and tweaks remain? |
| Bug logging | Audio: revisions on music, tweaking soundscape and mixing |   |   |
|   | Design: iterate and playtest |   |   |

---
With the end of our project approaching fast, the team pushed hard to get a lot done. On the tech side, we changed the architecture behind scene swapping to reset the state of the game rather than trying to preserve state across all rooms. We also removed leaf pile mode and switched to focusing on leaf dash mode in response to the feedback we received during playtesting. We finished the hurt component which allows us to mark which entities can “get hurt” giving us a more modular and scalable system, and started working on a timer for the grab ability. We coded the wind zones to give infinite leaf dash or prevent player leaf dash within them and made tileable components for the wind zones and ice spikes. Additionally, we implemented the heater, character portrait emotion switching, and the bronze pipe system which the player can use to traverse rooms. The pipes also spit the player out at a high speed when they reach the other end. We added a scrolling credits page and added color modulation to the leaf meter bar in the HUD (heads-up display). Lastly in tech, one of our contractors started working on optimizing  the game’s performance by removing unnecessary draw calls. 

After getting valuable feedback last week, our designers put together 5 tutorial rooms and 10 new level rooms. They also almost finished grayboxing the last of the non-gameplay narrative rooms. We completed the third draft of the dialogue and started updating the existing cutscenes and adding new ones. For audio, we worked on making some footstep sound effects and started matching higher quality instruments to the existing music. We also began drafting the main theme. One of our contractors worked on implementing beep speech for each of our characters as well as ambiance sounds like cold wind, crystals, and fire.

On the art side, we implemented our main characters' jump animation and our companion characters' walk animation. We updated the graphic for the interact prompt and animated that as well. Our contractors did a lot of work as well. They added level transitions, film grain, and made particle effects for death and respawn. They also finished the following assets:
- Wood floor tiles
- Stone floor tiles
- Winston (antagonist) stills
- Bronze pipe sections
- Medieval space heater

**Check out the release from this week!**
[Release 5](https://projectmisfits.github.io/releases/release5/)