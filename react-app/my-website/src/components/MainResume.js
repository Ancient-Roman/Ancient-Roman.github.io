function MainResume() {

	return (
		<div id="main-resume">

			<section id="contact-info" className="resume-section">
				<h2 className="section-header" id="contact-info-header">Profile</h2>

				<div id="email-contact-info">
					<h3 className="subsection-header" id="name">Email Address</h3>
					<a id="email" className="link" href="mailto:bowmangolf00@gmail.com">bowmangolf00@gmail.com</a>
				</div>

				<div id="linkedin-contact-info">
					<h3 className="subsection-header" id="name">LinkedIn</h3>
					<a id="linkedin" className="link" href="https://www.linkedin.com/in/douglas-bowman-0b909a197/" target="_blank" rel="noreferrer">Drew Bowman's LinkedIn</a>
				</div>

				<div id="github-contact-info">
					<h3 className="subsection-header" id="name">GitHub</h3>
					<a id="github" className="link" href="https://github.com/Ancient-Roman" target="_blank" rel="noreferrer">Drew Bowman's GitHub</a>
				</div>
			</section>

			<section id="education" className="resume-section">
				<h2 className="section-header">Education</h2>
				<div id="college-education">
					<p className="location bold-text" id="college-location">Virignia Tech, Blacksburg VA<span className="extra-info"> - Graduated Senior, Computer Science</span></p>
					<p className="date-range" id="college-date">August 2019 - May 2023</p>
					<ul className="education-list">
						<li className="gpa">Cumulative GPA: 3.96</li>
						<li className="description">Graduated with a BS in Computer Science, Music Technology Minor</li>
					</ul>
				</div>
				<div id="highschool-education">
					<p className="location bold-text" id="highschool-location">Blacksburg High School (BHS), Blacksburg VA<span className="extra-info"> - Advanced Studies Diploma</span></p>
					<p className="date-range" id="highschool-date">August 2016 - May 2019</p>
					<ul className="education-list">
						<li className="gpa">Cumulative GPA: 4.2</li>
						<li className="description">Acquired 28 transferable credit hours from Advanced Placement courses</li>
					</ul>
				</div>
			</section>

			<section id="experience" className="resume-section">
				<h2 className="section-header">Experience</h2>
				<div id="Vorbeck-experience">
					<p className="location bold-text" id="MCS-location">Summer Internship, Jessup, MD<span className="extra-info"> - Vorbeck Materials Corp.</span></p>
					<p className="date-range" id="MCS-date">May 2022 - August 2022</p>
					<ul className="experience-list">
						<li>Developed a web application using React and Openlayers API</li>
						<li>Gained experience with React and UI design</li>
					</ul>
				</div>

				<div id="MCS-experience">
					<p className="location bold-text" id="MCS-location">Summer Internship, New River, VA<span className="extra-info"> - Motion Control Systems</span></p>
					<p className="date-range" id="MCS-date">May 2021 - August 2021</p>
					<ul className="experience-list">
						<li>Created a webiste and backend to automate processes for the company using micropython on microcontrollers</li>
						<li>Gained experience with websocket connections and asynchronous python code</li>
					</ul>
				</div>
				
			</section>

			<section id="projects" className="resume-section">
				<h2 className="section-header">Projects</h2>
				<div id="Videogame-projects">
					<p className="location bold-text" id="Videogame-location">Programming Project, Blacksburg VA<span className="extra-info"> - Tactical Video Game</span></p>
					<p className="date-range" id="Videogame-date">February 2018 - Current</p>
					<ul className="experience-list">
						<li>Developed a tactical strategy game based off of Nintendo's Fire Emblem franchise</li>
						<li>Original game code in Java, currently developing a cleaner remake this year: <a href="https://github.com/Ancient-Roman/Fire-Emblem-Project/tree/campaign/Fire%20Emblem%20Remake" target="_blank" rel="noreferrer">See the project's Github page</a></li>
					</ul>
				</div>
				<div id="iOS-projects">
					<p className="location bold-text" id="Videogame-location">iOS App Project, Blacksburg VA<span className="extra-info"> - Card Game Scoring</span></p>
					<p className="date-range" id="Videogame-date">December 2020</p>
					<ul className="experience-list">
						<li>Designed an app to streamline the scoring for a card game, Hand & Foot</li>
						<li>Code in Swift, uses old UIKit framework</li>
					</ul>
				</div>
			</section>

			<section id="skills" className="resume-section">
				<h2 className="section-header">Skills</h2>
				<div id="programming-languages">
					<h3 className="subsection-header">Programming Languages</h3>
					<ul className="skill-list">
						<li>Java</li>
						<li>JavaScript</li>
						<li>Python</li>
						<li>Swift</li>
						<li>C</li>
						<li>Unreal Engine/C++</li>
					</ul>
				</div>
				<div id="computer-skills">
					<h3 className="subsection-header">Computer Skills</h3>
					<ul className="skill-list">
						<li>Github</li>
						<li>GUI Programming/HTML</li>
						<li>Object-Oriented Programming</li>
						<li>Regular Expressions</li>
					</ul>
				</div>
			</section>

			<section id="honors-and-awards" className="resume-section">
				<h2 className="section-header">Honors and Awards</h2>
				<ul className="honors-list">
					<li>Member of the Engineering Living Learning Community (Galileo) <span className="date-range">August 2019 – May 2020</span></li>
					<li>AP Scholar with Distinction <span className="date-range">July 2019</span></li>
					<li>Member of the Virginia Tech Honors College <span className="date-range">January 2020 – PRESENT</span></li>
					<li>Member of the BHS Chapter of the Math Honors <span className="date-range">Society October 2018 - May 2019</span></li>
				</ul>
			</section>
		</div>
	);
}

export default MainResume;