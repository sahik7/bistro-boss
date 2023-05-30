import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(data => {
                const loggedInUser = data.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
                fetch("http://localhost:5000/users", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(saveUser) })
                    .then(res => res.json())
                    .then(() => {
                            navigate(from, { replace: true })
                    })
            })
    }

    return (
        <div>
            <div className="divider bg-slate-300 h-[1px]"></div>
            <div className="text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;