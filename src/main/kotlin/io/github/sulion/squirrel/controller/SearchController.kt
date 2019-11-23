package io.github.sulion.squirrel.controller

import io.github.sulion.squirrel.model.Dish

class SearchController {

    fun search(query: String): List<Dish> =
        listOf(
            Dish("Рагу по-сычуански", 154.0, 85.0, 34.0, 100),
            Dish("Гратен", 13.0, 40.0, 80.0, 200),
            Dish("Трюфель шоколадный", 2.0, 35.0, 100.0, 300)
        )
}