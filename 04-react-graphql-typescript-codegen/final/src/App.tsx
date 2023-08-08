import { useForm } from "react-hook-form";
import "./App.css";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, GET_USERS, UPDATE_USER } from "./operations/user";
import { useEffect, useState } from "react";
import {
  CreateUserInput,
  CreateUserMutation,
  CreateUserMutationVariables,
  GetUsersQuery,
  GetUsersQueryVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      age: 0,
      nationality: "",
    },
  });
  const [responseData, setResponseData] = useState({});
  const [users, setUsers] = useState<UpdateUserInput[]>([]);
  const { data, refetch } = useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GET_USERS
  );
  const [createUser] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER);
  const [updateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UPDATE_USER);

  const onSubmit = async (data: UpdateUserInput) => {
    const payload: CreateUserInput | UpdateUserInput = {
      id: "",
      name: data.name,
      age: Number(data.age),
      nationality: data.nationality,
    };

    try {
      if (data.id) {
        payload.id = data.id;
        const result = await updateUser({ variables: { input: payload } });
        setResponseData(result);
        return;
      }

      const result = await createUser({ variables: { input: payload } });
      setResponseData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const selectUser = (user: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = user.target.value;

    // If it's a create user process
    if (Number(userId) === -1) {
      reset();
      return;
    }

    const selectedUser = data?.users.find((user) => user.id === userId);

    if (selectedUser) {
      setValue("id", selectedUser.id);
      setValue("name", selectedUser.name);
      setValue("age", selectedUser.age);
      setValue("nationality", selectedUser.nationality);
    }
  };

  useEffect(() => {
    if (data && data.users) {
      setUsers(data.users);
      setResponseData(data);
    }
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-15">
            <label htmlFor="userId">Users:</label>
            <select id="userId" onChange={(event) => selectUser(event)}>
              <option selected value={-1}>
                CREATE USER
              </option>
              {users.length > 0
                ? users.map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.name} - {user.id}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="mb-15">
            <label>ID:</label>
            <input {...register("id")} type="text" disabled />
          </div>
          <div className="mb-15">
            <label htmlFor="name">Name:</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
            />
            <div className="error">
              {errors.name ? errors.name.message : null}
            </div>
          </div>
          <div className="mb-15">
            <label htmlFor="age">Age:</label>
            <input
              {...register("age", { required: "Age is required" })}
              type="number"
            />
            <div className="error">
              {errors.age ? errors.age.message : null}
            </div>
          </div>
          <div className="mb-15">
            <label htmlFor="nationality">Nationality:</label>
            <select
              {...register("nationality", {
                required: "Nationality is required",
              })}
            >
              <option value="AUSTRALIA">Australia</option>
              <option value="GERMANY">Germany</option>
              <option value="JAPAN">Japan</option>
              <option value="MALAYSIA">Malaysia</option>
              <option value="SINGAPORE">Singapore</option>
            </select>
            <div className="error">
              {errors.nationality ? errors.nationality.message : null}
            </div>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <h2>Result</h2>
          <div>
            <button type="button" onClick={() => refetch()}>
              Get Users
            </button>
          </div>
          {JSON.stringify(responseData)}
        </div>
      </form>
    </>
  );
}

export default App;
