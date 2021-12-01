
export const addUsers = (user,addUser) => {
    addUser({
        email:user.email,
        token: user.accessToken,
        id: user.uid,
        cart: [],
        favorites: []
    });
    localStorage.setItem('email', user.email);
    localStorage.setItem('userName', 'user');
    localStorage.setItem('token', user.accessToken);
    localStorage.setItem('id', user.uid);
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('favorites', JSON.stringify([]));
};