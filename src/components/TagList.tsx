import React from 'react'
import TagButtonGroup from './TagButtonGroup';
import { tagButton }  from './tagButton'




const TagList = () => {


  return (
    <>
        <div className="date tag-info">
          <h4 className="title-date"> Tags </h4>
          <div className="btn-tags">
           <TagButtonGroup tagButton={tagButton} />
    
          </div>
        </div>
    </>
  )
}

export default TagList