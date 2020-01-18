import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import fetch from "isomorphic-unfetch";

class Index extends React.Component{

    static async getInitialProps (){
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await res.json();
        console.log(data.length);
        return data;
    }

    render() {
        const { data } = this.props;
        return(
            <BaseLayout>
                <h1> This is Kishore's Index page </h1>
            </BaseLayout>
        )
    }
}
export default Index;
