import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';


function App() {
  const [videos, setVideos] = useState([])
  
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyD9G5NXtNgrEz_9uXf9NwV6ZHokJBqY_a0`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD9G5NXtNgrEz_9uXf9NwV6ZHokJBqY_a0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []) //[] 아무것도 전달하지 않으면 '한번만', //변수가 들어가면 변수가 바뀔때만 state가 변경된다.

  return (
    <>
      <VideoSearch onSearch={search}/>
      <VideoList videos={videos} />
    </>
  )
  
}
export default App;