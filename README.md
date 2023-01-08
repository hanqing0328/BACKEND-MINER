## program description

The simulation starts with 3 planets, 20 asteroids and 9 miners.
Each miner is assigned to a specific planet. A miner is a spacecraft which can travel from its planet to an asteroid, and mine its minerals.
Each miner has a mineral carry capacity, a travel speed and a mining speed. Miners start the simulation from their origin planet, will travel to an asteroid, mine minerals, and return back to their planet to drop the minerals.
A planet can store minerals. Each planet can spawn new miner when it has enough resources. It takes 1000 minerals to spawn a new miner, and the minerals are removed from the planet.
Each asteroid has a limited quantity of minerals, which decreases when it is mined by a miner, up to depletion.
An asteroid can be mined by only one miner at a time.
The simulation is based on an event loop, 1 second in real life equals 1 year in the simulation.
There is no final goal to reach. The goal is that the simulation works.

## UI

[UI Design link](https://www.figma.com/file/OX9KUE33QGTyaSfpiBMsEN/%5BSlingshot%5D-Asteroids---Javascript-Development-Test)  
password: SlingshotToAsteroids
![List of miners](/images/miners.png)

## datasource Interface

- Websocket:
  - All planet, miners and asteroids status and information displayed on the frontend should be updated live via a websocket connection to the backend
  - Each time a miner, planet, asteroid is created or modified on the backend, it should be updated live on the frontend
- REST API:
  - All data should be accessible via a REST API structure:
    - GET `/miners`: return the list of miners
    - GET `/miners?planetId=[planet ID]`: return the list of miners from a given planet ID
    - GET `/miners/[miner ID]`: return a miner based on its ID
    - POST `/miners`: create a miner
    - PUT `/miners/[miner ID]`: update a miner based on its ID
    - DELETE `/miners/[miner ID]`: delete a miner based on its ID
  - Same instruction for planets and asteroids

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
