import React from "react"

function Article({ news }) {

    return (
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {news.map((post,index) => (
                <article key={index} className="flex max-w-xl flex-col items-start justify-between my-10">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.publishedAt} className="text-gray-500">
                            {post.publishedAt}
                        </time>
                        <a
                            href={post.url}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            {post.title}
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={post.url}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                        </h3>
                        <div className="h-100 w-100 my-10">
                            <img src={post.urlToImage != null  ? post.urlToImage : '/img/not-found.png'} alt="" className="h-auto w-100  py-8 bg-gray-50" />
                        </div>

                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">

                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={post.url}>
                                    <span className="absolute inset-0" />
                                    {post.author}
                                </a>
                            </p>
                            <p className="text-gray-600">{post.author}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Article