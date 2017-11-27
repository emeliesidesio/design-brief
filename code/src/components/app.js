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

        <div className="content">

          <div className="hero-box">
            <div className="hero-copy">
              <div className="inner-margin">
                <h1>Interesting ideas that set your mind in motion.</h1>
                <h3>Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we've got you covered.</h3>
              </div>
            <div className="CTA-button CTA-button-1">Get started</div>
            <div className="CTA-button CTA-button-2">Learn more</div>
            </div>
            <div className="hero-image">
              <img src="/images/medium-image.png" alt="Hero-bild"></img>
            </div>
          </div>

          <div className="content-boxes">

            <div className="puff-box">
              <div className="image-box" id="image1"></div>
              <div className="copy-box">
                <div className="inner">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p className="paragraph">At 5:30 am, on a morning I can handle it, I'll slip out of the dark mouth of my covers and creep through the silver lig...</p>
                  <div className="writer">
                    <div className="writer-image" id="writer-image-1"></div>
                    <div className="writer-byline">
                      <h4>Carl Moore</h4>
                      <p>Oct 27, 8 min read</p>
                    </div>
                    <div className="bookmark"><img src="/images/bookmark.png" alt="bookmark"></img></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="puff-box">
              <div className="image-box" id="image2"></div>
              <div className="copy-box">
                <div className="inner">
                  <h2>The Role of Human Emotions in the Future of Transport</h2>
                  <p>Getting from A to B is about to feel very different.</p>
                  <div className="writer">
                    <div className="writer-image" id="writer-image-2"></div>
                    <div className="writer-byline">
                      <h4>Ben Bland</h4>
                      <p>Nov 1, 7 min read</p>
                    </div>
                    <div className="bookmark"><img src="/images/bookmark.png" alt="bookmark"></img></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="puff-box">
              <div className="image-box" id="image3"></div>
              <div className="copy-box">
                <div className="inner">
                  <h2>The March of the Losers</h2>
                  <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king.</p>
                  <div className="writer">
                    <div className="writer-image" id="writer-image-3"></div>
                    <div className="writer-byline">
                      <h4>Henrt Wismayer</h4>
                      <p>Nov 10, 8 min read</p>
                    </div>
                    <div className="bookmark"><img src="/images/bookmark.png" alt="bookmark"></img></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="puff-box">
              <div className="image-box" id="image4"></div>
              <div className="copy-box">
                <div className="inner">
                  <h2>The Burning Season</h2>
                  <p>You cannot save everything when the fires come to Northern California.</p>
                  <div className="writer">
                    <div className="writer-image" id="writer-image-4"></div>
                    <div className="writer-byline">
                      <h4>Lindsey Smith</h4>
                      <p>Nov 9, 31 min read</p>
                    </div>
                    <div className="bookmark"><img src="/images/bookmark.png" alt="bookmark"></img></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

    </div>
    )
  }

}

export default App
