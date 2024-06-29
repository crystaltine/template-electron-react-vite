import '../../styles/homescreen/homescreen.css'

const Homescreen = () => {
	return (
		<div className='homescreen-main red'>

			<div className='homescreen-topbar'>
				<div className='homescreen-topbar-left'>
					<h1>homescreen</h1>
				</div>
				<div className='homescreen-topbar-right'>
					<h3>random</h3>
					<h3>more random</h3>
				</div>
			</div>

			<div className='homescreen-bottom'>
				<div className='homescreen-bottom-left'>
					<h2>stuff?</h2>
				</div>
				<div className='homescreen-bottom-right'>
					<h2>traffic cone</h2>
				</div>
			</div>
			
		</div>
	);
};

export default Homescreen;