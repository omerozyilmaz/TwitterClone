import React from "react";
import { useForm } from "react-hook-form";
export default function AddTweet() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1>Add a Tweet </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="tweet">Tweet</label>
          <input id="tweet" {...register("tweet", { required: true })} />
        </div>
        <button type="submit">Add Tweet</button>
      </form>
    </div>
  );
}
