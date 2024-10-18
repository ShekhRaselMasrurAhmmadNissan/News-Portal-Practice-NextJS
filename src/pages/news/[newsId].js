import RootLayout from '@/components/Layouts/RootLayout';

const NewsDetailsPage = () => {
	return <div>Enter</div>;
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};
