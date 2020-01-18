import { withRouter, useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import BaseLayout from "../../../components/layouts/BaseLayout";
import React from "react";

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
    }

    static async getInitialProps({query}){
        let portfolio = {};
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
            portfolio = await response.json();
        }catch(err) {
            console.error(err);
        }
        return { portfolio };
    }

    render() {
        const { portfolio, router } = this.props;
        return (
            <>
                <BaseLayout>
                    <h1>I'am { portfolio.title}  page </h1>
                    <h2> { portfolio.id } </h2>
                    <h2> { portfolio.body } </h2>
                </BaseLayout>
            </>
        )
    }
}

export default withRouter(Portfolio);
