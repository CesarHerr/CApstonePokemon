const likes = (e) => {
  const involmentAppID = 'hrqIdiXTh94rmLQMrXcG';
  const index = Number(e.target.dataset.id);
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involmentAppID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: index,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = e.target.parentElement.children[1].children[0].innerText;
  const number = Number(text.slice(0, text.length - 6));
  e.target.parentElement.children[1].children[0].innerText = `${number + 1}${text.slice(text.length - 6, text.length)}`;
};
export default likes;