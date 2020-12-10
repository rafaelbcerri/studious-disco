import { getPosts } from '../../services/firebase.js';

export const Timeline = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
    <div>
      <h1>Timeline</h1>
      <hr />
      <div id='content'>
        <p> Loading ... </p>
      </div>
    </div>
  `;

  getPosts()
    .then(( snapshot ) => {
      const postList = snapshot.docs.map((doc) => postListItem(doc.data())).join('');
      const contentElem = rootElement.querySelector('#content');
      contentElem.innerHTML = `<ul>${postList}</ul>`;
    });

  return rootElement;
};

const postListItem = ({ text }) => `<li>${text}</li>`;
