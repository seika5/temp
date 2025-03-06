import '../App.css';
import ReactPlayer from 'react-player';

const playlist = [
	"https://www.youtube.com/watch?v=zXX0w0FKR_s",
	"https://www.youtube.com/watch?v=DmvFOEs575g",
	"https://www.youtube.com/watch?v=tIYsrBPG8Jo",
	"https://www.youtube.com/watch?v=OEiQj-FjCRc",
	"https://www.youtube.com/watch?v=9tlenyBWs4w",
	"https://www.youtube.com/watch?v=LMbd-UYyEd0",
	"https://www.youtube.com/watch?v=N6dOtowkhGo",
	"https://www.youtube.com/watch?v=kkFUgVXo5xc",
	"https://www.youtube.com/watch?v=zyF6o9rkcwY",
	"https://www.youtube.com/watch?v=38zAGP85UnI",
	"https://www.youtube.com/watch?v=C0_m4cGiZJs",
	"https://www.youtube.com/watch?v=VZP-Lnq-SVA",
	"https://www.youtube.com/watch?v=C87cQvdjuFc",
	"https://www.youtube.com/watch?v=xBWmkwaTQ0k"];

const song = [
	"https://www.youtube.com/watch?v=bgf2R1VneE0"];

const Page4 = () => {
	return (
		<div>
			<ReactPlayer
				className="react-player"
				url={playlist}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.25}
			/>

			<ReactPlayer
				className="react-player"
				url={song[0]}
				width="400px"
				height="400px"
				playing={true}
				loop={true}
				controls={true}
				volume={0.05}
			/>
		</div>
	)
}

export default Page4