# HangTheLandlord


Hang the Landlord was initially meant to be a hangman style game but evolved in a multip answer quiz

# User Experience (UX)

The user is incredibly simple and intutive, everything is clearly labeled and it is also accessible for people with disibilites!

 ## First Time User

 1. I want to know exactly what i am doing and where i going the moment i get to the site.
 2. I want to be able to play a competent game with little to now gus
 3. I want feedback from the quiz itself, so i know weather i have a question right or wrong!

## Regular User
 1. I want to be able to come back whenever I want and still have a good time and the game evolve. Maybe have new questions added now and then.

 # The scope

 1. I wanted people to have fun with the game.
 2. Wanted it be easy to read and look at with compromising on the looks

 Like my last project I know a lot of people love music and this is a nice little game where they can test thier knowledge. It is a very varied quiz, ranging from 30's jazz all the way up to modern day pop. 

 # Structure

 The structure for the project started out quite massive, but i quickly realised that if i wanted to make something that was competant and stable, I would need to scale back my efforts. I had intitaly planned for the project to be a hang man based game, hence the name, but i shifted gears and wanted to go for a more tradional quiz with a who wants to be a millionaire twist to it. The user has to try and answer 20 questions with out getting any wrong. You get 20 right and you win it is a simple as that but it is harder than meets the eye. The questions are completely randomised and any can come up from the very hard ones to the easy ones at any point. As I was saying before the structure is very easy and simple and should be instantly familer to anyone who has taken part in any quiz or watched one on telly. It is a simple and clean layout with bold colours but not hard on the eyes either.

 # Wireframes

[Splash](/assets/images/Splash-screen-wireframe.png) Screen
[Main](/assets/images/main-game-wireframe.png) Game

 # Features

## implemented
 1. Greeted with a splash screen of a concert image.
 2. Play button to take you to the main page itself.
 3. Once you are in the page you will see in the top right there is a rules button with completely take over the page, and then to get rid of it just click the rules button again.
 4. Something that you don't see unless you either win or fail is your score is incrimenting when you get an answer correct.
 5. What you do see however is the a visual feedback of whether an answer was correct or not, the answer box will either go green or red depending on a right or wrong answer.
 6. Finally there is a message that will appear at the end of the game to either tell you, you are amazing or you have failed!

## features to implement

1. I would like to add a timer to the quiz, I was close to getting one but I couldn't get it working quite correctly.
2. I would also like to add an api from the opentrivia api so i don't have to write out all the questions make the code cluttered
3. I would like to add a difficulty system, so the more answers you get right the harder it gets. I did try to add this in but the code became very cluttered and unwieldly, I decided ultimatley to leave it for now and add it later.
4. Finally I would like to add in the future a hint system like in the real who wants to be a millionaire but with this one you only get one hint for the whole game. The was realistically never going to be attempted in this project due to the fact I already had to write out all my questions my self, it just felt uneccassery for the time being.

# Technologies Used

### Languages:
-[HTML](https://en.wikipedia.org/wiki/HTML5)
-[CCS](https://en.wikipedia.org/wiki/CSS)
-[Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Libaries:
-[Google Fonts](https://fonts.google.com/) Staatliches and Open Sans fonts used.
-[Balsamiq](https://balsamiq.com/) Balsamiq was used to make my wireframes and general design of my website.

### Version Control:
-[GitHub](https://github.com/) GitHub was used for storage of code and deployment of page via GitHub Pages.
-[GitPod](https://www.gitpod.io/) GitPod was used as the primary editor and also to push and commit my code.

### Other:
-[Google Dev Tools](https://developer.chrome.com/docs/devtools/) Google Chrome Dev Tools was a huge help in discovering bugs and figuring out the solution before actually
commiting it to my own code.

-[Code Institute](https://codeinstitute.net/) The Code Institute is where all my current coding knowledge has come from.


# Testing and Bugs

## Testing functions

### showRules
- The show rules function does exactly what it is says on the tin! It shows the rules through an event listener and closes again once the rules button has been pressed.

### DisplayQuestions
- This function displays the questions, it was a bit of a faff to get it to work as intended but it loops through the questions array and and randomizes them. It then draws the questions it has chosen and brings out the answers to be displayed on screen for the user.

### startGame
- This function once again is pretty self explainatory. It starts the game, but it does reset the UserScore and QuestionNumber so that it is starting clean everytime.

## Playing the game
- starting the game works as intended, all you have to do is press the start button it generates the first questions lets you pick your answers

- selecting the correct answer turns the answer box green and the there is 1 second delay to then generate the next question and clear the green background.

- selecting the wrong answer turns the answer box red for 1 second and then runs the function end game. the end game functions does two different things depending on your score but in this case it displays a message in the question box which reads ,Awwww unlucky, you lost! Your score is ${userScore}, and as you can see at the end it grabs your score and displays it

- clicking through all the right questions will increment the question number. Once that question reaches 20 the game ends and you have a score of 20, which will then display the other part of the end game function which is, Wow! You really are a music god! Well Done, 

- Once the game has run that end game function the only way of then restarting the game is to press start game again.

- you can also access the rules by pressing the rules button

## Testing user stories

## New User Stories

### I want to know exactly what i am doing and where i going the moment i get to the site.
- When you first enter the page you will be greeted by the splash screen with the logo and bright orange play button. Keeps it is simple and intuitive as possible for the user. They will also see more orange buttons as they through the page ahead.

### I want to be able to play a competent game with little to now bugs or fuss
- Once the user clicks the play button makes thier way into the main game page they can view the rules who if they are really eager they can jump right into it and play with zero bugs with the game itself. 

### I want feedback from the quiz itself, so i know weather i have a question right or wrong!
- When the user gets a question wrong they will get visual feedback in the way of a green box for correct and a red box for wrong. Now the this is not very accessible for people who are hard of seeing so this is something that should and will be addressed in the future to have not only a visual cue not an audio one too, but for the most part you will know when you have get it right or wrong.

## Regular user stories

### I want to be able to come back whenever I want and still have a good time and the game evolve. Maybe have new questions added now and then.
- Now the user can keep coming back to the site and continue they're knowledge, as more and more questions get added to the game. What would make this a better experience I think would be the inclusion of an API that can pull down a tonne of questions. Thats to say you can't keep coming back now as new questions will be added manually along as new features to look forward too.

## Device Testing
- I have tested on the following devices

- Google Pixel 4XL
- Moto G 5G Plus
- Samsung Galaxy A21
- Samsung Galaxy A12
- Moto E Macro
- Lenovo Tab P11
- Amazon Fire Tablet 10"
- iPhone 12 Pro
- iPhone 11 Pro
- Google Chromebook
- Windows 10 PC - 1920x1080 + 3840x2160

No reported issues on any of these devices

## Bugs
- The only known bug is that after losing the game and tapping start game the color red would stay as the background color instead of disapearing.
*UPDATE FIXED*
- I have fixed the bug by adding a timeout on line 287 of JS file, everything works fine now.

# Deployment

-I started a new repository with a new template by going on to your profile and clicking the green "new" button. 
I Named mine StringUpMusic.
-Once the Repository is created I clicked on the GitPod button to load the workspace.
-Once in I created a README.md file and index.html file. assets, images and css folders.
-When I have finished doing that I added those files and folders to the staging area by doing the
git add * command. Then do the "intital commit" and push them with git push.
-I then went back to the GitHub Repo and went to settings, scrolled down to GitHub pages and selected
master from the source dropdown.
-Then my page was created, with a GitHub.io url

# Credits
James Q Quick from youtube, his set of youtube videos helped me a bunch when trying to figure out how to the quiz itself. Specifically [This](https://www.youtube.com/watch?v=zZdQGs62cR8&list=RDCMUC-T8W79DN6PBnzomelvqJYw&index=3&ab_channel=JamesQQuick) Video

[Hero-Image](https://unsplash.com/photos/xOwbxDSaoXI)