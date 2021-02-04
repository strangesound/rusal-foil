import logo from './logo.svg';
import './App.css';
import ReactPageScroller from 'react-page-scroller';
import Page from './page.js'
import im1 from './images/im1.png';
import im2 from './images/im2.png';
import im3 from './images/im3.png';
import im4 from './images/im4.png';
import im5 from './images/im5.png';


function App() {

  const goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }



  return (
    <div className="App">
      <button >test</button>
      {/* onClick={goToPage(3)} */}
      <ReactPageScroller ref={c => this.reactPageScroller = c}>
        <Page img={im1} />
        <Page img={im2} />
        <Page img={im3} />
        <Page img={im4} />
        <Page img={im5} />

      </ReactPageScroller>

    </div>
  );
}

export default App;
