import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'https://s3.amazonaws.com/resumedataforzayn/resumeData.json?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIoACcEBP0aP9%2FLaM0AGy7jkxOMMclhljZ6%2FJblEUC3ya7xz4K%2FqJ8uDD%2BsTjIYClsdQYQ7OsjPeeLvv90dvt1mHuJAD70GKYsuK1u7mgKaSPhHpRA%2B3Ze2BdRiUcB45pzwpVCkNCfh7KTp0Jk1YCI%2BDb2St2hNJ71BHwZwyJwmXYxel5OtwY1Ka3uFDsTLzEvZado2fPMtxTcovb7tt0WEMKaGSC0OtyLYJyF%2BF5f7J%2FgaExpzEHyD0Ks7BHH0YgNU%2BT%2BzEir8uu74jCz6JJUex0kQH%2FEYPHHSScC74wuBszqErd3yzDqxuB%2F%2FnJJ12ecQ7ZNDygQDdVJuGXASLEBRstCCrkAwjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkyMDU0OTYwNjEzNyIMXogSIstYUtfvWcrqKrgD8neAAF8RkpsaepWchVoRol8vdDZHzXfAfrKbbtmlHIwAQxgvHADwp6xIMq9N63u5u8HrutZ1z%2FUNoByDRZdfbsR6X8R1ifpBBxcbrq3LDNOyGX7%2BZLw3WVpJUQrSlEWkYJB%2ByVejRv%2BYZIrrWl640zrucZMoThzIUddAp6ix6Rriz07EY6h269Y8%2F3dUqnrSn%2BbYLCHKKn%2FPJ48OHiPLYPdsYt4Mw2XhzfSJI2XeC2oSIoZFxiOlszBPkxc%2F7izsvwLDScJ8ROfg5MBjkqUeC%2FHtP3Fyid94PmPPveoXaecMXJYviECu4jkO7ZNAU3EmBXiNJN52IjR4OPlBRYuO8unZ2KbEdrC7w9C46yNQAcepZP8yE%2BUVkmbgWnSr3w98vH42vdAHwAtgIHJZweoptqSj35XXeZ%2FHLDuLBC2PK9kMnDQtBKEWW%2BxuYQ9H9oYPAF4TusYJ7LBYgIEjChLBw98g3L%2FHcSFr4QI0DuZmLvzTjMxWnnkX9wtfCPxxVgEQIDl%2F7NtMX4fjNTI4S0Sjf1rR5ArbKW8T7GPzR%2FAhcmKFcl9o5QCFPcjb%2FeEvm%2FgRlOPJA%2Fmjblsw9L%2Bu5AU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190315T125330Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5MVIIIL4TC4WQMWL%2F20190315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2f8a19778e872b2dfc7e6e43ef9a7e43c8b9a9d0bbee73eeea88667c52500914',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
