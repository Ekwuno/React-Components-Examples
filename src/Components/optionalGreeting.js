import React from "react";

class OptionalGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
        button = <LogOutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LogInButton onClick={this.handleLoginClick} />;
      }
    return (
        <div>
            <Greetings isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
  }
    
}

function UserGreeting(props) {
  return <h1>{props.greet}</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greetings(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
       return <GuestGreeting/>
    }
    else{
        return <UserGreeting greet="Hellooooo"/>
    }
}


function LogInButton(props) {
  return <button onClick={props.onClick}>LogIn</button>;
}

function LogOutButton(props) {
  return <button onClick={props.onClick}>LogOut</button>;
}

export default OptionalGreeting;
