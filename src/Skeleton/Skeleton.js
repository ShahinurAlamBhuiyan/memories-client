import './Skeleton.css';
const Skeleton = ({ type }) => {
	return (
		<div className='skeleton'>
			<div className={type}></div>
		</div>
	);
};
export default Skeleton;
