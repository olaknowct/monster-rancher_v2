# monster-rancher
link : https://monster-rancher.netlify.app/

### Description
- I named the project as monster rancher, the app kinda like a movie(monster rancher) that i watched and used to play at early stage of my age.

### About
- The project is a basic react project wherein it gives you functionality of searching a monster.
- It uses 2 API to generate dummy data and source image.

### Purpose
- The main purpose of creating this project is to get a good grasp of basic fundamental of React Library.

### Concepts
- React and ReactDOM
- Classes Optimization
- pure and impure functions
- Class and functional component and its differences 
- JSX
- Unidirectional flow
- Class Component Lifecycle Methods
- Props
- Hooks (useStates, useEffects)
- Event Handler
- CSS in React
- DOM and VirtualDOM
- TypeScripts Basics

### Takeaway
- Components has access to the states and we can also set it states.
- JXS is responsible for creating a VIRTUAL DOM, its pretty much HTML alike and does mimic it,
  - when can add attribute on custom component inside JXS and passed into component as props 
- I've learned that when we see that the component can be used from multiple place, then we need to break it down into component as much as possible this is to make optimize and efficient
- from class component, for it to be optimized, a function build outside of the render will be just a reference. It will not reinitialize the anonymous function over and over again 
- State becomes props when it gets passed down to components, its a uni-directional flow wherein the data can only flow one way.
- Unidirectional in the sense of when state sets, all under HTML tree where the states lives will be updated and rerendered to DOM
- When DOM changes
  - Virtual DOM : React create a copy of Real DOM (current DOM)  
  - New DOM : React create a copy of Virtual DOM with its changes
  - Updated DOM : updating only the Element that changes by comparing Current DOM and Virtual DOM
- Lifycycle methods gets called automatically from every different stages
- We have syntetic events on Virtual DOM. DOM API events for HTML 
- Functional component
  - does not have THIS keyword nor parent element
  - Utilize hooks in order to replicate a very similar behavior as we see in class comments
  - does get some props (attributes that we passed) and return JXS
  - Doesn't have lifecycle methods
- Class Component
  - inheritance
  - gets access to THIS and parent class
  - has lifecycle methods
  - lots of method available 
- Hooks
  - setStates with an object
  - setStates with a function
  - useEffect for any side effects
  
### API used
- https://robohash.org/
- https://jsonplaceholder.typicode.com/users
