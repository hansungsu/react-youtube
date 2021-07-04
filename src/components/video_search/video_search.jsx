import React, { useRef } from 'react';

const VideoSearch = ({onSearch}) => {
  const inputRef = useRef()
  
  const handleSearch = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  const onClick = () => {
    handleSearch()
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter'){
      handleSearch()
    }
  }

  return (
    <div>
      <input ref={inputRef} type="search" placeholder="search" onKeyPress={onKeyPress}/>
      <button tyle="submit" onClick={onClick}>검색하기</button>
    </div>
  )
}

export default VideoSearch;