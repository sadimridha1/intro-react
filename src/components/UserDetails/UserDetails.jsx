import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const users = useLoaderData()
    const {name, phone} = users
    return (
        <div>
            <h1>Show details</h1>
            <h2>{name}</h2>
            <h2>{phone}</h2>
        </div>
    );
};

export default UserDetails;