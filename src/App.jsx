import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';


function App({youtube}) {
  const [videos, setVideos] = useState([])
  const search = query => {
    youtube.search(query).then(console.log())
  }

  useEffect(()=>{
    youtube.mostPopular().then(console.log())
  })

  return (
    <>
      <VideoSearch onSearch={search}/>
      <VideoList videos={videos} />
    </>
  )
  
}
export default App;