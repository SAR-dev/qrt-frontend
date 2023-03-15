import EventLayout from '@src/components/EventLayout';
import { useParams } from 'react-router-dom';
import EventDetails from './event/Details';
import EventDiscussion from './event/Discussion';
import EventGallery from './event/Gallery';

const EventSection = () => {
  const { section } =
    useParams<{ section?: 'details' | 'discussion' | 'gallery' }>();
  return (
    <EventLayout showSegments={true}>
      {!section && <EventDetails />}
      {section === 'details' && <EventDetails />}
      {section === 'discussion' && <EventDiscussion />}
      {section === 'gallery' && <EventGallery />}
    </EventLayout>
  );
};

export default EventSection;
