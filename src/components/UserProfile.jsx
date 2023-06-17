import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { getUserData } from '../api/fakeApi';
import { userState } from '../Atom/userState';
import { useEffect } from 'react';

function UserProfile() {
    const [user, setUser] = useRecoilState(userState);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Panggil API palsu saat komponen dipasang
        getUserData(inputValue)
            .then((userData) => setUser(userData))
            .catch((error) => console.log(error));
    }, [inputValue, setUser]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Email : {user.email}</p>
            <p>Silahkan inputkan nama 1-10</p>
            <input value={inputValue} onChange={handleInputChange} />
        </div>
    );
}

export default UserProfile;
