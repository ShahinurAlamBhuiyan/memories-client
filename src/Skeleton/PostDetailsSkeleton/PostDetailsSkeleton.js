import Skeleton from '../Skeleton';
import './PostDetailsSkeleton.css'
const PostDetailsSkeleton = () => {
	return (
		<div className="type-wrapper">
			<div>
				<div className="title-div">
					<Skeleton type='text-title' />
					<div className='title-shimmer-wrapper'>
						<div className="title-shimmer"></div>
					</div>
				</div>
				<div className="tag-div">
					<Skeleton type='text-tag' />
					<div className='tag-shimmer-wrapper'>
						<div className="tag-shimmer"></div>
					</div>
				</div>
				<div className="comment-div">
					<Skeleton type='text-comment' />
					<div className='comment-shimmer-wrapper'>
						<div className="comment-shimmer"></div>
					</div>
				</div>
				<div className="tag-div">
					<Skeleton type='text-tag' />
					<div className='tag-shimmer-wrapper'>
						<div className="tag-shimmer"></div>
					</div>
				</div>
				<div className="tag-div">
					<Skeleton type='text-tag' />
					<div className='tag-shimmer-wrapper'>
						<div className="tag-shimmer"></div>
					</div>
				</div>
			</div>

			<div className="thumbnail-div">
				<Skeleton type='thumbnail' />
				<div className='thumbnail-shimmer-wrapper'>
					<div className="thumbnail-shimmer"></div>
				</div>
			</div>
		</div>
	);
};
export default PostDetailsSkeleton;