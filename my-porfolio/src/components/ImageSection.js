import Image from "./Image";

function ImageSection() {

	return (
		<section className="relative w-full">
			<Image className="w-full h-full object-cover rounded" src="/Profile_Pic_Wide.jpg" alt="Drew Bowman"></Image>
			<div className="absolute top-0 right-0 h-full flex items-center pr-8">
      			<div className="bg-lime-800 bg-opacity-75 text-white p-4 rounded-md">
	  				<h3 
						className="opacity-100 text-xs md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-serif"
					>
						<strong>Hi, I'm Drew Bowman.</strong> <br/>
						I'm a software engineer <br/> 
						helping businesses create <br/> 
						beautiful and functional websites.
					</h3>
				</div>
			</div>
		</section>
	);
}

export default ImageSection;