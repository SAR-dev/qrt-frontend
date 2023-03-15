import EventDisclaimers from '@src/components/EventDisclaimers';
import EventLayout from '@src/components/EventLayout';
import EventSummary from '@src/components/EventSummary';
import { Block } from 'konsta/react';
import { MdPayments } from 'react-icons/md';
import Bkash from '@images/payment/bkash.svg';
import Nagad from '@images/payment/nagad.svg';
import OkWallet from '@images/payment/okwallet.svg';
import Rocket from '@images/payment/rocket.svg';
import Upay from '@images/payment/upay.svg';
import { useState } from 'react';
import classNames from 'classnames';

const payment_methods = [
  {
    name: 'Bkash',
    logo: Bkash,
    redirectUrlBase: '',
    id: 'bkash',
  },
  {
    name: 'Rocket',
    logo: Rocket,
    redirectUrlBase: '',
    id: 'rocket',
  },
  {
    name: 'Nagad',
    logo: Nagad,
    redirectUrlBase: '',
    id: 'nagad',
  },
  {
    name: 'OkWallet',
    logo: OkWallet,
    redirectUrlBase: '',
    id: 'okwallet',
  },
  {
    name: 'Upay',
    logo: Upay,
    redirectUrlBase: '',
    id: 'upay',
  },
];

const EventTicket = () => {
  const [activeId, setActiveId] = useState('');
  return (
    <EventLayout showSegments={false}>
      <Block inset strong>
        <EventSummary />
      </Block>
      <Block inset strong>
        <EventDisclaimers />
      </Block>
      <Block inset strong>
        <div className="space-y-3">
          <div className="form-control">
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                checked
                className="checkbox checkbox-sm checkbox-info"
              />
              <span className="label-text">
                I read all carefully and I agree to the rules and regulations
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                checked
                className="checkbox checkbox-sm checkbox-info"
              />
              <span className="label-text">
                I am ready to pay 20$ to buy the ticket.
              </span>
            </label>
          </div>
        </div>
      </Block>
      <Block inset strong>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center font-semibold">
              <MdPayments size={20} />
              <p>Payments Section</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {payment_methods.map((e, i) => (
              <button
                className={classNames({
                  'bg-white rounded border-2 p-2': true,
                  'border-gray-200 hover:border-teal-500 ring-2 ring-transparent':
                    e.id !== activeId,
                  'ring-2 ring-teal-500': e.id === activeId,
                })}
                onClick={() => setActiveId(e.id)}
                key={e.id}
              >
                <img className="h-16 object-contain" src={e.logo} alt="" />
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="btn btn-sm btn-primary w-full">
              Continue Payment
            </button>
          </div>
        </div>
      </Block>
    </EventLayout>
  );
};

export default EventTicket;
