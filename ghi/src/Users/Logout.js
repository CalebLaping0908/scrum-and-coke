import React, { useState } from 'react';
import { useToken, useAuthContext } from '../Auth';

function LoginForm() {
    const [, , logout] = useToken();
    const {isLoggedIn} = useAuthContext();

    const handleSubmit = async (event) => {
    event.preventDefault();

    const error = await logout();
    if (error) {
        isLoggedIn(true);
    }

    };

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Logout</h1>
            <form onSubmit={handleSubmit} id="logout-form">
              <button className="btn btn-danger">Logout</button>
            </form>
          </div>
        </div>
      </div>
    )

}

export default LoginForm;
