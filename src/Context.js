import React, {createContext, useState} from 'react'

export const CustomContext = createContext();

export const Context = (props) => {


    const [user, setUser] = useState({
        userName: 'user',
        email: null,
        token: null,
        id: null,
        cart: [],
        favorites : []
    });

    const addFavorite = (array) => {
        setUser({
            ...user,
            favorites: array
        });
        localStorage.setItem('favorites', JSON.stringify(array))
    };

    const count = user.cart.reduce((acc, rec) => {
        return acc + rec.count
    }, 0);

    const addCart = (id, shoes, size, count) => {
        const find = user.cart.findIndex((item) => item.shoe[0].id === id && item.shoe[0].defaultSize === size);
        if (find >= 0) {
            user.cart[find].count = user.cart[find].count + count;
            setUser({
                ...user,
                cart: [...user.cart]
            });
            localStorage.setItem('cart', JSON.stringify([...user.cart]))
        } else {
            setUser({
                ...user,
                cart: [...user.cart, {
                    shoe: shoes.filter(item => item.id === id),
                    count
                }]
            });
            localStorage.setItem('cart', JSON.stringify([...user.cart, {
                shoe: shoes.filter(item => item.id === id),
                count
            }]))
        }

    };
    const plusCountCart = (id, size) => {
        setUser({
                ...user,
                cart: user.cart.map((item) => {
                    if (item.shoe[0].id === id && item.shoe[0].defaultSize === size) {
                        return {...item, count: item.count + 1}
                    } else {
                        return item
                    }
                })
            }
        );
        localStorage.setItem('cart', JSON.stringify(user.cart.map((item) => {
            if (item.shoe[0].id === id && item.shoe[0].defaultSize === size) {
                return {...item, count: item.count + 1}
            } else {
                return item
            }
        })))
    };
    const minusCountCart = (id, size) => {
        const find = user.cart.findIndex((item) => item.shoe[0].id === id && item.shoe[0].defaultSize === size);

        if (user.cart[find].count < 2) {
            setUser({
                    ...user,
                    cart: user.cart.filter((item) => {
                        return item.shoe[0].id !== id || item.shoe[0].defaultSize !== size
                    })
                }
            );
            localStorage.setItem('cart', JSON.stringify(user.cart.filter((item) => {
                return item.shoe[0].id !== id || item.shoe[0].defaultSize !== size
            })))
            
        } else {
            setUser({
                ...user,
                cart: user.cart.map((item) => {
                    if (item.shoe[0].id === id && item.shoe[0].defaultSize === size) {
                        return {...item, count: item.count - 1}
                    } else {
                        return item
                    }
                })
            })
            localStorage.setItem('cart',JSON.stringify(user.cart.map((item) => {
                if (item.shoe[0].id === id && item.shoe[0].defaultSize === size) {
                    return {...item, count: item.count - 1}
                } else {
                    return item
                }
            })))

        }
    };

    const addUser = (state) => {
        setUser({
            ...user,
            email: state.email,
            token: state.token,
            id: state.id,
            cart: state.cart,
            favorites: state.favorites
        })
    };
    const removeUser = () => {
        setUser({
            ...user,
            email: null,
            token: null,
            id: null,
            cart: [],
            favorites: []
        })
    };

    const value = {
        addCart,
        plusCountCart,
        minusCountCart,
        count,
        user,
        addUser,
        removeUser,
        addFavorite
    };

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

};



