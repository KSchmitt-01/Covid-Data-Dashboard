# COVID-19 Data Dashboard using React.js
### Kincaid Schmitt, Andrew Haddon, Alyssa West, and Matthew Johnson

This project is a React.js application with a Python Flask backend. It pulls down COVID information from the [ISU online excel sheet](https://docs.google.com/spreadsheets/d/1aWRYSUrerFhXM0peQFLsHerHhWF1ZvFTtbfUyPN2kpA/edit#gid=945251250) and the [BSU online excel sheet](https://docs.google.com/spreadsheets/d/17BspZPppmoADS2fwmwoPjHzZPLo_q_4gi9VPyEQQX2M/edit#gid=0). It then displays this information using graphs, charts, and card components. Each school's information is displayed on a separate page that the user is able to swap between using the dropdown in the upper left corner.

## Install Dependencies

First start off by installing `Node.js`, `yarn`, and `python`.

In the Covid-Data-Dashboard\front-end directory, run the following command to download dependencies:

```
yarn build
```

To Install the Python Flask dependency, use the following command:
```
pip install flask
```

## Setup Python Flask Backend

To run the backend, go into the Covid-Data-Dashboard\front-end directory and run the following command in a new terminal:

```
yarn start-backend
```

## Run React.js Frontend

To run the frontend, go into the Covid-Data-Dashboard\front-end directory and run the following command in a new terminal:

```
yarn start
```

This should open a new browser with the application

> Note: you will get errors if the backend is not started before the frontend and the default data will be used 

## Resources used to create setup

- https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project