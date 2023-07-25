const generateRandomPassword = (length) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChar = '!@#$%^&*()_-+=<>?';
  
    const allChar = uppercase + lowercase + numbers + specialChar;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChar.length);
      password += allChar[randomIndex];
    }
  
    return password;
  };
  
  const passwordLength = 5;
  const randomPass = generateRandomPassword(passwordLength);
  console.log("Password:", randomPass);
  