import React from 'react'
import { Tag } from 'antd'

interface ITagButton {
    closable: boolean;
    onClose?: () => void;
    name: string;
}

interface TagButtonProps {
  tagButton: ITagButton[];
}

const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

const TagButtonGroup = ({tagButton}: TagButtonProps) => {
  return (
    <>
        {tagButton.map((tag, index) => <Tag key={index}  onClose={log} closable={tag.closable} >{tag.name} </Tag>)}
    </>
  )
}

export default TagButtonGroup