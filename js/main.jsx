import React from 'react';
import ReactDOM from 'react-dom';
import css from '../css/style.css';

document.addEventListener('DOMContentLoaded', function() {

  class Project extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: true
      };
    }

    handleClick = () => {
      this.setState({
        open: !this.state.open
      })
    }

    render() {
      const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + this.props.url + ')',
      };
      return <div onClick={this.handleClick}
        key={this.props.i}
        style={divStyle}
        className={`${this.state.open || "open-active open"}  panel`}>
        <h3>{this.props.tags}
        </h3>
      </div>
    }
  }

  class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pic: 0,
        pics: {}
      };
    }
componentDidMount(){

        let url = "https://pixabay.com/api/?key=7194261-cb5353e414e4d782b7a39e798&q=cat&image_type=photo"
        fetch(url)
        .then(r => r.json())
        .then(r => this.setState({
          pics: r.hits
        }))
        //.then(console.log('fetched'))
}

    scroll = () => {
      //console.log(this.state.pic);

      this.setState({
        pic:this.state.pic > 17 ? 0: this.state.pic+.05

      })
    }

    render() {

      // {Object.keys(this.state.pics).length == 0 ||
      //
      //     this.state.pics.map((el, i) => console.log(el))
      //
      // }
      return (<div onWheel={this.scroll} className="panels">
        {Object.keys(this.state.pics).length == 0 ||
          this.state.pics.map((el, i) => (i>=this.state.pic && i<this.state.pic+5) &&
          <Project key={i} i={i} url={el.webformatURL} tags={el.tags} />
        )}
      </div>);
    }
  }

  class App extends React.Component {
    render() {
      return <Projects/>;
    }
  }

  ReactDOM.render(<App/>, document.getElementById('app'))

});
