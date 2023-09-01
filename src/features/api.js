// api.js
export const loginAPI = async (credentials) => {
    const response = await fetch('http://31.220.20.11:8080/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Could not authenticate.');
    }
  
    const user = await response.json();
    return user;
  };
  