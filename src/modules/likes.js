// const likes = (e) => {
//   const involmentAppID = 'hrqIdiXTh94rmLQMrXcG';
//   const index = Number(e.target.dataset.id);
//   fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involmentAppID}/likes/`, {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: index,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const text = e.target.parentElement.children[1].children[0].innerText;
//   const number = Number(text.slice(0, text.length - 6));
//   e.target.parentElement.children[1].children[0].innerText = `${number + 1}${text.slice(text.length - 6, text.length)}`;
// };
// export default likes;

//Working on Involvement API
const idlikes = '4fC4h2xqQOQaR0Thy8n4'

//post likes
const addLike = async () => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idlikes}/likes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        "item_id": id,
      })      
    })
    
    const data = await response.text();
    console.log(data);
    userComments(id)
    return data;
  } catch (error) {
    throw new Error('User not found!');
  }
};

// Get users comments
const userComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4fC4h2xqQOQaR0Thy8n4/likes?item_id=${id}`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error('Not Found!!!.');
  }
};


export default likes;