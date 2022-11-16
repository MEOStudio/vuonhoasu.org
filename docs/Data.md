# Data Documentation

This markdown file is created for VuonHoaSu organization which includes the data based on the following description: 

- The website will store the information for Users, Stories, Characters, Quizes.
- Stories will involve Characters. When I see a story, I will see a section that list the character that involves in that story.
- Users will have username, email, achievements (as they complete Quizes).
- Quizes are tied to each story.
- Each Quiz has a number of questions.
- Each Quiz will leave an achievement for the user completed the Quiz
- Characters will have name, roles, stories, images
- Stories will have images

## Class: User

### Responsibilities:

#### Data field:

- private String username
- private String email
- private String achievements
- private array of stories
- private array of finished stories
- private int achivementCount
- private int storiesCount

#### Method:

- getter method for username
- getter method for email
- getter method for achievements
- getter method for a story with particular id
- getter method for the number of achievement
- getter method for the number of finished stories
- getter method for a finished story with particular id
- mutator method for username
- mutator method for email
- mutator method for achievements
- mutator method for adding and removing stories
- mutator method for the number of achievement
- mutator method for adding and removing finished stories
### Collaborators

- Stories
  - Store an array of unfinished stories
  - add/remove unfinished stories out of the array
  - Store an array of finished stories
  - add finished stories to the array
  
- Quizzes
  - increment the number of achievement of the user
## Class: Stories

### Responsibilities:

#### Data field:

- background image
- private array of quizzes and characters
- private String text
- private int usersCount
- private int number of correct quizzes
- pravate array of achievement

#### Method:

- getter method for the array of characters
- getter method for each character
- getter method for images 
- getter method for the array of quizzes
- getter method for each quiz
- getter method for text
- getter method for number of correct quizzes
- getter method for number of users read
- getter method for achievement with corresponding quiz
- mutator method for adding and removing characters
- mutator method for changing the background
- mutator method for adding and removing quizzes
- mutator method for changing text
- mutator method for number of users read
- mutator method for number of correct quizzes

### Collaborators

- Quizzes
  - store an array of quizzes
  - add/remove quizzes out of array
- Characters
  - store an array of quizzes
  - add/remove quizzes out of array
- Users
  - count number of users read

## Class: Quiz

### Responsibility

#### Data field

- private array of questions
- private 2D array of answers for each question
- private array of correct answer

#### Method

- getter method for correct answer with corresponding question
- getter method for array of answers
- getter method for questions

### Collaborator

- Users
  - Check the answer of the user
- Stories
  - increment the number of correct quizzes in that story

## Class: Characters

### Responsibilities

#### Data field

- private String name
- private String role
- private String stories
- image

#### Method

- getter method for name
- getter method for role
- getter method for stories
- getter method for image

### Collaborators

- Characters
  - interactor with other character
- Users
  - Show image to users