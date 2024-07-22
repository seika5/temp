import '../App.css';
import ReactPlayer from 'react-player';

const song = [
	"https://www.youtube.com/watch?v=OjNpRbNdR7E",
	"https://www.youtube.com/watch?v=Tu-GWOM3ZM4",
	"https://www.youtube.com/watch?v=bmfudW7rbG0",
	"https://www.youtube.com/watch?v=GK2GUxOnjDQ"];

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
				volume={0.07}
			/>

			<ReactPlayer
				className="react-player"
				url={song[1]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.07}
			/>

			<ReactPlayer
				className="react-player"
				url={song[2]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.1}
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

export default Page2