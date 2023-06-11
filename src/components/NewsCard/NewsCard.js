import React, { Component, useState } from "react";
import "./newsCard.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SlPaperPlane } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class NewsCard extends Component {
  constructor() {
    super();
    this.state = {
      isliked: false,
      liked: this.liked,
    };
  }
  render() {
    let { title, urlToImage, newsUrl, author, publishedAt, liked } = this.props;

    const shareBtnClicked = () => {
      let text = newsUrl;
      navigator.clipboard.writeText(text);
      toast.success("Link copied!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    const likedClicked = () => {
      this.setState({
        isliked: this.state.isliked ? false : true,
        liked: this.state.liked + 2,
      });
    };
    return (
      <>
        <ToastContainer />
        <div className='newCard_container'>
          <div className='profiel_pic'>
            <span className="post_meme_icons">
              <BsFillPersonFill size={30} color='pink' />
            </span>
            {author}
          </div>

          <img
            src={
              urlToImage
                ? urlToImage
                : "https://media.cnn.com/api/v1/images/stellar/prod/200917160446-iss-file.jpg?q=x_55,y_131,h_1095,w_1945,c_crop/w_800"
            }
            alt='newsImage'
          />
          <div className='meme_icons'>
            <span onClick={likedClicked} className='post_meme_icons'>
              <AiOutlineHeart
                size={30}
                color={this.state.isliked ? "red" : "black"}
              />
            </span>
            <span className='post_meme_icons'>
              <SlPaperPlane size={25} color='black' onClick={shareBtnClicked} />
            </span>
          </div>
          <div className='meme_details'>
            <p>
              Liked by:- {this.state.isliked ? "You and " : ""}
              {this.state.isliked
                ? Intl.NumberFormat("en", { notation: "compact" }).format(
                    liked + 1
                  )
                : Intl.NumberFormat("en", { notation: "compact" }).format(
                    liked
                  )}
              {"  "} Peoples
            </p>
          </div>
          <div className='meme_author_details'>
            <p>
              <span>
                {author} {":-  "}
              </span>
              {title}
            </p>
          </div>
        </div>
      </>
    );
  }
}
