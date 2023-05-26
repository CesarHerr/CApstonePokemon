import commentCounter from './counterComments.js';

describe('commentCounter', () => {
  test('Empty div (No comments)', () => {
    // Arrange
    const allComments = document.createElement('div');

    document.body.appendChild(allComments);

    // Act
    const result = commentCounter(allComments);

    // Assert
    expect(result).toBe(0);
  });

  test('Element counter inside of a div of comments ', () => {
    // Arrange
    const allComments = document.createElement('div');
    allComments.innerHTML = `
              <li >02/05/25 José: comment 1</li>
              <li >02/05/25 Rubén: comment 2</li>
              <li >02/05/25 César: comment 3</li>              
          `;

    document.body.appendChild(allComments);

    // Act
    const result = commentCounter(allComments);

    // Assert
    expect(result).toBe(3);
  });
});