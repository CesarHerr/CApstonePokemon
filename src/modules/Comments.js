import commentCounter from './counterComments.js';

// Working on Involvement API
const idComments = 'zVvcayqMcKSodjVAeGk6';

// Get users comments
const userComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zVvcayqMcKSodjVAeGk6/comments?item_id=${id}`);
    const data = await response.json();

    const commentsList = document.querySelector('.comments-list');

    commentsList.innerHTML = await data
      .map(
        (comment) => `
        <li><em>${comment.creation_date}</em>  <b>${comment.username} :</b> ${comment.comment}</span></li>                        
      `,
      )
      .join('');
    const totalComments = await commentCounter(commentsList);
    document.getElementById('count').innerHTML = `${totalComments}`;
  } catch {
    const commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = 'Give us your Comments!';
    const totalComments = await commentCounter(commentsList);
    document.getElementById('count').innerHTML = `${totalComments}`;
  }
};

// post comment
const addComment = async (id, username, comment) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idComments}/comments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    });

    const data = await response.text();

    await userComments(id);
    return data;
  } catch (error) {
    throw new Error('User not found!');
  }
};

export { addComment, userComments };