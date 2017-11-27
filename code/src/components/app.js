import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

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
              <li><div className="nav-button">Get started</div></li>
            </ul>
          </nav>

        <hr></hr>

        <div className="content-blocks">

          <div className="hero-box">

            <div className="hero-copy">
              <div className="inner-margin">
                <h1>Interesting ideas that set your mind in motion.</h1>
                <p>Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we've got you covered.</p>
              </div>

              <div className="CTA-button CTA-button-1">
                Get started
              </div>

              <div className="CTA-button CTA-button-2">
                Learn more
              </div>
            </div>

            <div className="hero-image">
              <img src="/images/medium-image.png" alt="Hero-bild"></img>
            </div>

          </div>

          <hr></hr>

        </div>


    </div>
    )
  }

}

export default App
