import PostCard from '@src/components/PostCard';
import { Block } from 'konsta/react';
import { TfiCommentsSmiley, TfiComments, TfiClipboard } from 'react-icons/tfi';

const EventDiscussion = () => {
  return (
    <div className="mt-2 space-y-2">
      <Block inset strong margin="my-0">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <TfiClipboard size={16} />
            <p className="font-semibold">33</p>
            <p className="text-sm">Posts</p>
          </div>

          <div className="flex items-center space-x-2">
            <TfiComments size={16} />
            <p className="font-semibold">33</p>
            <p className="text-sm">Replies</p>
          </div>

          <div className="flex items-center space-x-2">
            <TfiCommentsSmiley size={16} />
            <p className="font-semibold">33</p>
            <p className="text-sm">Reacts</p>
          </div>
        </div>
      </Block>
      <div className="space-y-5">
        <PostCard
          images={[
            'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
            'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
            'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
            'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
            'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
            'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
            'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
          ]}
        />
        <PostCard video="https://www.youtube.com/watch?v=PQeQPV_7euQ" />
      </div>
    </div>
  );
};

export default EventDiscussion;
