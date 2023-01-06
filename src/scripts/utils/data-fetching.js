const checkResponse = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    throw new Error('Terjadi kesalahan saat memproses data.');
  }
};

const getData = async (url) => {
  const response = await fetch(url);
  return await checkResponse(response);
};

export { getData, checkResponse };
