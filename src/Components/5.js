import '../App.css';
import ReactPlayer from 'react-player';

const song = [
	"https://www.youtube.com/watch?v=1xtFp2Wu_To",
	"https://www.youtube.com/watch?v=OjNpRbNdR7E",
	"https://www.youtube.com/watch?v=YZji2ZCW5yU",
	"https://www.youtube.com/watch?v=G4NXCb4IalU"];

const Page5 = () => {
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
				volume={0.5}
			/>
		</div>
	)
}

export default Page5