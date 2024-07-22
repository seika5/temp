import '../App.css';
import ReactPlayer from 'react-player';

const song = [
	"https://www.youtube.com/watch?v=FCe9HZG50P0",
	"https://www.youtube.com/watch?v=5Fuplg6MhPQ&t=16",
	"https://www.youtube.com/watch?v=bLvqxwhZvQ8",
	"https://www.youtube.com/watch?v=G4NXCb4IalU"];

const Page2 = () => {
	return (
		<div>
			<ReactPlayer
				className="react-player"
				url={song[0]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.1}
			/>

			<ReactPlayer
				className="react-player"
				url={song[1]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.1}
			/>

			<ReactPlayer
				className="react-player"
				url={song[2]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.2}
			/>

			<ReactPlayer
				className="react-player"
				url={song[3]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.12}
			/>
		</div>
	)
}

export default Page2