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

#### Method:

- getter method for the array of characters
- getter method for each character
- getter method for images 
- getter method for the array of quizzes
- getter method for each quiz
- getter method for text
- gettter method for number of users read
- mutator method for adding and removing characters
- mutator method for changing the background
- mutator method for adding and removing quizzes
- mutator method for changing text
- mutator method for number of users read

#### Collaborators

- Quizzes
  - store an array of quizzes
  - add/remove quizzes out of array
- Characters
  - store an array of quizzes
  - add/remove quizzes out of array
- Users
  - count number of users read