import PostComment from '../components/PostComment';
import PostContent from '../components/PostContent';
import PostHeader from '../components/PostHeader';

const PostPage = () => {
  return (
    <>
      <PostHeader />
      <PostContent />
      <PostComment
        replies={0}
        likes={12}
        commentImageUrl={'https://bit.ly/dan-abramov'}
        commentImageAlt={'Dan Abrahmov'}
        comment={'I love this post! Looks really cool.'}
        commentDate={'2d'}
        commentUsername={'burakorkmez'}
      />
      <PostComment
        replies={0}
        likes={15}
        commentImageUrl={'https://bit.ly/prosper-baba'}
        commentImageAlt={'Prosper Otemuyiwa'}
        comment={'Wow! This is amazing!'}
        commentDate={'2d'}
        commentUsername={'prosperotemuyiwa'}
      />
      <PostComment
        replies={0}
        likes={5}
        commentImageUrl={'https://bit.ly/sage-adebayo'}
        commentImageAlt={'Segun Adebayo'}
        comment={'Really cool dude!'}
        commentDate={'3d'}
        commentUsername={'segunadebayo'}
      />
    </>
  );
};

export default PostPage;
