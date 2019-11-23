package io.github.sulion.squirrel.model

import org.bson.codecs.pojo.annotations.BsonId
import org.bson.types.ObjectId

annotation class DefaultConstructor

@DefaultConstructor
data class Dish(
    @BsonId val id: ObjectId,
    val venue: String,
    val name: String,
    val carbs: Double,
    val fats: Double,
    val proteins: Double,
    val energy: Int
)