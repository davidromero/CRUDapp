const postReducer = (state = [], action) => {
	switch (action.type) {
	case 'ADD_POST':
		return state.concat([action.data])
	case 'DELETE_POST':
		return state.filter((post) => post.id !== action.id)
	case 'EDIT_POST':
		return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
	case 'UPDATE':
		return state.map((post) => {
			if (post.id === action.id) {
			return {
				...post,
				title: action.data.newTitle,
				message: action.data.newMessage,
				message2: action.data.newMessage2,
				message3: action.data.newMessage3,
				message4: action.data.newMessage4,
				editing: !post.editing
			}
		} else return post;
	})

default:
	return state;
	}
	}

export default postReducer;