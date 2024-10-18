import RootLayout from '@/components/Layouts/RootLayout';
import {
	CalendarOutlined,
	CommentOutlined,
	ProfileOutlined,
} from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';

const NewsDetailsPage = ({ news }) => {
	const { Meta } = Card;

	return (
		<div>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" span={12}>
					<div>
						<Image
							src={news?.image_url}
							width={500}
							height={300}
							responsive
							alt="news details image"
						/>
					</div>
				</Col>
				<Col className="gutter-row" span={12}>
					<div>
						{/* <Meta title={news?.title} description={news?.details} /> */}
						<h1>{news?.title}</h1>

						<div
							className="line"
							style={{
								height: '5px',
								margin: '20px 0',
								background: '#000',
								width: '100%',
							}}
						></div>

						<p
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
								color: 'gray',
								margin: '10px 0px',
								fontSize: '12px',
							}}
						>
							<span>
								<CalendarOutlined /> {news?.release_date}
							</span>
							<span>
								<CommentOutlined /> {news?.comment_count}{' '}
								{news?.comment_count > 1
									? 'Comments'
									: 'Comment'}
							</span>
							<span>
								<ProfileOutlined /> {news?.category}
							</span>
						</p>

						<p style={{ fontSize: '20px' }}>{news?.description}</p>
					</div>
				</Col>
			</Row>
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
