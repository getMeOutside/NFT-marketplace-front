import axios from 'axios';

export const getProducts = (maxItems) => {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers`;
  
  return axios.get(url)
    .then(res => {
      return {
        itemIDs: res.data.objectIDs.slice(0, maxItems)
      };
    })
    .then(ids => {
      const prods = ids.itemIDs.map( async id => await getProduct(id));
      return Promise.all(prods).then(values => values);
    })
    .catch(err => {
      console.log(err);
      return [];
    })
}

export const getProduct= (id) => {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const defaultImage = "https://www.cointribune.com/app/uploads/2021/09/bayc2.jpg?nowebp";
  
  return axios.get(url)
    .then(res => {
      const { title, primaryImage, medium } = res.data;
      return { 
        title, 
        image: primaryImage.length ? primaryImage : defaultImage, 
        description: medium 
      };
    })
}