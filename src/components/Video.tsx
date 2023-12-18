import ReactPlayer from 'react-player/youtube'
import { useDispatch } from 'react-redux';
import { next, useCurrentLesson } from '../stores/slices/player';

export function Video(){
  const dispatch = useDispatch()
  
  const {currentLesson} = useCurrentLesson()

  function handlePlayNext(){
    dispatch(next())
  }


  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        onEnded={handlePlayNext}
        playing
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}