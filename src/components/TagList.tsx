import React from 'react'
import { Tag } from 'antd';

const TagList = () => {

    const log = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
      };

  return (
    <>
        <div className="date tag-info">
          <h4 className="title-date"> Tags </h4>
          <div className="btn-tags">
            <Tag className='btn-tag' closable onClose={log}>
              Party
            </Tag>
            <Tag className='btn-tag' closable onClose={log}>
              Dancing
            </Tag>
            <Tag className='btn-tag' closable onClose={log}>
              Mood
            </Tag>
            <Tag className='btn-tag' closable onClose={log}>
              Girl
            </Tag>
            <Tag className='btn-tag' closable onClose={log}>
              Boy
            </Tag>
            <Tag className='btn-tag' closable onClose={log}>
              Thought
            </Tag>
          </div>
        </div>
    </>
  )
}

export default TagList