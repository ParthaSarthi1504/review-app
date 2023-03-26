// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  leftArrowClick = () => {
    this.setState(prevState => ({
      index: prevState.index - 1 >= 0 ? prevState.index - 1 : prevState.index,
    }))
  }

  rightArrowClick = () => {
    this.setState(prevState => ({
      index: prevState.index + 1 <= 3 ? prevState.index + 1 : prevState.index,
    }))
  }

  render() {
    const {reviewsList} = this.props

    const {index} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <button type="button" className="btn" data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-image"
            onClick={this.leftArrowClick}
          />
        </button>

        <div className="card">
          <h1 className="title">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile-image" />
          <p className="user-name">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
        <button type="button" className="btn" data-testid="rightArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
            className="arrow-image"
            onClick={this.rightArrowClick}
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
