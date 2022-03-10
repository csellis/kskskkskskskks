export async function get({ params }) {
	// `params.id` comes from [id].js

	let item = {
		name: 'Chris Ellis',
		email: 'me@chrisellis.dev'
	}

	let wizards = await fetch('https://wizard-world-api.herokuapp.com/Wizards')

	if (item) {
	  return {
		body: { item, wizards }
	  };
	}
   
	return {
	  status: 404
	};
  }