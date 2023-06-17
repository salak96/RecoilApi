import { atom, selector } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: null,
});

// userState.js

export const userNameState = selector({
    key: 'userNameState',
    get: ({ get }) => {
        const user = get(userState);
        return user ? user.name : '';
    },
});
