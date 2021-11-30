# COVID-19 Data Dashboard using React.js
### Kincaid Schmitt, Andrew Haddon, Alyssa West, and Matthew Johnson

This project is a React.js application with a Python Flask backend. It pulls down COVID information from the [ISU online excel sheet](https://docs.google.com/spreadsheets/d/1aWRYSUrerFhXM0peQFLsHerHhWF1ZvFTtbfUyPN2kpA/edit#gid=945251250) and the [BSU online excel sheet](https://docs.google.com/spreadsheets/d/17BspZPppmoADS2fwmwoPjHzZPLo_q_4gi9VPyEQQX2M/edit#gid=0). It then displays this information using graphs, charts, and card components. Each school's information is displayed on a separate page that the user is able to swap between using the dropdown in the upper left corner.

## Install Dependencies

First start off by installing `Node.js` and `python`.

Once installed, run the following command to install yarn:
```
npm install yarn
```

In the Covid-Data-Dashboard\front-end directory, run the following command to download dependencies:

```
yarn build
```

To Install the Python dependencies run the command in the root:
```
pip install -r requirements.txt
```
> Note: Two terminals will be needed to run the project.

## Setup Python Flask Backend

To run the back-end, go into the Covid-Data-Dashboard\front-end directory and run the following command in a new terminal:

```
yarn start-backend
```

> Note: This is a development server only and not a production server. It will only run in the terminal on port 5000 (http://127.0.0.1:5000/). It will not pop up a window like the front-end does.

## Run React.js Frontend

To run the front-end, go into the Covid-Data-Dashboard\front-end directory and run the following command in a new terminal:

```
yarn start
```

This should open a new browser with the application on localhost:3000

> Note: you will get connection errors if the back-end is not started before the front-end and the default data will be used 

## Resources used to create setup

- https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project