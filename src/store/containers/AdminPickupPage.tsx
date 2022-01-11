import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchPickupEvent, fetchFuturePickupEvents } from '../storeActions';
import { PublicOrderPickupEvent } from '../../types';
import { notify } from '../../utils';

import PageLayout from '../../layout/containers/PageLayout';
import AdminPickupPage from '../components/AdminPickupPage';

interface AdminPickupPageContainerProps {
  fetchPickupEvent: Function;
  fetchFuturePickupEvents: Function;
}

const AdminPickupPageContainer: React.FC<AdminPickupPageContainerProps> = (props) => {
  const params: { [key: string]: any } = useParams();
  const { uuid } = params;

  const [pickupEvent, setPickupEvent] = useState<PublicOrderPickupEvent>();
  const [pickupEvents, setPickupEvents] = useState<Array<PublicOrderPickupEvent>>([]);

  useEffect(() => {
    if (uuid) {
      props
        .fetchPickupEvent(uuid)
        .then((value) => {
          setPickupEvent(value);
        })
        .catch((reason) => {
          notify('API Error', reason.message || reason);
        });
    } else {
      props
        .fetchFuturePickupEvents()
        .then((value) => {
          setPickupEvents(value);
        })
        .catch((reason) => {
          notify('API Error', reason.message || reason);
        });
    }
  }, [props, uuid]);

  return (
    <PageLayout>
      <AdminPickupPage pickupEvent={pickupEvent} pickupEvents={pickupEvents} />
    </PageLayout>
  );
};

export default connect(null, { fetchPickupEvent, fetchFuturePickupEvents })(AdminPickupPageContainer);
