import React from 'react'
import moment from 'moment'
import './_comment.scss'

const Comment = () => {
    return (
        <div className='p-2 comment d-flex'>
         <img
            src="https://i1.sndcdn.com/artworks-000248908839-wlug27-t500x500.jpg"
            alt=''
            className='mr-3 rounded-circle'
         />
         <div className='comment__body'>
            <p className='mb-1 comment__header'>
               blabalbalbla • {moment("2021-06-06").fromNow()}
            </p>
            <p className='mb-0'>blablabla</p>
         </div>
      </div>
    )
}

export default Comment
