type Props = {
  reviews: Array<{
    id: string;
    author: string;
    content: string;
    created_at: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string;
    };
  }>;
};

const ReviewsList = ({ reviews }: Props) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl">Reviews</h1>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-8 pt-8 pb-16">
        {reviews.length > 0 ? (
          reviews?.map((review) => {
            return (
              <div key={review?.id} className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <img
                    src={
                      review?.author_details?.avatar_path
                        ? `https://image.tmdb.org/t/p/w500${review?.author_details?.avatar_path}`
                        : 'https://via.placeholder.com/50x50'
                    }
                    alt="avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col ">
                    <span className="text-base">{review.author}</span>
                    <span className="text-sm text-gray-500">
                      {review?.author_details?.username}{' '}
                    </span>
                  </div>
                </div>
                <span>{review?.content}</span>
                <span>
                  Posted on the{' '}
                  {new Date(review?.created_at).toLocaleDateString()}
                </span>
              </div>
            );
          })
        ) : (
          <p>No reviews found</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsList;
