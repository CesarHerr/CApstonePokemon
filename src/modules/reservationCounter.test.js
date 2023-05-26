import reservationCounter from './reservationCounter.js';

describe('reservationCounter', () => {
  test('Empty div (No comments)', () => {
    // Arrange
    const allReservations = document.createElement('div');

    document.body.appendChild(allReservations);

    // Act
    const result = reservationCounter(allReservations);

    // Assert
    expect(result).toBe(0);
  });

  test('Element counter inside of a div of comments ', () => {
    // Arrange
    const allReservations = document.createElement('div');
    allReservations.innerHTML = `
        <p>2023-05-27 - 2023-05-28 by Ruben</p>
        <p>2023-06-01 - 2023-06-09 by Raul</p>
        <p>2023-05-27 - 2023-05-28 by Player 1</p>
        `;

    document.body.appendChild(allReservations);

    // Act
    const result = reservationCounter(allReservations);

    // Assert
    expect(result).toBe(3);
  });
});