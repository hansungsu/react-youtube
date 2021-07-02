import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';


function App() {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD9G5NXtNgrEz_9uXf9NwV6ZHokJBqY_a0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]) //[] 아무것도 전달하지 않으면 '한번만', //변수가 들어가면 변수가 바뀔때만 state가 변경된다.

  return <VideoList videos={videos}/>
}
export default App;