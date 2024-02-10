import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable-ui/Button";

const EmptyUser = {
   identifiant: "",
   password: "",
};

const Login = () => {
   const [user, setUser] = useState(EmptyUser);
   const navigate = useNavigate();

   const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (user.identifiant === "admin" && user.password === "admin") {
         localStorage.setItem("admin", JSON.stringify(true));
         navigate("/");
      }
   };

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser({
         ...user,
         [name]: value,
      });
   };

   const inputsConfig = [
      {
         id: 1,
         type: "text",
         placeholder: "Identifiant",
         name: "identifiant",
         onChange: handleOnChange,
      },
      {
         id: 2,
         type: "password",
         placeholder: "Mot de passe",
         name: "password",
         onChange: handleOnChange,
      },
   ];

   return (
      <form onSubmit={handleOnSubmit} method="post">
         {inputsConfig.map(({ id, type, placeholder, name, onChange }) => {
            return (
               <input
                  key={id}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  onChange={onChange}
               />
            );
         })}
         <Button>Se connecter</Button>
      </form>
   );
};

export default Login;
