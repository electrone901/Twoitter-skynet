import React, {useState, useEffect} from 'react'
import {StylesProvider, Container, TextField, IconButton,Button, Grid } from '@material-ui/core'
import './PostTweet.css'
import { PhotoCamera } from '@material-ui/icons'
import ImageIcon from '@material-ui/icons/Image';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

function Post({image, setMessage, setImage, createPost, onChangePicture}) {
  return (
    <StylesProvider injectFirst>
      <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Grid container>
          <Grid item xs={2} sm={2}>
            <img src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4" alt="img-profile" id="person"/>
          </Grid>
          <Grid item xs={10} sm={10}>

          <form className="form" noValidate autoComplete='off'>
          <TextField
          fullWidth
          id='outlined-basic'
          className='input-form'
          defaultValue=''
          onChange={(e) => setMessage(e.target.value) }
          multiline
          minRows={4}
          required
          />
          {
            image ? (
              <img src={URL.createObjectURL(image)} alt="img-preview" className='img-prev' />
            ):
            ''
          }
          <br/>
          <input
          accept='image/*'
          className='input'
          id='icon'
          defaultValue={image}
          onChange={(e) => onChangePicture(e) }
          // onChange={(e) => setImage(e.target.files[0]) }
          type='file'
          />
          <label htmlFor="icon-button-phot">
            <IconButton color='primary' component='span'>
              <PhotoCamera/>
              <ImageIcon />
              <ImageSearchIcon/>
            </IconButton>
          </label>

          <Button size='medium'  variant='contained' color='primary' onClick={createPost}>
            Post
          </Button>
        </form>
          </Grid>
        </Grid>

      </Container>
    </StylesProvider>
  )
}

export default Post
