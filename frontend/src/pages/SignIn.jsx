import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

function SignIn() {
  const [inputAdmin, setInputAdmin] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      dispatch(signInFailure());
    }, 7000);

    if (!formData.email || !formData.password) {
      // return setErrorMessage("Please fill out all fields.");
      return dispatch(signInFailure("Please fill out all fields"));
    }
    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());

      // vite.config.js file
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // setLoading(false);

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
      if (data.success === false) {
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };

  useEffect(() => {
    const getAdminFunc = async () => {
      try {
        const res = await fetch(
          `/api/auth/getadmin/${import.meta.env.VITE_ADMIN_ID}`
        );
        const data = await res.json();

        if (res.ok) {
          setInputAdmin(data.email);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getAdminFunc();
  }, []);

  const getAdminHandle = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      email: inputAdmin,
      password: import.meta.env.VITE_PASS,
    });
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className="font-bold dark:text-white text-4xl ">
            <span className="px-2 py-1 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Movies
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            This is a demo project. You can Sign In with your email and
            password.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            <Button
              gradientDuoTone={"purpleToPink"}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size={"sm"} />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            <Button
              className="bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white"
              type="button"
              outline
              disabled={loading}
              onClick={getAdminHandle}
            >
              Get admin account
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-3">
            <span>Dont have an account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign Up
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
