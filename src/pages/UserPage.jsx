import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        replies={238}
        likes={801}
        title="Let's talk about Threads"
        image="/post1.png"
        postUrl={'/post/1'}
      />
      <UserPost
        replies={348}
        likes={701}
        title="Nice tutorial dude"
        image="/post2.png"
        postUrl={'/post/2'}
      />
      <UserPost
        replies={438}
        likes={501}
        title="Elon Musk 😎"
        image="/post3.png"
        postUrl={'/post/3'}
      />
      <UserPost
        replies={538}
        likes={1000}
        title="This is my first post"
        postUrl={'/post/4'}
      />
    </>
  );
};

export default UserPage;
