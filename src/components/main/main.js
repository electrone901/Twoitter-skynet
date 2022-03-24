import React, { useState, useEffect } from 'react'
import './main.css'
import { BiArrowBack } from 'react-icons/bi'
import { CgMoreAlt, CgCalendarDates } from 'react-icons/cg'
import Tweet from '../tweet/tweet'
import PostTweet from '../post-tweet/PostTweet'
import { SkynetClient, genKeyPairFromSeed } from 'skynet-js'
import { Button } from '@material-ui/core'
const portal = 'https://siasky.net/'
const client = new SkynetClient(portal)
const SEEDPHASE = 'seedphase'
const { privateKey, publicKey } = genKeyPairFromSeed(SEEDPHASE)
const dataKey = 'datakey'

const Main = () => {
  const [message, setMessage] = useState('')
  const [image, setImage] = useState('')
  const [imgData, setImgData] = useState('')
  const [follow, setFollow] = useState(true)
  console.log('message', message, image)
  console.log('image', image)

  const followHandler = () => {
    if (follow === true) {
      setFollow(false)
    } else if (follow === false) {
      setFollow(true)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  // console.log(' imgData',imgData )
  const onChangePicture = async (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files)
      setImage(e.target.files[0])
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImgData(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }


  const createPost = async () => {
    console.log('eee', imgData, message)
    // const { skylink } = await client.uploadFile(imgData)
    const dataImage = await client.uploadFile(image)
    const imgLink = dataImage.skylink

    console.log("🚀 ~ file: main.js ~ line 53 ~ createPost ~ imgLink", imgLink)
    console.log("🚀 data", dataImage.skylink)

    const obj = {
      image: dataImage.skylink,
      description: message,
    }
    let { data } = await client.db.getJSON(publicKey, dataKey)

    if (data?.length) {
      data.unshift(obj)
    } else {
      data = [obj]
    }
    // add data to skynet
    const result = await client.db.setJSON(privateKey, dataKey, data)
    console.log("🚀🚀🚀  result", result)
  }

  const fetchData = async () => {
    let { data } = await client.db.getJSON(publicKey, dataKey)
    console.log('data', data)
    // const json = {
    //   title: 'this.title',
    //   description: 'this.description'
    // }
    // if(data.length) {
    //   data.unshift(json);
    // }
    // else {
    //   data = [json];
    // }
    // await client.db.setJSON(privateKey, dataKey, data)
  }

  return (
    <div id="container-main">
      <PostTweet
        image={image}
        setMessage={setMessage}
        setImage={setImage}
        createPost={createPost}
        onChangePicture={onChangePicture}
      />

      {/* <div id="box-top">
          <span id="back-icon-box">
            <BiArrowBack id="back-icon" />
          </span>

          <div id="box-top-right">
            <p id="name-header">ali turkaman</p>
            <span id="tweets-number">22 Tweets</span>
          </div>
        </div> */}

      {/* <div id="header-box">
        <div id="profile-image"></div>
      </div> */}

      {/* <div id="edit-box">
        <span id="more-box">
          <CgMoreAlt id="more-header" />
        </span>
        <button
          className={follow === false ? "following" : "Follow"}
          onClick={followHandler}
        >
          {follow ? "Follow" : "Following"}
        </button>
      </div>

      <div id="name-id-box">
        <p id="name-user">ali turkaman</p>
        <p id="id-user">@ATurkaman</p>
      </div>

      <div id="job-box">
        <p id="job">Frontend Developer</p>
      </div>

      <div id="date-box">
        <CgCalendarDates id="date-icon" />
        <p id="date">Joined January 2021</p>
      </div>

      <div id="following-follow-box">
        <span id="number-follow">35</span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Following
        </a>

        <span id="number-follow" className="margin-left">
          {follow === false ? 6 : 5}
        </span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Followers
        </a>
      </div> */}

      <div id="nav-header">
        <div id="box-nav" className="box-Tweets">
          <p id="nav">Tweets</p>
        </div>

        <div id="box-nav" className="box-replies">
          <p id="nav">Tweets & replies</p>
        </div>

        <div id="box-nav" className="box-Media">
          <p id="nav">Media</p>
        </div>

        <div id="box-nav" className="box-Likes">
          <p id="nav">Likes</p>
        </div>
      </div>

      <div id="line"></div>

      <Tweet />

      {/* <Tweet
        tweet="😎این یک متن ساختگی برای این پروژه است"
        likeNumber="25"
        comment="1"
      />
      <Tweet
        tweet="به نظر من chakra ui باحال تر از material ui ! "
        likeNumber="96"
        comment="5"
      />
      <Tweet
        tweet="نمیفهمم چرا ادم باید سی شارپ کار کنه؟ بعد اینجاش جالبه که بعضی اموزشگاه های برنامه نویسی اول باید سی شارپ کار کنی و گرنه برنامه نویسی یاد نمیگیری!"
        likeNumber="60"
      />
      <Tweet
        tweet="☃ چرا همه زمستونا سرما میخورن من تابستون عجییه برام"
        likeNumber="60"
      />
      <Tweet tweet="اگه وقت بزاری میشه ☄" likeNumber="60" />
      <Tweet
        tweet="فکر نمیکردم یه دوره رو بتونم تو دو روز تموم  کنم"
        likeNumber="60"
      /> */}
    </div>
  )
}

export default Main
