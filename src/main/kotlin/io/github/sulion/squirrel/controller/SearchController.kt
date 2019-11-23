package io.github.sulion.squirrel.controller

import com.mongodb.client.MongoClient
import com.mongodb.client.model.Filters.text
import io.github.sulion.squirrel.model.Dish
import org.bson.BsonDocument
import org.bson.BsonString

class SearchController(
    val mongoClient: MongoClient
) {
    val dishes = mongoClient.getDatabase("squirrel").getCollection(Dish::class.simpleName!!, Dish::class.java)

    init {
        val indexes = BsonDocument()
        indexes["venue"] = BsonString("text")
        indexes["name"] = BsonString("text")
        dishes.createIndex(indexes)
    }

    fun search(query: String): List<Dish> =
        dishes.find(
            text(query)
        ).toList()
}