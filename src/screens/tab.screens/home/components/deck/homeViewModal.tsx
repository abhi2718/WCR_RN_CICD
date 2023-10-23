import {useEffect, useState} from 'react';

export const useViewModal = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  function fetchDogImages() {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random/20')
      .then((response) => response.json())
      .then((data) => {
        setImages(data.message);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching dog images:', error));
  }
  useEffect(() => {
    fetchDogImages();
  }, []);
  return {
    isOpen: false,
    images,
    isLoading,
  };
};
