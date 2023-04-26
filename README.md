This simple React app displays a button with the text "Follow" and the current
number of followers, initially set to 100,500. When the user clicks the button,
the text changes to "Following", the button color changes, and the number of
followers increases by one.

The app uses a personal backend created with the UI service mockapi.io, which
contains fields for id, user, tweets, followers, and avatar. React Router is
also used for routing.

Routes:

'/' – Home component, the landing page. '/tweets' - Tweets component, a page
that displays tweets.

There is also a Back button that returns to the home page. If a user visits a
non-existent route, they are redirected to the main page.

The app also has a filter function with a Dropdown with three options: show all,
follow, and followings. When the user selects an option, the tweets are filtered
based on the selected option.
