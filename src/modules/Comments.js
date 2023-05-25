//Working on Involvement API
const idComments = 'zVvcayqMcKSodjVAeGk6'

//post comment
const addComment = async (id, username, comment) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idComments}/comments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        "item_id": id,
        "username": username,
        "comment": comment
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
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zVvcayqMcKSodjVAeGk6/comments?item_id=${id}`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error('Not Found!!!.');
  }
};


export default addComment;