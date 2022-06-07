import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        userCreate,
        loadingCreat,
        errorCreat,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error,] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    let signUpError;
    if (error || errorCreat || updateError) {
        signUpError = <small className='text-red-600'>{error?.message || errorCreat?.message || updateError?.message}</small>
    }
    if (loading || loadingCreat || updating) {
        return <Loading></Loading>
    }

    //google
    if (user || userCreate || updateProfile) {

        console.log(user || userCreate);
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/appointment')
    };
    return (
        <div className='flex justify-center items-center full-screen my-'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-center my-6">Register</h2>
                    {/* <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs my-3" />
                    <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs my-3" />
                    <input type="submit" value="Log In" class="btn text-white btn-secondary input input-bordered w-full max-w-xs my-3" /> */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Email</span>

                            </label>
                            <input
                                type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        // value: /[a-z0-0+@[a-z]+\.[a-z]{2,3}]/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                        </div>
                        {/*------------------ Name Field --------------------*/}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name</span>

                            </label>
                            <input
                                type="text" placeholder="Email" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Full Name is required"
                                    },

                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}



                            </label>
                        </div>
                        {/*----------------- Password Fiels---------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>

                            </label>
                            <input
                                type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}


                            </label>
                        </div>
                        {/*----------------- Confirm Password ------------------*/}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>

                            </label>
                            <input
                                type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}


                            </label>
                        </div>

                        <input />
                        {/* <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>

                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>

                            </label>
                        </div> */}


                        <input type="submit" value="Sign Up" class="btn text-white btn-secondary input input-bordered w-full max-w-xs my-3" />
                        {signUpError}
                    </form>
                    <p>Already Have an Account? <Link className='text-secondary pl-2' to="/login">Please Login</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => { signInWithGoogle() }} class="btn">Continue With Google</button>
                </div>

                <div class="flex flex-col w-full border-opacity-50">
                    {/* <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> */}

                    {/* <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> */}
                </div>
            </div>
        </div>
    );


};

export default SignUp;