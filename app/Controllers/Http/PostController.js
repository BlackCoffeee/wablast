"use strict";

const Post = use("App/Models/Post");

class PostController {
    async index({ request, response, view }) {
        const posts = await Post.all();
        return view.render("posts.index", { posts: posts.rows });
    }

    async create({ request, response, view }) {
        return view.render("posts.create");
    }

    async store({ request, response, session }) {
        // simpan post
        const post = new Post();
        post.title = request.input("title");
        post.content = request.input("content");
        console.log("Saving post:", post);
        await post.save();

        session.flash({ notification: "Data Berhasil Disimpan!" });
        return response.route("posts.index");
    }
}

module.exports = PostController;
