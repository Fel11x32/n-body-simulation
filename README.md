# N-Body Gravitational Simulation

This project is a visualization of an N-body gravitational simulation. It demonstrates the gravitational interactions between a central massive object and a collection of smaller bodies orbiting it.

## Features

- **Central Massive Object:** A single massive body at the center of the canvas, influencing all other smaller bodies.
- **Orbiting Bodies:** Smaller objects that orbit the central body based on gravitational forces.
- **Dynamic Physics:** Real-time computation of gravitational forces and velocities.

## How It Works

1. **Gravitational Physics:** The simulation calculates gravitational forces between all bodies using Newton's law of gravitation.
2. **Real-Time Updates:** Each body's velocity and position are updated in every animation frame.
3. **Interactive Visualization:** Bodies are represented as circles whose size corresponds to their mass.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/n-body-simulation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd n-body-simulation
   ```

3. Open the `index.html` file in any modern web browser to view the simulation.

## Code Explanation

- **Canvas Initialization:**
  The HTML `<canvas>` element is used for rendering the simulation.

- **Body Class:**
  Represents each object in the simulation, including its position, velocity, acceleration, and mass. The radius is calculated based on the mass.

- **Gravitational Forces:**
  The simulation computes pairwise gravitational forces between bodies, applying the results to update velocities and positions.

- **Animation Loop:**
  The main loop clears the canvas, computes forces, updates positions, and redraws the bodies on each frame.

## Customization

- **Number of Bodies:**
  Adjust the `numBodies` variable in the JavaScript file to change the number of orbiting bodies.

- **Mass and Radius:**
  Modify the properties of the bodies to experiment with different gravitational dynamics.

- **Gravitational Constant (G):**
  Change the `G` constant to explore how gravitational strength affects the simulation.
