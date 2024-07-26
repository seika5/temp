import '../App.css';
import ReactPlayer from 'react-player';

const song = [
	"https://www.youtube.com/watch?v=bLvqxwhZvQ8",
	"https://www.youtube.com/watch?v=d4eRXTWTkAU",
	"https://www.youtube.com/watch?v=e9oIu1CNuFM",
	"https://www.youtube.com/watch?v=f7nrB130WUs"];

const Page3 = () => {
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
				volume={0.2}
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
				volume={0.02}
			/>

			<ReactPlayer
				className="react-player"
				url={song[3]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.1}
			/>
		</div>
	)
}

export default Page3