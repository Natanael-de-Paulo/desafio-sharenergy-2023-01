interface UserProps {
  user: string;
  password: string;
  email: string;
}


interface ClientProps {
  name: string;
  email: string;
  telephone: string;
  address: Address;
  cpf: string;
}

type Address = {
  street: string;
  houseNumber: string;
  district: string;
  cep: string;
  city: string;
  state: string;
}

export {
	UserProps,
	ClientProps,
	Address
};