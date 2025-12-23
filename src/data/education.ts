export type Education = {
	slug: string;
	course: string;
	institute: string;
	location: string;
	startDate: string;
	endDate: string;
};

export const education: Education[] = [
	{
		slug: "amrita-vishwa-vidyapeetham",
		course: "B.Tech Electronics and Computer Engineering",
		institute: "Amrita Vishwa Vidyapeetham",
		location: "Bengaluru, Karnataka",
		startDate: "Sept 2023",
		endDate: "Nov 2027",
	},
	{
		slug: "the-psbb-millennium-school",
		course: "High School Diploma",
		institute: "The PSBB Millennium School",
		location: "Coimbatore, Tamil Nadu",
		startDate: "Jun 2011",
		endDate: "Apr 2023",
	},
];
