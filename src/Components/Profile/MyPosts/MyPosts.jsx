import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';

const minLength = (minLength) => (value) =>
    value && value.length > minLength ? undefined : 'Post body cannot be empty';

const MyPosts = ({ posts, addPost }) => {
    const PostForm = (props) => {
        return (
            <Form
                onSubmit={props.onSubmit}
                validate={props.validate}
                render={({ handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.newPost}>
                                <Field
                                    name="postInput"
                                    component="textarea"
                                    // ref={newPostElement}
                                    // onChange={onNewPostInputUpdate}
                                    // value={newPostInput}
                                    autoFocus
                                    validate={minLength(0)}
                                >
                                    {({ input, meta }) => {
                                        return (
                                            <div>
                                                {/* <label>First Name</label> */}
                                                <input
                                                    {...input}
                                                    type="text"
                                                    placeholder="Write a post..."
                                                />
                                                {meta.error && meta.touched && (
                                                    <span>{meta.error}</span>
                                                )}
                                            </div>
                                        );
                                    }}
                                </Field>
                                <div>
                                    <button>Create post</button>
                                </div>
                            </div>
                        </form>
                    );
                }}
            ></Form>
        );
    };

    const postsElemets = posts.map((p) => (
        <Post key={p.id} id={p.id} text={p.text} likesCount={p.likesCount} />
    ));

    const onAddPost = (props) => {
        addPost(props.postInput);
    };

    return (
        <div className={styles.postsContainer}>
            <PostForm onSubmit={onAddPost} />
            <div className={styles.posts}>{postsElemets}</div>
        </div>
    );
};

export default MyPosts;
