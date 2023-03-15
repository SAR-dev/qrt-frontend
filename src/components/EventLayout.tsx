import { ReactNode, useState } from 'react';
import TopNavbar from '@src/components/TopNavbar';
import useScrollPosition from '@src/hooks/useScrollPosition';
import { Page, Segmented, SegmentedButton } from 'konsta/react';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { useNavigate, useParams, Link } from 'react-router-dom';

const id = 'event';

interface EventLayoutProps {
  showSegments?: boolean;
  children: ReactNode;
}

const EventLayout = (props: EventLayoutProps) => {
  const scrollPosition = useScrollPosition(id);
  const { event_id } = useParams<{ event_id?: string }>();
  const { section } =
    useParams<{ section?: 'details' | 'discussion' | 'gallery' }>();
  const navigate = useNavigate();

  return (
    <Page id={id}>
      <TopNavbar
        title="Takayama Festival"
        right={{
          component: (
            <Link
              to={`/events/${event_id}/ticket`}
              className="btn btn-primary btn-sm"
            >
              (50$) Buy Ticket
            </Link>
          ),
          show: scrollPosition > 50,
        }}
      />
      <div className="relative">
        <img
          className="h-56 w-full object-cover"
          src="https://wallpapercave.com/wp/wp1916914.jpg"
          alt=""
        />
        <div className="absolute bottom-0 m-4">
          <div className="bg-white px-3 py-1 rounded flex items-center space-x-1">
            <MdOutlineEmojiPeople />
            <p className="font-semibold">433</p>
            <p>GOING</p>
          </div>
        </div>
      </div>
      {props.showSegments && (
        <div className="mt-2 mx-4">
          <Segmented strong>
            <SegmentedButton
              strong
              active={!section || section === 'details'}
              onClick={() => navigate(`/events/${event_id}/details`)}
              className="py-5"
            >
              Details
            </SegmentedButton>
            <SegmentedButton
              strong
              active={section === 'discussion'}
              onClick={() => navigate(`/events/${event_id}/discussion`)}
              className="py-5"
            >
              Discussion
            </SegmentedButton>
            <SegmentedButton
              strong
              active={section === 'gallery'}
              onClick={() => navigate(`/events/${event_id}/gallery`)}
              className="py-5"
            >
              Gallery
            </SegmentedButton>
          </Segmented>
        </div>
      )}
      {props.children}
    </Page>
  );
};

export default EventLayout;
