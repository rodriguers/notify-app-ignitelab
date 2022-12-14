/* eslint-disable prettier/prettier */
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

//Fake repository === camada de persistĂȘncia
//"Banco de dados"
const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
