import { Block } from 'konsta/react';
import {
  FaUserGraduate,
  FaUserCircle,
  FaUserAstronaut,
  FaHandsHelping,
} from 'react-icons/fa';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import EventSummary from '@src/components/EventSummary';
import EventDisclaimers from '@src/components/EventDisclaimers';

const EventDetails = () => {

  return (
    <>
      <Block inset strong className="space-y-4 mt-2">
        <EventSummary />
      </Block>

      <Block strong inset>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex space-x-2 items-center font-semibold border-b pb-2">
              <FaUserAstronaut size={20} />
              <p>Event Managers</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(5)].map((e, i) => (
                <div className="flex space-x-3 items-center" key={i}>
                  <div className="avatar">
                    <FaUserCircle size={30} />
                  </div>
                  <div className="space-y-.5">
                    <p className="font-semibold text-sm">Sayed Rafi</p>
                    <div className="text-xs">Food Manager</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-2 items-center font-semibold border-b pb-2">
              <FaUserGraduate size={20} />
              <p>Guests</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[...Array(2)].map((e, i) => (
                <div className="space-y-2" key={i}>
                  <div className="flex space-x-3 items-center">
                    <div className="avatar">
                      <FaUserCircle size={30} />
                    </div>
                    <div className="space-y-.5">
                      <p className="font-semibold text-sm">Sayed Rafi</p>
                      <div className="text-xs">Food Manager</div>
                    </div>
                  </div>
                  <p>
                    Current documentation doesn't cover the process of
                    compilation of Konsta UI app to Cordova or Capacitor app. It
                    is about Konsta UI and how to use all of its components.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-2 items-center font-semibold border-b pb-2">
              <FaHandsHelping size={20} />
              <p>Contributors</p>
            </div>
            <div className="grid grid-cols-7 gap-3">
              {[...Array(15)].map((e, i) => (
                <a className="" href="#" target="_blank" key={i}>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://api.multiavatar.com/${i}.svg`}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Block>

      <Block strong inset className="space-y-4 mt-4">
        <EventDisclaimers />
      </Block>

      <Block strong inset className="space-y-6 mt-4">
        <div className="space-y-4">
          <div className="flex space-x-2 items-center font-semibold border-b pb-2">
            <BsFillBookmarkHeartFill size={20} className="text-red-500" />
            <p>Platinum Sponsors</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((e, i) => (
              <a href="" target="_blank" className="space-y-1" key={i}>
                <img
                  className="h-10"
                  src={`https://api.multiavatar.com/${i}.svg`}
                  alt=""
                />
                <div className="font-semibold">Gitlab</div>
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-2 items-center font-semibold border-b pb-2">
            <BsFillBookmarkHeartFill size={20} className="text-yellow-500" />
            <p>Gold Sponsors</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((e, i) => (
              <a href="" target="_blank" className="space-y-1" key={i}>
                <img
                  className="h-10"
                  src={`https://api.multiavatar.com/${i}.svg`}
                  alt=""
                />
                <div className="font-semibold">Gitlab</div>
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-2 items-center font-semibold border-b pb-2">
            <BsFillBookmarkHeartFill size={20} className="text-gray-500" />
            <p>Silver Sponsors</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((e, i) => (
              <a href="" target="_blank" className="space-y-1" key={i}>
                <img
                  className="h-10"
                  src={`https://api.multiavatar.com/${i}.svg`}
                  alt=""
                />
                <div className="font-semibold">Gitlab</div>
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-2 items-center font-semibold border-b pb-2">
            <BsFillBookmarkHeartFill size={20} />
            <p>Special Thanks</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((e, i) => (
              <a href="" target="_blank" className="space-y-1" key={i}>
                <img
                  className="h-10"
                  src={`https://api.multiavatar.com/${i}.svg`}
                  alt=""
                />
                <div className="font-semibold">Gitlab</div>
              </a>
            ))}
          </div>
        </div>
      </Block>
    </>
  );
};

export default EventDetails;
