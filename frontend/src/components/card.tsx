export default function Card({
	imgSource,
	title,
	price,
	description,
	likes,
	handleLike,
}: {
	imgSource: string;
	title: string;
	price: string;
	description: string;
	likes: number;
	handleLike: (isLike: boolean) => void;
}) {
	return (
		<div className="w-full h-2/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gray-200">
			<img
				className="p-4 w-full h-80 rounded-t-lg"
				src={imgSource}
				alt="product"
			/>
			<div className="px-5 pb-5">
				<h5 className="text-2xl font-semibold tracking-tight text-gray-900">
					{title}
				</h5>
				<p className="text-md font-thin rounded">{description}</p>
				<div className="flex items-center justify-between">
					<span className="text-xl font-bold text-gray-900">{price}</span>
				</div>
			</div>
			<div>
				<button
					className="px-5 pb-5"
					type="button"
					onClick={() => handleLike(!likes)}
				>
					{likes > 0 ? <span>♥️</span> : <span>♡</span>}
					<span>{likes}</span>
				</button>
				<button></button>
			</div>
		</div>
	);
}
