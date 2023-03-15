import { useState } from 'react';
import { Block, Sheet, Page, Navbar, Link } from 'konsta/react';
import { RiHeart2Line } from 'react-icons/ri';

const images = [...Array(25)].map(
  (e, i) => `https://picsum.photos/seed/picsum${i}/600/300`
);

const EventGallery = () => {
  const [data, setData] = useState([...images]);

  return (
    <>
      <Block inset strong className="space-y-4 mt-2">
        <div className="grid grid-cols-2 gap-3">
          {data.map((el, i) => (
            <button className="group" key={i}>
              <img
                src={el}
                className="h-48 w-full object-cover rounded group-hover:opacity-75"
              />
            </button>
          ))}
        </div>
      </Block>
    </>
  );
};

export default EventGallery;
