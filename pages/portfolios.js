import React from 'react';
import Link from 'next/link';
import fetch from "isomorphic-unfetch";

import BaseLayout from "../components/layouts/BaseLayout"

class Portfolios extends React.Component{

    static async getInitialProps (){
        let posts = {};
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            posts = await res.json();
        } catch(error){
            console.err(error);
        }
        return { posts: posts.splice(0,10) };
    }

    renderPosts(posts){
        return posts.map((post, index) => {
            return(
                <li key={ index }>
                    <Link href='/portfolio/[id]' as={`/portfolio/${ post.id} `}>
                        <a style={{ 'fontSize':'20px' }}> { post.title } </a>
                    </Link>
                </li>

            )
        });
    }

    render() {
        const { posts } = this.props;
        return(
            <BaseLayout>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}
export default Portfolios;
