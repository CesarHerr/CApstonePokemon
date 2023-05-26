const commentCounter = () => {
  const howManyComments = document.querySelector('.comments-list').childElementCount;

  if (howManyComments !== 0) {
    document.getElementById('count').innerHTML = `(${howManyComments})`;
  } else {
    document.getElementById('count').innerHTML = '  (No comment yet)';
  }
};

export default commentCounter;