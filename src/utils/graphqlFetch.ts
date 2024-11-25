export default function graphqlFetch(uri, query) {
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('POST', uri);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
    console.log('data returned:', xhr.response);
};

}