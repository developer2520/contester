
import { Hono } from 'hono';
import { getAdminChannels } from '../controllers/getChannelsOfUser.ts';

const router = new Hono();

// Route to get the list of channels
router.get('/api/channels', async (c) => {
  try {
    const channels = await getAdminChannels();
    return c.json({ channels });
  } catch (error) {
    return c.json({ error: 'Failed to fetch channels' }, 500);
  }
});

export default router;
