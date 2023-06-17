import { useRecoilValue } from 'recoil';
import { userNameState } from '../Atom/userState';

function WelcomeMessage() {
    const userName = useRecoilValue(userNameState);

    return (
        <div>
            <h1>Welcome {userName}</h1>
        </div>
    );
}

export default WelcomeMessage;
