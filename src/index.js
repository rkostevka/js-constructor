// import { model } from "./models/model";
// import "./styles/style.css";
// import { templates } from "./templates";

// const $site = document.querySelector('#site');

// model.forEach(block => {
// 	const toHtml = templates[block.type];
// 	if(toHtml) {
// 		$site.insertAdjacentHTML('beforeend', toHtml(block));
// 	}
// })

const model = [
	{
		type: "title",
		value: {
			name: "SACHA DUBOIS",
			position: "SOFTWARE DEVELOPER",
		},
	},
	{
		type: "info",
		value: {
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
				],
			},
		},
	},
];
const $sidebar = document.querySelector("#sidebar-box");

model.forEach(item => {
	let html = '';
	if(item.type === 'title') {
		html = `
			<div class="sidebar__title title">
				<h1 class="title__name">${item.value.name}</h1>
				<h4 class="title__position">${item.value.position}</h4>
			</div>
			<div class="sidebar__line"></div>
		`;
	} else if(item.type === 'info') {
		html = `<div class="sidebar__info info">`;
		Object.entries(item.value).forEach(([key, val]) => {
			html += `
				<div class="info__box">
					<div class="info__title">
						<h5>${val.title}</h5>
					</div>
					<div class="info__text">
						${Array.isArray(val.text) ? val.text.join("<br>") : val.text}
					</div>
				</div>
			`;
		});
		html += `</div>`;
	}
	$sidebar.insertAdjacentHTML("beforeend", html);
})