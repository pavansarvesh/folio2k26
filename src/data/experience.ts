export type Experience = {
	slug: string;
	expTitle: string;
	company: string;
	location: string;
	description: string;
	startDate: string;
	endDate: string;
};

export const experiences: Experience[] = [
	{
		slug: "lead-organizer",
		expTitle: "Lead Organizer",
		company: "Bi0s Cybersecurity Meetup",
		location: "Bengaluru, Karnataka",
		description: "Heading bi0s Cybersecurity Meetups",
		startDate: "Jul 2025",
		endDate: "Present",
	},
	{
		slug: "development-team-lead",
		expTitle: "Development Team Lead",
		company: "Team bi0sblr",
		location: "Bengaluru, Karnataka",
		description: "Leading Bi0s-dev the infra team of bi0s-Bangalore",
		startDate: "Jul 2025",
		endDate: "Present",
	},
	{
		slug: "fullstack-developer",
		expTitle: "Full-stack Developer",
		company: "Team bi0sblr",
		location: "Bengaluru, Karnataka",
		description:
			"Helping The community to design and build websites and posters for the meetups",
		startDate: "Jan 2025",
		endDate: "Jul 2025",
	},
	{
		slug: "mentor",
		expTitle: "Mentor",
		company: "GirlScript Summer of code",
		location: "",
		description:
			"Mentoring fellow contributors to write and develop safe and bug free code",
		startDate: "Jul 2025",
		endDate: "Oct 2025",
	},
	{
		slug: "grc-intern",
		expTitle: "GRC Intern",
		company: "Cybersecurity-NxxT",
		location: "Coimbatore, Tamil Nadu",
		description: `Learnt about Governance, Risk and Compliance and IS027001
	Made my own Risk Assessment Sheet and did a sample Risk Assessment based on IS027001`,
		startDate: "Jun 2025",
		endDate: "Jun 2025",
	},
];
