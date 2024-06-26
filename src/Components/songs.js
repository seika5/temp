import '../App.css';
import ReactPlayer from 'react-player';

const song = [
	"https://www.youtube.com/watch?v=F1yq_J7c6bM",
	"https://www.youtube.com/watch?v=OjNpRbNdR7E",
	"https://www.youtube.com/watch?v=ilhQlY7kP5Y",
	"https://www.youtube.com/watch?v=dJs04lHumSA"];

const reload = () => {
	window.location.reload();
}

const Songs = () => {
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
				volume={0.08}
			/>

			<ReactPlayer
				className="react-player"
				url={song[2]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.08}
			/>

			<ReactPlayer
				className="react-player"
				url={song[3]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.08}
			/>
		</div>
	)
}

export default Songs