# Feed Reader application testing

The purpose of this project is to learn the basics of unit testing using [Jasmine](http://jasmine.github.io/).


## Steps needed to complete the project

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

## Project specification

| Criteria | Meets specifications |
|----------|----------|
| All Required Tests Provided     | The required tests for the project (`RSS Feed` testing, `RSS Feed` properties, menu default state, and menu hiding/showing) are all provided and are comprehensive enough to adequately test the functionality.      |
|     | Tests should be independent of one another.     |
| Passing    | All required tests for the project pass. |
| README | A `README` file is included detailing all steps required to successfully run the application.|
| Comments | Comments are present and effectively explain longer code procedures.|
| Code Quality | Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html). |

## How to run the application

1. Clone the repo onto your computer with `git clone https://github.com/AleksCreative/Udacity-Front-End-Nanodegree-projects.git`

2. Open **02_FEND_Nanodegree-2018\Project05 - Feed reader\frontend-nanodegree-feedreader** folder

3. Open `index.html` file in your browser. The tests will appear at the bottom of the screen.

## How to edit the application

Go to **jasmine/spec/** folder and open `feedreader.js` in your favourite code editor. You can see all the tests are running from this file. Feel free to add more tests.

If you want to start from scratch you can clone the original project files from Udacity's repo below:
`git clone https://github.com/udacity/frontend-nanodegree-feedreader.git`

### Happy coding!
