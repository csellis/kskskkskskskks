export async function get({ params }) {
	// `params.id` comes from [id].js

	let item = {
		name: 'Chris Ellis',
		email: 'me@chrisellis.dev'
	}

	if (item) {
	  return {
		body: { item }
	  };
	}
   
	return {
	  status: 404
	};
  }