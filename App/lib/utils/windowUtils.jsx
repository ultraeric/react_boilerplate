import * as React from 'react';

let windowSize = {width: 0, height: 0};
let componentsToUpdate = new Set(); //add components here so the window knows which components to force update on
let componentsToRemove = new Set();
let lastUpdate = new Date();
let updateDelay = 200; //in milliseconds

//Adds an event to window on resize that updates all components wrapped in provideWindowSize
window.addEventListener('resize', () => {
  windowSize = {width: window.innerWidth, height: window.innerHeight};
  let newTime = new Date();
  if (newTime - lastUpdate > updateDelay) {
    //Removes any components that need to be removed
    for(var item in componentsToRemove) {
      componentsToUpdate.delete(item);
    }
    componentsToRemove.clear();

    //Forces the update
    for(var item in componentsToUpdate) {
      item.updateWindowSize();
    }
  }
});

//HOC function that provides windowSize prop to child. This is in CSS px
function provideWindowSize(WrappedComponent) {
  return class WindowSizeWrapped extends React.Component {
    constructor() {
      super();

      //this bindings
      this.componentWillMount = this.componentWillMount.bind(this);
      this.componentWillUnmount = this.componentWillUnmount.bind(this);
      this.render = this.render.bind(this);
      this.updateWindowSize = this.updateWindowSize.bind(this);

      //keeps the state which is updated for rendering later
      this.state = {windowSize: windowSize};
    }

    //On mount, adds this component to the set of components to track
    componentWillMount() {
      componentsToUpdate.add(this);
    }

    //On unmount, queues this component for removal during next update
    componentWillUnmount() {
      componentsToRemove.add(this);
    }

    //Updates the window size state, forces render
    updateWindowSize(windowSize) {
      this.setState({
        windowSize: windowSize
      });
    }

    //Renders component in HOC context
    render() {
      return <WrappedComponent {...this.props, windowSize: this.state.windowSize}/>
    }
  }
}

//HOC function that provides screenType prop to child
function provideScreenType(WrappedComponent) {
  class ScreenTypeWrapped extends React.Component {
    constructor(props) {
      super(props);
      this.getSizeClass = this.getSizeClass.bind(this);
      this.componentWillUpdate = this.componentWillUpdate.bind(this);
      this.render = this.render.bind(this);
      this.state = {sizeClass: this.getSizeClass(props.windowSize)};
    }

    //Gets the size class based on common cutoffs (980, 480 px)
    getSizeClass(size) {
      size = (size.width > size.height) ? size : {width: size.height, height: size.width};
      if (size.width >= 980) {
        return 'l';
      } else if (size.width >= 480) {
        return 'm';
      } else {
        return 's';
      }
    }

    //On a prop update, update size class
    componentWillReceiveProps(newProps) {
      this.setState({sizeClass: this.getSizeClass(newProps.windowSize)});
    }

    //Renders component in HOC context
    render() {
      let passProps = {...this.props, sizeClass: sizeClass};
      delete passProps.windowSize;
      return <WrappedComponent {...passProps}/>
    }
  }

  //Returns HOC with window size provided
  return provideWindowSize(ScreenTypeWrapped);
}
