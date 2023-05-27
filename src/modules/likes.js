import { fetchLikes } from './home.js';

const likes = async (e) => {
  const index = Number(e.target.dataset.id);
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4fC4h2xqQOQaR0Thy8n4/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: index,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await fetchLikes(index);
};

export default likes;