import recipesImage from './images/web-projects/odin-recipes.png'
import landingPageImage from './images/web-projects/landing-page.png'
import rockPaperScissorsImage from './images/web-projects/paper-rock-scissors.png'
import etchASketchImage from './images/web-projects/etch-a-sketch.png'
import calculatorImage from './images/web-projects/calculator.png'
import signupFormImage from './images/web-projects/signup-form.png'
import adminDashboardImage from './images/web-projects/admin-dashboard.png'
import libraryImage from './images/web-projects/library.png'
import ticTacToeImage from './images/web-projects/tic-tac-toe.png'
import restaurantPageImage from './images/web-projects/restaurant-page.png'
import todoListImage from './images/web-projects/todo-list.png'
import weatherAppImage from './images/web-projects/weather-app.png'
import battleshipImage from './images/web-projects/battleship.png'
import cvProjectImage from './images/web-projects/cv-project.png'
import memoryCardImage from './images/web-projects/memory-card-react.png'
import storeImage from './images/web-projects/store-react.png'
import waldoImage from './images/web-projects/waldo.png'
// import portfolioImage from './images/web-projects/portfolio.png'
import kivyBookImage from './images/books/Kivy.png'
import pvBookImage from './images/books/PhrasalVerbs.png'
import pythonCourseImage from './images/courses/Python Jumpstart Course.png'
import numpyCourseImage from './images/courses/Introduction to numpy Course.png'
import blenderCourseImage from './images/courses/Blender Jumpstart Course.png'
import pvCourseImage from './images/courses/Phrasal Verbs Course.png'
import tensesCourseImage from './images/courses/English Tenses Course.png'
import panda3DMagazineImage from './images/magazines/Your Panda3D Magazine.png'
import aeMagazineImage from './images/magazines/Your American English Magazine.png'

const data = {
  sections: [
    {
      id:0,
      sectionName: 'Web Projects',
      expanded: true,
      items: [
        {
          id: 0,
          title: 'Recipes',
          image: {recipesImage},
          description: "This is my first web project, a very basic one, with just some HTML and no CSS or JavaScript. There are just a couple links that you can follow to see some recipes (image, description, ingredients and steps).",
          links: [
            { url: 'https://github.com/prospero-apps/odin-recipes', destination: 'github' },
            { url: 'https://prospero-apps.github.io/odin-recipes', destination: 'live' },
          ],
          technologies: ['html']
        },
        {
          id: 1,
          title: 'Landing Page',
          image: {landingPageImage},
          description: "This is my second project, this time with some CSS, but still no JavaScript, so the website is not functional at all.",
          links: [
            { url: 'https://github.com/prospero-apps/landing-page', destination: 'github' },
            { url: 'https://prospero-apps.github.io/landing-page', destination: 'live' },
          ],
          technologies: ['html', 'css']
        },
        {
          id: 2,
          title: 'Rock Paper Scissors',
          image: {rockPaperScissorsImage},
          description: "In this third project I finally added some simple JavaScript, as a script inside the HTML file. The styling is not optimal. Anyway, simple as it is, the game is functional.",
          links: [
            { url: 'https://github.com/prospero-apps/paper-rock-scissors', destination: 'github' },
            { url: 'https://prospero-apps.github.io/paper-rock-scissors', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 3,
          title: 'Etch A Sketch',
          image: {etchASketchImage},
          description: "This is a sort of painting app when you can draw by hovering your mouse over a canvas of squared. They're then filled in with a random color. You can also change the resolution.",
          links: [
            { url: 'https://github.com/prospero-apps/etch-a-sketch', destination: 'github' },
            { url: 'https://prospero-apps.github.io/etch-a-sketch', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 4,
          title: 'Calculator',
          image: {calculatorImage},
          description: "Yet another basic, but functional app with some basic JavaScript. You can use this calculator to perform all basic arithmetic operations. You can also use floating-point and negative numbers.",
          links: [
            { url: 'https://github.com/prospero-apps/calculator', destination: 'github' },
            { url: 'https://prospero-apps.github.io/calculator', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 5,
          title: 'Sign-up Form',
          image: {signupFormImage},
          description: "This is a dummy sign-up form with data validation. All you have to do is just fill in a couple of fields and read the error message if you input no or wrong data.",
          links: [
            { url: 'https://github.com/prospero-apps/signup-form', destination: 'github' },
            { url: 'https://prospero-apps.github.io/signup-form', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 6,
          title: 'Admin Dashboard',
          image: {adminDashboardImage},
          description: "This is just a dummy dashboard with links that lead nowhere. Here the grid element is implemented to visually organize the page. The code is pretty repetitive, though.",
          links: [
            { url: 'https://github.com/prospero-apps/admin-dashboard', destination: 'github' },
            { url: 'https://prospero-apps.github.io/admin-dashboard', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 7,
          title: 'Library',
          image: {libraryImage},
          description: "This is an online library without a backend. You can view books (title, author, year of publication, language), remove existing books or add new ones, mark books as read. You can also view some statistics.",
          links: [
            { url: 'https://github.com/prospero-apps/library', destination: 'github' },
            { url: 'https://prospero-apps.github.io/library', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 8,
          title: 'Tic-Tac-Toe',
          image: {ticTacToeImage},
          description: "This version of the popular game can be played between two humans or against the computer. The scores are displayed and updated after each round. A round may end up tied.",
          links: [
            { url: 'https://github.com/prospero-apps/Tic-Tac-Toe', destination: 'github' },
            { url: 'https://prospero-apps.github.io/Tic-Tac-Toe', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript']
        },
        {
          id: 9,
          title: 'Restaurant Page',
          image: {restaurantPageImage},
          description: "This is my first project with webpack. Just a simple restaurant page where you can view a menu and contact information.",
          links: [
            { url: 'https://github.com/prospero-apps/restaurant-page', destination: 'github' },
            { url: 'https://prospero-apps.github.io/restaurant-page', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack']
        },
        {
          id: 10,
          title: 'Todo List',
          image: {todoListImage},
          description: 'You can create new lists and add todos to them. You can check as completed, edit and delete the todos as well. You can see all the lists, just the items for today or for this week. The numbers of todos in each list are also displayed.',
          links: [
            { url: 'https://github.com/prospero-apps/todo-list', destination: 'github' },
            { url: 'https://prospero-apps.github.io/todo-list', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack']
        },
        {
          id: 11,
          title: 'Weather App',
          image: {weatherAppImage},
          description: "Using this application you can check the weather in any major city around the globe. The app uses asynchronous JavaScript and calls to APIs.",
          links: [
            { url: 'https://github.com/prospero-apps/weather-app', destination: 'github' },
            { url: 'https://prospero-apps.github.io/weather-app', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack']
        },
        {
          id: 12,
          title: 'Battleship',
          image: {battleshipImage},
          description: "This is just another version of the popular game. You place your ships on a board and then play against the computer. In this project there are some tests written with Jest.",
          links: [
            { url: 'https://github.com/prospero-apps/battleship', destination: 'github' },
            { url: 'https://prospero-apps.github.io/battleship', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack', 'jest']
        },
        {
          id: 13,
          title: 'CV Project',
          image: {cvProjectImage},
          description: "This is my first React project. In this app you can fill in a form with your personal information (like name, address, experience and education) to create a CV. You can also upload a photo. There's also a preview of the CV.",
          links: [
            { url: 'https://github.com/prospero-apps/cv-project', destination: 'github' },
            { url: 'https://prospero-apps.github.io/cv-project', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack', 'react']
        },
        {
          id: 14,
          title: 'Memory Card',
          image: {memoryCardImage},
          description: "In this application your task is to click on images, which keep changing their positions each time you click on one of them. You mustn't click on any image more than once.",
          links: [
            { url: 'https://github.com/prospero-apps/memory-card-react', destination: 'github' },
            { url: 'https://prospero-apps.github.io/memory-card-react', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack', 'react']
        },
        {
          id: 15,
          title: 'Store',
          image: {storeImage},
          description: "This is an online store with some dummy product data from an API call. The app uses React routing to take you to the Home page, Products page and About page. You can also see the Details pages of the individual products. A shopping cart is implemented as well.",
          links: [
            { url: 'https://github.com/prospero-apps/store-react', destination: 'github' },
            { url: 'https://prospero-apps.github.io/store-react', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack', 'react']
        },
        {
          id: 16,
          title: 'Waldo',
          image: {waldoImage},
          description: "This is a simple version of the popular Where Is Waldo game where you have to find Waldo and some other characters in the image. This project uses Firebase as the backend.",
          links: [
            { url: 'https://github.com/prospero-apps/waldo', destination: 'github' },
            { url: 'https://prospero-apps.github.io/waldo', destination: 'live' },
          ],
          technologies: ['html', 'css', 'javascript', 'webpack', 'react', 'firebase']
        }
      ]
    },
    {
      id:1,
      sectionName: 'Books',
      expanded: true,
      items: [
        {
          id: 0,
          title: 'GUI Programming with Python and Kivy',
          image: {kivyBookImage},
          description: "This is a book for Python developers who want to create GUI apps using this language. One option is to use the Kivy library. In the book a game project is created from scratch.",
          links: [
            { url: 'https://github.com/prospero-apps/python/tree/master/GUI%20Programming%20with%20Python%20and%20Kivy%20BOOK', destination: 'github' },
            { url: 'https://www.amazon.com/Programming-Python-Kivy-Kamil-Pakula/dp/B09M9CYRCX/ref=asc_df_B09M9CYRCX/?tag=hyprod-20&linkCode=df0&hvadid=564675582183&hvpos=&hvnetw=g&hvrand=10679525743492153029&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014434&hvtargid=pla-1595705564143&psc=1', destination: 'amazon' },
          ],
          technologies: ['python']
        },
        {
          id: 1,
          title: 'Learn Over 400 Phrasal Verbs the Fun Way',
          image: {pvBookImage},
          description: "In this book you will learn over 400 hundred phrasal verbs. Phrasal verbs are verbs that consist of two parts, the actual verb and a particle, like 'stand up', 'get off' or 'turn down', to mention just a few.",
          links: [            
            { url: 'https://www.amazon.com/-/es/Kamil-Pakula/dp/B09RM5XFLS', destination: 'amazon' },
          ],
          technologies: ['english']
        }        
      ]
    },
    {
      id:2,
      sectionName: 'Online Courses',
      expanded: true,
      items: [
        {
          id: 0,
          title: 'Python Jumpstart Course',
          image: {pythonCourseImage},
          description: "A Python course for absolute beginners. Lots of examples, exercises and projects for you to do. Includes the object-oriented programming paradigm.",
          links: [
            { url: 'https://www.udemy.com/course/python-jumpstart-course', destination: 'udemy' }
          ],
          technologies: ['python']
        },
        {
          id: 1,
          title: 'Python in Science - Introduction to numpy',
          image: {numpyCourseImage},
          description: "This is a beginner course for Python developers who want to start using Python in science. numpy is the most basic library you should definitely start with.",
          links: [
            { url: 'https://www.skillshare.com/classes/Python-in-Science-%E2%80%93-Introduction-to-numpy/1418900066', destination: 'skillshare' }
          ],
          technologies: ['python']
        },
        {
          id: 2,
          title: 'Blender Jumpstart Course',
          image: {blenderCourseImage},
          description: "In this course you will learn the very basics of 3D modeling with the open-source app Blender. In the course we're building a model from scratch.",
          links: [
            { url: 'https://www.udemy.com/course/blender-jumpstart-course', destination: 'udemy' },
            { url: 'https://www.skillshare.com/classes/Blender-Jumpstart-Course/472264216', destination: 'skillshare' },
          ],
          technologies: ['blender']
        },
        {
          id: 3,
          title: 'Advanced English - Learn Over 400 Phrasal Verbs',
          image: {pvCourseImage},
          description: "In this course you will learn over 400 phrasal verbs. Phrasal verbs are very popular especially in everyday colloquial language and using them makes you sound more like a native.",
          links: [
            { url: 'https://www.udemy.com/course/advanced-english-learn-over-400-phrasal-verbs/', destination: 'udemy' },
            { url: 'https://www.skillshare.com/classes/Advanced-English-%E2%80%93-Learn-Over-400-Phrasal-Verbs/1050280779', destination: 'skillshare' },
          ],
          technologies: ['english']
        },
        {
          id: 4,
          title: 'English Tenses',
          image: {tensesCourseImage},
          description: "For many learners of English mastering English tenses isn't easy. In this course all tenses are explained with lots of examples.",
          links: [
            { url: 'https://www.skillshare.com/classes/English-Tenses/804384628', destination: 'skillshare' }
          ],
          technologies: ['english']
        }        
      ]
    },
    {
      id:3,
      sectionName: 'Magazines',
      expanded: true,
      items: [
        {
          id: 0,
          title: 'Your Panda3D Magazine',
          image: {panda3DMagazineImage},
          description: "This is the first (and so far only) issue of a magazine focused on game development with Python and the Panda3D game engine. There's also quite a lot stuff related to 3D modeling with Blender.",
          links: [
            { url: 'https://www.amazon.com/Your-Panda3D-Magazine-Kamil-Pakula-ebook/dp/B09SR785WV', destination: 'amazon' }
          ],
          technologies: ['python', 'blender']
        },
        {
          id: 1,
          title: 'Your American English Magazine',
          image: {aeMagazineImage},
          description: "This is the first (and so far only) issue of Your American English Magazine. There's quite a lot of stuff in it for you that you can use to improve your English, both grammar and vocabulary. Plus some American culture.",
          links: [
            { url: 'https://www.amazon.com/Your-American-English-Magazine-2022-ebook/dp/B09SQCZVF1', destination: 'amazon' }
          ],
          technologies: ['english']
        }
      ]
    }
  ],
  filters: {
    domain: 'all',
    techs: ['all']
  }
}

export default data