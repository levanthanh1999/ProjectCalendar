import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { ButtonStyle } from './ButtonStyle'


const ButtonCreatePost = styled(ButtonStyle)`
    padding: 20px 30px;
    height: 15px;
`

const PostMid = () => {
  return (
    <>
         <h2 className="post-title">Post Schedule</h2>
          <div className="btn">
              <ButtonCreatePost type='button'
                // onClick={handlePostClick}
              >
              Create a Post
              </ButtonCreatePost>
          </div>
    </>
  )
}

export default PostMid