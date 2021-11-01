
import image from '../assets/photo.jpg';
import {ImageBlock, TitleBlock, InfoBlock} from '../classes/block';

export const model = [
	new ImageBlock(image, {}, "imageModal"),
	new TitleBlock(
		{
			name: "Sacha Dubois",
			position: "Software developer",
		},
		{
			styles: {
				background: "#ff0000",
				color: "#fff",
			}
		},
		"titleModal"
	),
	new InfoBlock(
		{
			block1: {
				title: "PERSONAL PROFILE",
				text: "I am a software developer and systems architect with experience in designing, coding, and testing complex systems. I'm highly proficient in C#, Java, and Ruby.",
			},
			block2: {
				title: "AREAS OF EXPERTISE",
				text: [
					"System AnalysisUser Research",
					"Object-Oriented Design",
					"Optimization",
					"Machine LearningAgile Methodology",
					"Database Modelling",
					"Software Testing and Debugging",
				],
			},
			block3: {
				title: "CONTACT INFO",
				text: [
					"Office Address: 123 Anywhere St., Any City, State, Country 12345",
					"Email: hello@reallygreatsite.com",
					"Portfolio: www.reallygreatsite.com",
					"LinkedIn: @reallygreatsite",
				]
			}
		},
		{},
		"infoModal"
	)
];

