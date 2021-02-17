# Graded Project - Mahanoro Station

![Design preview for the Mahanoro station coding challenge](./design/1.png)

## The challenge

Your challenge is to build out this app and get it working with **redux**, **compound components** and **styled components**, while making it look as close to the design as possible.

This is a website that will allow us to reserve some seats in _"Taxi brousses"_ departing from Mahanoro station.

Your users should be able to:

- Pick a city from the city list
- See the available trips to that city, and pick one where seats are still availalable
- Select one or more seats in the car, and see how much it's going to cost
- Confirm the booking
- See their confirmed bookings on the 'My account'page
- Modify their own information, like name or phone number, on that same page.

## Where to find everything

Your task is to build out the project to the designs from this Figma link: https://www.figma.com/file/6gSAJpaedebKAUuaM4ekFR/Mahanoro-Station?node-id=4%3A38

The data from the trips are available on this link : https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but I recommend you to use **Netlify**.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead how your data and reducers will look like.

## Submit your project

You have until **Tuesday** at **15h30** to submit your github link and netlify link on this form : https://forms.gle/ikBWC2MokmdH4jdw6

**Have fun building!** 🚀

## Report

In this project, I fetched the data from a given link which contains trips inside of actions index file. For the startup, the reducer for the trips is taking the trips from state file and that trips state is now receiving nothing until the data in getTrips action function is loaded. When the data is loaded, I can use that trips state to display where the properties deed to be displayed.

### Project Structure.
    - State:
I have a state file where I declare some useful properties for this project. 
Actions:
I have action functions inside of actions `index`. Those function will be called wherever I want to change any property from state.
    - Reducers:
Inside of reducers `index` file, I have reducers that set or change the values of state properties.

#### Components:
	- Header: 
This header component is for setting a navigation that displays two links – `Home` and `MyAccount` that lead to an Account page and Home page.
	- Cities:
The Cities component is for displaying trips from data, and when the user clicks on any of destinations list that are shown on the page, the user will see and can chose from any available trips from the direction that user has chosen. Not only that but also, from that `trips`, clicking on any of Book a seat buttons will show a lot of seats that user can book.

    - Destination: 
Destination component is only for showing the available seats from destination that user has chosen according to the the id link `to={`/trip/${destination.id}`}` that is passed to the params. And from here he can find seats to book. Also it shows some information about that trip.

    - SeatItem and MyAccount
They are just for displaying things - SeatItem is for the list of seats from one direction that was selected. Also for some proprties that need to be displayed. But the MyAccount component is for the user's data, where user can chage his account which is now doesn't work yet and for the bookings that user has booked.

### Challenging part

Displaying the bookings in the Account page is the most challenging part, when I select some seats from one trip and go to the Account page,it is fine for the first time. But when I select seats from another trip, the current selected seats are added to the new ones. So if I selected 3 seats from the current trip and 4 seats from the new trip, the seats in the new trip is going to be 7. 

### Things to improve

The account updating is not yet done because I was stuck with the seats booking. But I hope it could have been done if I got more time. As importand as that, I wanted to use compond components but the time wasn't enough for doing that so I focused more on the redux part. Also I haven't done styling.  



