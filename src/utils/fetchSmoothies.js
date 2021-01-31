import { projectFirestore } from '../firebase/config';

// fetch data from our firestore
export const fetchSmoothies = () => {
  const fetchedSmoothies = [];
  projectFirestore
    .collection('smoothies')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let smoothie = doc.data();
        smoothie.id = doc.id;
        fetchedSmoothies.push(smoothie);
      });
    })
    .catch((err) => console.log(err.message));

  return fetchedSmoothies;
};
