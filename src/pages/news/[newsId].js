import RootLayout from '@/components/Layouts/RootLayout';

const NewsDetailsPage = ({ news }) => {
	return (
		<div>
			<h1>{news?.title}</h1>
			<p>{news?.id}</p>
		</div>
	);
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
	const res = await fetch(`http://localhost:5000/news`);
	const data = await res.json();

	const paths = data.map((news) => ({
		params: { newsId: news?.id },
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
	const { params } = context;

	const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
	const data = await res.json();
	// console.log(data);

	return {
		props: {
			news: data,
		},
		revalidate: 10,
	};
};
