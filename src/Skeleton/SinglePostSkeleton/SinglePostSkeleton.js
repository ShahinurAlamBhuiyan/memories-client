import Skeleton from '../Skeleton';
import './SinglePostSkeleton.css';

const SkeletonProducts = () => {
	return (
            <div className='skeleton-wrapper'>
			<Skeleton type='thumbnail' />
			<Skeleton type='text-lg' />
			<Skeleton type='text-lg' />
			<Skeleton type='text-llg' />
			<Skeleton type='text-md' />
			<Skeleton type='text-sm' />
			<div className='shimmer-wrapper'>
				<div className='shimmer'></div>
			</div>
		</div>
	);
};
export default SkeletonProducts;