import React from 'react';
import './Homepage.scss'
import Layout from "../../components/Layout/CommonLayout/Layout";
import banner from './../../assets/images/banner.jpg'
import classNames from "classnames";
import CardVertical from "../../components/Card/CardVertical";
import post1 from './../../assets/images/post/post1.jpg'
import CardWithTitle from "../../components/Card/CardWithTitle";

function Homepage() {
    const posts = [
        {
            image: post1,
            title: "One of Saturn’s largest rings may be newer than anyone",
            category: "Tourism",
            createdAt: "June 6, 2019",
            createdBy: "Tran Hoa"
        },
        {
            image: post1,
            title: "One of Saturn’s largest rings may be newer than anyone",
            category: "Tourism",
            createdAt: "June 6, 2019",
            createdBy: "Tran Hoa"
        },
        {
            image: post1,
            title: "One of Saturn’s largest rings may be newer than anyone",
            category: "Tourism",
            createdAt: "June 6, 2019",
            createdBy: "Tran Hoa"
        },
        {
            image: post1,
            title: "One of Saturn’s largest rings may be newer than anyone",
            category: "Tourism",
            createdAt: "June 6, 2019",
            createdBy: "Tran Hoa"
        },
    ]
    const renderPost = posts.map((post, index) => (
        <CardVertical key={index} category={post.category} srcImage={post.image} title={post.title}
                      createdAt={post.createdAt}
                      createdBy={post.createdBy}
                      classes={classNames('text-center')}
        />)
    )
    return (
        <Layout>
            <div className={"homepage"}>
                <div className="homepage__banner" style={{backgroundImage: `url(${banner})`}}>
                    <div className={'container'}>
                        <h1>Homepage</h1>
                    </div>
                </div>
                <div className={classNames("content", "container", "d-flex", "justify-content-between")}>
                    <div className={classNames("content__left")}>
                        {renderPost}
                    </div>
                    <div className="content__right">
                        <CardWithTitle title={"Author"}>
                            <CardVertical category={posts[0].category} srcImage={posts[0].image} title={posts[0].title}
                                          createdAt={posts[0].createdAt}
                                          createdBy={posts[0].createdBy}
                                          classes={classNames('text-center', 'mt-3')}
                            />
                            <div className={classNames('text-center', 'p-4')}>
                                Continue Reading
                            </div>
                        </CardWithTitle>
                        <CardWithTitle title={"Featured posts"}>
                            <CardVertical category={posts[0].category} srcImage={posts[0].image} title={posts[0].title}
                                          createdAt={posts[0].createdAt}
                                          createdBy={posts[0].createdBy}
                                          classes={classNames('text-center', 'mt-3')}
                            />
                        </CardWithTitle>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Homepage;