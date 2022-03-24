import React, { useState } from 'react'
import { CgMoreAlt } from 'react-icons/cg'
import { SiGoogleanalytics } from 'react-icons/si'
import { FiShare } from 'react-icons/fi'
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import {
  CardMedia,
  CardContent,
  Grid,
  Card,
  Container,
  Paper,
} from '@material-ui/core'
import CircularStatic from '../commons/CircularProgressWithLabel'
import './tweet.css'

const posts = [
  {
    name: 'Joe Smith',
    handle: '@Jsmith',
    date: 'March 10',
    message: 'HandShake is awesome 😎',
    likeNumber: '25',
    comment: '1',
  },
  {
    name: 'ali turkaman',
    handle: '@ATurkaman',
    date: 'Aug 10',
    message:
      'HandShake is awesome 😎 HandShake is awesome 😎 HandShake is awesome 😎',
    likeNumber: '25',
    comment: '1',
  },
  {
    name: 'ali turkaman',
    handle: '@ATurkaman',
    date: 'Aug 10',
    message: 'HandShake is awesome 😎',
    likeNumber: '25',
    comment: '1',
  },
]

const Tweet = (props) => {
  const [like, setLike] = useState(false)
  const [loading, setLoading] = useState(false)
  const likeHandler = () => {
    if (like === false) {
      setLike(true)
    } else if (like === true) {
      setLike(false)
    }
  }

  return (
    <Container>
      <div className="root">
        {loading ? (
          <CircularStatic />
        ) : (
          <div>
            <Grid container>
              {posts && posts?.length ? (
                posts.map((post, index) => (
                  <Card className="card" key={index}>
                    <Grid item sx={2}>
                      <CardMedia
                        component="img"
                        height="184"
                        image="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
                        alt="post-profile"
                        id="person"
                      />
                    </Grid>

                    <Grid item sx={10}>
                      <CardContent
                        style={{
                          borderTop: `0px solid rgb(38 37 181 / 35%)`,
                        }}
                      >
                        <p className="info">
                          ID: <strong>{post.name}</strong>
                        </p>
                        <p className="info">
                          Create At: <strong>{post.date}</strong>
                        </p>
                        <p className="info">{post.message}</p>
                        {/* <p className="info">
                        Amount: <strong>{nft.amount}</strong>
                      </p>
                      <p className="info">
                        Level: <strong>{'Diamond Hands'}</strong>
                      </p>
                      <br />
                      <br />
                      <CustomizedProgressBars value={nft.locked} />
                      <br />
                      <br /> */}
                        {/* <Button
                        variant="contained"
                        size="small"
                        // component={Link}
                        style={{
                          fontSize: '0.7125rem',
                          backgroundColor: '#9a21b8',
                          color: 'white',
                        }}
                        to={`/rewards`}
                        onClick={checkRewards}
                      >
                        Check rewards
                      </Button> */}
                      </CardContent>
                    </Grid>

                    {/* BOTTTOM */}
                    <div id="nav-bottom-post">
                      <div id="box-comment-number">
                        <span className="comment" id="nav-icon-box">
                          <FaRegComment />
                        </span>
                        <p id="comment-tweet"> {props.comment} </p>
                      </div>
                      <span className="retweet" id="nav-icon-box">
                        <AiOutlineRetweet />
                      </span>
                      <div id="box-like-number">
                        <span
                          // onClick={likeHandler}
                          className="like"
                          id="nav-icon-box"
                        >
                          {like === true ? (
                            <AiFillHeart id="red-heart" />
                          ) : (
                            <AiOutlineHeart />
                          )}
                        </span>
                        <span id="like-number">
                          {like === true
                            ? parseInt(post.likeNumber) + 1
                            : props.likeNumber}
                        </span>
                      </div>
                      <span className="share" id="nav-icon-box">
                        <FiShare />
                      </span>
                      <span className="analytic" id="nav-icon-box">
                        <SiGoogleanalytics />
                      </span>
                    </div>
                  </Card>
                ))
              ) : (
                <h2>No Tweets Yet...</h2>
              )}
            </Grid>
          </div>
        )}
      </div>

      {/* <div id="tweet-box">
        <div id="profile-tweet">
          <img
            src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
            alt="profile"
            id="image-profile"
          />
        </div>

        <div id="box-tweet">
          <div id="name-id">
            <span id="flex-tweet">
              <p id="tweet-name">ali turkaman</p>
              <p id="tweet-id">@ATurkaman . </p>
              <p id="tweet-date">Aug 10</p>
            </span>

            <span id="span-more">
              <CgMoreAlt />
            </span>
          </div>

          <div id="post-box">
            <p id="text-tweet"> {props.tweet} </p>
          </div>

          <div id="nav-bottom-post">
            <div id="box-comment-number">
              <span className="comment" id="nav-icon-box">
                <FaRegComment />
              </span>
              <p id="comment-tweet"> {props.comment} </p>
            </div>
            <span className="retweet" id="nav-icon-box">
              <AiOutlineRetweet />
            </span>
            <div id="box-like-number">
              <span onClick={likeHandler} className="like" id="nav-icon-box">
                {like === true ? (
                  <AiFillHeart id="red-heart" />
                ) : (
                  <AiOutlineHeart />
                )}
              </span>
              <span id="like-number">
                {like === true
                  ? parseInt(props.likeNumber) + 1
                  : props.likeNumber}
              </span>
            </div>
            <span className="share" id="nav-icon-box">
              <FiShare />
            </span>
            <span className="analytic" id="nav-icon-box">
              <SiGoogleanalytics />
            </span>
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default Tweet
