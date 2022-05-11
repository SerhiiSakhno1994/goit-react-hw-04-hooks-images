function FetchPixabay(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=25818588-81f655bfb5dc7dceedfe6e773&image_type=photo&orientation=horizontal&per_page=12`
  ).then(r => r.json());
}

export default FetchPixabay;
