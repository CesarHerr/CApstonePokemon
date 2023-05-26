const commentCounter = (allComments) => {
  const howManyComments = allComments.childElementCount;

  if (howManyComments !== 0) {
    return howManyComments;
  
  } else {

    return 0;
  
  }
};

export default commentCounter;