const reservationCounter = (reservationsContainer) => {
  const howManyReservations = reservationsContainer.childElementCount;

  if (howManyReservations !== 0) {
    return howManyReservations;
  }

  return 0;
};

export default reservationCounter;