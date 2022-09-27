# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Chloe Albright**

Link to project: (https://glitch.com/edit/#!/codepath-game)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](Gamewin.gif)
![](Gamelose.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Used information given from pre-work page]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[Tracing out the logic for the guess function was probably the most challenging part, not because it was difficult but because I'm more familiar with writing in C++. Even though the logic for the guess function was given, I decided to write a decision tree to trace out the particular order I wanted to structure the code in. For example: what are the 2 base cases for the guess function if the game is active? It's either a match or it's not. If it's not a match, then the prompt should call game over, otherwise it needs to continue evaluating the conditions. Overall, it was fun to mess around with.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Most of my web development questions would be at the entry level, such as "how do I add a pixelated background and make the buttons rotate (i.e make the buttons move up, down, left, and right) while the game is playing?" or "how do I create a moving background while the game is playing?". A more basic question I'd have for my own reference would be "what notes and resources have you found most helpful in developing a clear step by step understanding of web development?".]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would probably switch up the patterns and generate different sounds for each game, and possibly play around with the design aspects of it. 
For example, I would prefer to generate different sounds each time the game starts to keep it interesting. Generating different patterns would also entice the user to play more. As far as design, I would darken the background graphics and change it to something reminiscent of an 80s or Y2K videogame because it's more aesthetically pleasing (and in line with the user demographic I'm interested in- GenZ and nostalgic Millennials). After implementing all of the changes it would probably be a different game entirely except for the aspect of the repeating sounds.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/fb59defa07b543f09225b49f1626e682)


## License

    Copyright [Chloe Albright]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
