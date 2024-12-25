"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Post extends Model {
    static boot() {
        super.boot();

        this.addHook("beforeCreate", async (postInstance) => {
            postInstance.id = `post_${Date.now()}_${Math.random()
                .toString(36)
                .slice(2, 11)}`;
        });
    }

    static get dates() {
        return super.dates.concat(["deleted_at"]);
    }

    static get softDeletes() {
        return true;
    }
}

module.exports = Post;
