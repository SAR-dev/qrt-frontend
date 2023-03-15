import { ImCalendar } from 'react-icons/im';
import { MdAvTimer, MdMoney, MdMyLocation } from 'react-icons/md';
import { RiAdminFill, RiMapPin5Line } from 'react-icons/ri';

const EventSummary = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex space-x-2 items-center">
          <RiAdminFill size={20} />
          <div>Hosted by</div>
          <div className="font-semibold">Sayed Rafi</div>
        </div>
        <div className="flex space-x-2 items-center">
          <MdMyLocation size={20} />
          <div className="font-semibold">Dhaka</div>
        </div>
        <div className="flex space-x-2 items-center">
          <ImCalendar size={18} />
          <div className="font-semibold">25 February</div>
        </div>
        <div className="flex space-x-2 items-center">
          <MdAvTimer size={20} />
          <div className="font-semibold">12:00 - 19:00</div>
        </div>
        <div className="flex space-x-2 items-center">
          <MdMoney size={20} />
          <div className="font-semibold">20$</div>
        </div>
        <div>
          <a
            href="#"
            target="_blank"
            className="btn btn-xs btn-outline border-gray-200 btn-ghost gap-2 rounded"
          >
            <RiMapPin5Line size={16} />
            Google Map
          </a>
        </div>
      </div>
      <p>
        Current documentation doesn't cover the process of compilation of Konsta
        UI app to Cordova or Capacitor app. It is about Konsta UI and how to use
        all of its components. To learn more about how to compile your app to
        hybrid Cordova or Capacitor app that can be released at iOS and Google
        Play store refer to their official documentations.
      </p>
    </>
  );
};

export default EventSummary;
