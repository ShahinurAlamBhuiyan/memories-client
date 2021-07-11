import * as api from '../api';
import { CREATE, DELETE, FETCH_ALL, UPDATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, LIKE, FETCH_POST } from '../constants/actionTypes';

// Action Creators

export const getPost = (id) => async (dispatch) => {  //done
    try {

        dispatch({ type: START_LOADING});
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data }); // if payload: { data } is show error
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
    }
};


// export const getPosts = (page) => async (dispatch) => { // my one
//     try {

//         dispatch({ type: START_LOADING});
//         const { data } = await api.fetchPosts(page);
//         dispatch({ type: FETCH_ALL, payload: data });
//         dispatch({ type: END_LOADING });

//     } catch (error) {
//         console.log(error);
//     }
// };

export const getPosts = (page) => async (dispatch) => { // copy one
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => { // my one
    try {
        dispatch({ type: START_LOADING});
        const { data: {data} } = await api.fetchPostsBySearch(searchQuery);
        
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
    }
}

// export const getPostsBySearch = (searchQuery) => async (dispatch) => { // copy one
//   try {
//     dispatch({ type: START_LOADING });
//     const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

//     dispatch({ type: FETCH_BY_SEARCH, payload: { data } }); //63 this for error
//     dispatch({ type: END_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };




// export const createPost = (post, history) => async (dispatch) => { // my one
//     try {
//         dispatch({ type: START_LOADING});
//         const { data } = await api.createPost(post);

//         history.push(`/posts/${data._id}`)

//         dispatch({ type: CREATE, payload: data })
//         dispatch({ type: END_LOADING }); // 81

//     } catch (error) {
//         console.log(error);
//     }
// }

export const createPost = (post, history) => async (dispatch) => { // copy one
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    history.push(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};


export const updatePost = (id, post) => async (dispatch) => { // done
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}


export const likePost = (id) => async (dispatch) => { // done
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = (id) => async (dispatch) => { // done
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
};







// import * as api from '../api';
// import { CREATE, DELETE, FETCH_ALL, UPDATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, LIKE, FETCH_POST } from '../constants/actionTypes';

// // Action Creators

// export const getPost = (id) => async (dispatch) => {
//     try {

//         dispatch({ type: START_LOADING});
//         const { data } = await api.fetchPost(id);
//         dispatch({ type: FETCH_POST, payload: data });
//         dispatch({ type: END_LOADING });

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getPosts = (page) => async (dispatch) => {
//     try {

//         dispatch({ type: START_LOADING});
//         const { data } = await api.fetchPosts(page);
//         dispatch({ type: FETCH_ALL, payload: data });
//         dispatch({ type: END_LOADING });

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING});
//         const { data: {data} } = await api.fetchPostsBySearch(searchQuery);
        
//         dispatch({ type: FETCH_BY_SEARCH, payload: data });
//         dispatch({ type: END_LOADING });

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const createPost = (post, history) => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING});
//         const { data } = await api.createPost(post);

//         history.push(`/posts/${data._id}`)

//         dispatch({ type: CREATE, payload: data })
//         dispatch({ type: END_LOADING });

//     } catch (error) {
//         console.log(error);
//     }
// }


// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);

//         dispatch({ type: UPDATE, payload: data });

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);

//         dispatch({ type: DELETE, payload: id });

//     } catch (error) {
//         console.log(error);
//     }
// }


// export const likePost = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likePost(id);

//         dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }