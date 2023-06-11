import React, { Component } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./newsContainer.css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
export default class NewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      memes: [],
      loading: true,
      myStyle: {
        backgroundColor: "rgb(245,245,245,1)",
        // backgroundColor: "#322d31",
      },
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = ` https://meme-api.com/gimme/4`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      memes: parsedData.memes,
      // totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  fetchData = async () => {
    this.setState({ loading: true });
    let url = `https://meme-api.com/gimme/10`;
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({
      memes: this.state.memes.concat(parsedDate.memes),
      loading: false,
    });
    // console.log(memes);
  };

  render() {
    // let { enable } = this.props;

    return (
      <>
        <div className='newsContainer_container' style={this.state.myStyle}>
          {this.state.loading && <LoadingBar />}
          <div className='cardContainer'>
            <InfiniteScroll
              dataLength={this.state.memes.length}
              next={this.fetchData}
              hasMore={true}
              loader={<LoadingBar />}>
              {
                // !this.state.loading &&
                this.state.memes.map((element) => {
                  return (
                    <NewsCard
                      title={element.title}
                      urlToImage={element.url}
                      newsUrl={element.postLink}
                      key={element.url}
                      author={element.author}
                      liked={element.ups}
                    />
                  );
                })
              }
              ;
            </InfiniteScroll>
          </div>
        </div>
      </>
    );
  }
}
