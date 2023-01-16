
class ListUsersService{
	async execute(){
		const response = await fetch('https://randomuser.me/api/?results=10').then(data => {
			return data.json(); 
		});
		
		return response.results.map((result: any) => {
			const data = {
				name: result.name, 
				picture: result.picture, 
				email: result.email, 
				user: {
					userName: result.login.username,
					id: result.login.uuid
				} , 
				dob: result.dob
			};

			return data;
		});
	}
}


export { ListUsersService };