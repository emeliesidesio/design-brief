import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <header>

          <nav>
            <ul>
              <li><a href="#top" className="active">Home</a></li>
              <li><a href="#top">Technology</a></li>
              <li><a href="#top">Creativity</a></li>
              <li><a href="#top">Entrepreneurship</a></li>
              <li><a href="#top">Self</a></li>
              <li><a href="#top">Culture</a></li>
              <li><a href="#top">Digital Design</a></li>
              <li><a href="#top">Popular on Medium</a></li>
              <li><a href="#top">Politics</a></li>
              <li><a href="#top">More</a></li>
              <li><div className="button">Get started</div></li>
            </ul>
          </nav>

        </header>

        <hr></hr>

        <div className="content-blocks">

          <div className="hero-box"></div>

        </div>

      </div>
    )
  }

}

export default App
