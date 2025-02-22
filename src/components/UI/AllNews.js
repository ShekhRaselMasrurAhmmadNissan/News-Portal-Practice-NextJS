import { Card, Col, Row } from 'antd';
import Image from 'next/image';

import {
	ArrowRightOutlined,
	CalendarOutlined,
	CommentOutlined,
	ProfileOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const AllNews = ({ allNews }) => {
	console.log(allNews);
	const { Meta } = Card;
	return (
		<>
			<h1
				style={{
					textAlign: 'center',
					fontSize: '50px',
					margin: '30px 0px',
				}}
			>
				#TODAY HIGHLIGHT
			</h1>

			{/* Row Start */}
			<Row
				gutter={{
					xs: 8,
					sm: 16,
					md: 24,
					lg: 32,
				}}
			>
				{allNews.map((news) => (
					// Column Card Start
					<Col key={news?.id} className="gutter-row" span={6}>
						<Card
							hoverable
							cover={
								<Image
									src={news?.image_url}
									width={500}
									height={200}
									responsive
									alt="news details image"
								/>
							}
						>
							<Meta
								title={news?.title}
								description={news?.details}
							/>

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

							<p style={{ fontSize: '15px' }}>
								{news?.description.length > 100
									? news?.description.slice(0, 97) + '...'
									: news?.description}
							</p>

							<Link href={`/news/${news?.id}`}>
								<p
									style={{
										fontSize: '15x',
										marginTop: '20px',
										background: 'black',
										color: 'white',
										width: '100%',
										padding: '2px 5px',
										fontWeight: '300',
										letterSpacing: '3px',
										textAlign: 'center',
									}}
								>
									KEEP READING <ArrowRightOutlined />
								</p>
							</Link>
						</Card>
					</Col>
					// Column Card End
				))}
			</Row>
			{/* Row End */}
		</>
	);
};

export default AllNews;
