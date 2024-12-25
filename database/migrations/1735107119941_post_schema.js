"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PostSchema extends Schema {
    up() {
        this.create("posts", (table) => {
            table.string("id").primary();
            table.string("title");
            table.string("content");
            table.timestamps();
            table.timestamp("deleted_at").nullable();
        });
    }

    down() {
        this.drop("posts");
    }
}

module.exports = PostSchema;
