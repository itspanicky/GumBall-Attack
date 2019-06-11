# GumBall Attack

## Background and Overview
GumBall Attack is a simple game with basic controls. The gameplay involves controlling a character left or right while dodging bouncing giant gumballs. The character can also shoot projectiles straight up, which on impact with a gumball will split the gumball into two smaller gumballs.

Although a seemingly easy concept, GumBall Attack becomes more difficult as there are more bouncing gumballs.

The inspiration for GumBall Attack comes a game called Bubble Struggle, which I played countless times for hours as a kid.

## Functionality and MVP
### Functionality
- Users can press left/right arrow keys to most in that direction.
- Circles (gumballs) will bounce within the border of the game.
- Gumballs will split into two smaller gumballs when it collides with a projectile
- The game ends when all lives are lost and a life is lost when a gumball collides with the player.

### MVP
- Interactive starting screen
- Player can move avatar
- Avatar can shoot projectile that can collide with gumball
- Gumballs can bounce along walls of app
- Gumballs can split into a two smaller gumballs upon collision with a projectile
- Gumballs can cause lost of life or game over upon collision with avatar 
- Lives can be tracked
- Score can be tracked

## Wireframe
![alt text](assets/images/Wireframe.png)

The app will consist of a transparent starting screen with the gumballs bouncing in the background. There will be a play button, a instructions button, a scoreboard button, a mute button, and links to the Github repository and developer LinkedIn.

When hitting the play button, the game will start immediately with the avatar rendering on the screen and the starting screen will fade out.

When the game is over, a replay button will render.

## Architecture and Technologies
- Vanilla javascript for game logic.
- HTML5 canvas for game rendering.
- Web Audio API to handle music and sound effect.
- Webpack to bundle scripts into a single source.

## Implementation and Timeline
#### Day 1:
- Board design
#### Day 2:
- Avatar rendering and functionality
- Gumball rendering
#### Day 3:
- Gumball functionality
- Projectile rendering and functionality
#### Day 4:
- Score rendering
- Finish game
#### Day 5:
- Style page
- Bonus features
## Bonus features
- item pick up for different projectiles
- scoreboard save to database