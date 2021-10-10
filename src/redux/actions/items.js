import axios from 'axios';

export const fetchContent = () => (dispatch) => {
  axios.get('https://sweb.ru/export/turbojournal/', {
    "Content-Type": "application/xml; charset=utf-8"
  })
    .then((data) => {

      dispatch(setTitle([...data.request.responseXML.getElementsByTagName('item')]))
    })
    .catch(err => console.log(err))

}

export const setTitle = (title) => ({
  type: 'SET_TITLE',
  payload: title,
})

export const setContent = (items) => ({
  type: 'SET_CONTENT',
  payload: items,
})